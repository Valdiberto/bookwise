import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

import { buildNextAuthOptions } from '../../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) return res.status(401).end()

  try {
    const bookId = String(req.query.bookId)
    const userId = String(session?.user?.id)

    const bodySchema = z.object({
      description: z.string().max(450),
      rate: z.number().min(1).max(5),
    })

    const { description, rate } = bodySchema.parse(req.body)

    const userAlreadyRate = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    })
    if (userAlreadyRate) {
      return res.status(400).json({
        error: 'You already rate this book',
      })
    }

    await prisma.rating.create({
      data: {
        book_id: bookId,
        description,
        rate,
        user_id: userId,
      },
    })

    return res.status(201).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
