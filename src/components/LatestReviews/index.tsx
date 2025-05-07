import { ChartLineUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { api } from '@/lib/axios'

import { RatingWithAuthorAndBook, ReviewCard } from '../ReviewCard'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { PageTitle } from '../ui/PageTitle'
import { Container, LatestContainer } from './styles'

export const LatestReviews = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data?.ratings ?? []
    },
  })

  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const { data } = await api.get('/ratings/user-latest')
      return data?.rating ?? null
    },
    enabled: !!userId,
  })

  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />
      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text>Sua última avaliação</Text>
            <Link text="Ver todas" href={`/profile/${userId}`} />
          </header>

          <ReviewCard variant="compact" rating={latestUserRating} />
        </LatestContainer>
      )}

      <header>
        <Text size="sm">Avaliações mais recentes</Text>
      </header>
      <section>
        {ratings?.map((rating) => (
          <ReviewCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
