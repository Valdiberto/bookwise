import { Book, Rating, User } from '@prisma/client'
import Link from 'next/link'

import { useToggleShowMore } from '@/hooks/useToggleShowMore'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

import { RatingStars } from '../RatingStars'
import { Heading, Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import {
  BookContent,
  BookDetails,
  BookImage,
  CardContainer,
  CompactDetails,
  ToggleShowMoreButton,
  UserDetails,
} from './styles'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type ReviewCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: 'default' | 'compact'
}

const MAX_SUMMARY_LENGTH = 180

export const ReviewCard = ({
  rating,
  variant = 'default',
}: ReviewCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-br')

  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  return (
    <>
      <CardContainer variant={variant}>
        {variant === 'default' && (
          <UserDetails>
            <section>
              <Link href={`/profile/${rating.user_id}`}>
                <Avatar
                  size="md"
                  src={rating.user.avatar_url ?? '/images/default-avatar.png'}
                  alt={rating.user.name}
                />
              </Link>
              <div>
                <Text size="md">{rating.user.name}</Text>
                <Text size="sm" color="gray-400">
                  {distance}
                </Text>
              </div>
            </section>
            <RatingStars rating={rating.rate} />
          </UserDetails>
        )}
        <BookDetails>
          <Link href={`/esplore?book=${rating.book_id}`}>
            <BookImage
              src={rating.book.cover_url}
              alt="book"
              width={108}
              height={152}
            />
          </Link>
          <BookContent>
            <div>
              {variant === 'compact' && (
                <CompactDetails>
                  <Text size="sm" color="gray-300">
                    {distance}
                  </Text>
                  <RatingStars rating={rating.rate} />
                </CompactDetails>
              )}
              <Heading size="xs">{rating.book.name}</Heading>
              <Text size="sm" color="gray-400">
                {rating.book.author}
              </Text>
            </div>
            <Text
              size="sm"
              color="gray-300"
              css={{
                marginTop: '$5',
              }}
            >
              {bookSummary}
              {(rating.book.summary?.length ?? 0) > MAX_SUMMARY_LENGTH && (
                <ToggleShowMoreButton onClick={toggleShowMore}>
                  {isShowingMore ? 'ver menos' : 'ver mais'}
                </ToggleShowMoreButton>
              )}
            </Text>
          </BookContent>
        </BookDetails>
      </CardContainer>
    </>
  )
}
