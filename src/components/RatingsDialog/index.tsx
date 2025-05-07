import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import { CategoriesOnBooks, Category } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

import { api } from '@/lib/axios'

import { BookWithAvgRating } from '../BookCard'
import { BookReviews } from '../BookReviews'
import { RatingStars } from '../RatingStars'
import { Heading, Text } from '../Typography'
import { RatingWithAuthor } from '../UserReviewCard'
import { BookInfo } from './BookInfo'
import {
  BookContent,
  BookDetailsCard,
  BookDetailsContainer,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingDialogProps = {
  bookId: string
  children: ReactNode
}

export const RatingsDialog = ({ bookId, children }: RatingDialogProps) => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true)
    }
  }, [bookId, paramBookId])

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`)
      return data?.book ?? {}
    },
    enabled: open,
  })

  const ratingsLength = book?.ratings?.length ?? 0
  const categories =
    book?.categories?.map((X) => X?.category?.name)?.join(', ') ?? ''

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explore', undefined, { shallow: true })
    }
    setOpen(open)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <VisuallyHidden>
            <Dialog.Title></Dialog.Title>
            <Dialog.Description></Dialog.Description>
          </VisuallyHidden>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsCard>
                <BookDetailsContainer>
                  <BookImage
                    src={book?.cover_url}
                    alt={book?.name}
                    width={172}
                    height={242}
                  />
                  <BookContent>
                    <div>
                      <Heading size="sm">{book.name}</Heading>
                      <Text color="gray-300" css={{ marginTop: '$2' }}>
                        {book.author}
                      </Text>
                    </div>
                    <div>
                      <RatingStars size="md" rating={book.avgRating} />
                      <Text color="gray-400">
                        {ratingsLength}{' '}
                        {ratingsLength === 1 ? 'avaliação' : 'avaliações'}
                      </Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple size={24} />}
                    info="Categorias"
                    title={categories}
                  />
                  <BookInfo
                    icon={<BookOpen size={24} />}
                    info="Páginas"
                    title={String(book.total_pages)}
                  />
                </BookInfos>
              </BookDetailsCard>
            </>
          )}
          <BookReviews bookId={bookId} ratings={book?.ratings ?? []} />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
