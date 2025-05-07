import { useSession } from 'next-auth/react'
import { Fragment, useState } from 'react'

import { LoginDialog } from '../LoginDialog'
import { ReviewForm } from '../ReviewForm'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserReviewCard } from '../UserReviewCard'
import { Container } from './styles'

type BookReviewsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookReviews = ({ bookId, ratings }: BookReviewsProps) => {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'

  function handleReviewBook() {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const ReviewWrapper = isAuthenticated ? Fragment : LoginDialog

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)

  return (
    <Container>
      <header>
        <Text size="sm" color="gray-200">
          Avaliações
        </Text>
        {canRate && (
          <ReviewWrapper>
            <Link
              withoutIcon
              text="Avaliar"
              color="purple"
              onClick={handleReviewBook}
            />
          </ReviewWrapper>
        )}
      </header>
      <section>
        {showForm && (
          <ReviewForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByDate.map((rating) => (
          <UserReviewCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
