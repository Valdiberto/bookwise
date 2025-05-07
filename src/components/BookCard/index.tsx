import { Book } from '@prisma/client'

import { RatingsDialog } from '../RatingsDialog'
import { RatingStars } from '../RatingStars'
import { Text } from '../Typography'
import {
  BookContainer,
  BookContent,
  BookImage,
  BookName,
  ReadBadge,
} from './styles'

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}
type BookCardProps = {
  book: BookWithAvgRating
  size?: 'md' | 'lg'
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    },
  }

  return (
    <>
      <RatingsDialog bookId={book?.id}>
        <BookContainer>
          {book?.alreadyRead && <ReadBadge>LIDO</ReadBadge>}
          <BookImage
            src={book.cover_url}
            alt={book.name}
            width={IMAGE_SIZES[size].width}
            height={IMAGE_SIZES[size].height}
            css={{ minWidth: IMAGE_SIZES[size].width }}
          />

          <BookContent>
            <div>
              <BookName size="xs">{book.name}</BookName>
              <Text size="sm" color="gray-400">
                {book.author}
              </Text>
            </div>
            <RatingStars rating={book.avgRating} />
          </BookContent>
        </BookContainer>
      </RatingsDialog>
    </>
  )
}
