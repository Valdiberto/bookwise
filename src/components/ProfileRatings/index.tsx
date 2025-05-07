import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useMemo, useState } from 'react'

import { Text } from '../Typography'
import { Input } from '../ui/form/Input'
import { Link } from '../ui/Link'
import { PageTitle } from '../ui/PageTitle'
import { ProfileRatingsCard } from './ProfileRatingsCard'
import { ProfileContainer, RatingsList } from './styles'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type ProfileratingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export const ProfileRatings = ({
  isOwnProfile,
  ratings,
}: ProfileratingsProps) => {
  const [search, setSearch] = useState('')

  const filteredRatings = useMemo(() => {
    return ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <ProfileContainer>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="Voltar"
          iconSide="left"
          color="white"
          css={{ alignSelf: 'flex-start' }}
        />
      )}

      <Input
        placeholder="Buscar livro avaliado"
        css={{ marginTop: 40, marginBottom: 32 }}
        icon={<MagnifyingGlass size={20} />}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />

      <RatingsList>
        {filteredRatings.map((rating) => (
          <ProfileRatingsCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <Text color="gray-400" css={{ textAlign: 'center' }}>
            {search
              ? 'Nenhum resultado encontrado'
              : 'Nenhuma avaliação encontrada'}
          </Text>
        )}
      </RatingsList>
    </ProfileContainer>
  )
}
