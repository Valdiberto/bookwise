import { Rating, User } from '@prisma/client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

import { RatingStars } from '../RatingStars'
import { Heading, Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { Container, UserDetails } from './styles'

export type RatingWithAuthor = Rating & {
  user: User
}

type UserReviewCardProps = {
  rating: RatingWithAuthor
}

export const UserReviewCard = ({ rating }: UserReviewCardProps) => {
  const { data: session } = useSession()

  const isOwner = session?.user?.id === rating.user_id

  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt={rating.user.name} src={rating.user.avatar_url || ''} />
          </Link>

          <div>
            <Heading size="xs">{rating.user.name}</Heading>
            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </UserDetails>
      <Text size="sm" color="gray-300">
        {rating.description}
      </Text>
    </Container>
  )
}
