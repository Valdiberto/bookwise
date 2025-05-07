import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'

import { ProfileData } from '@/pages/profile/[id]'

import { Heading, Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { ProfileItemsDetails } from './ProfileItemsDetails'
import { Container, ProfilesDetailsSection, UserDetails } from './styles'

type ProfileDetailsProps = {
  profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <Container>
      <UserDetails>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url}
        />
        <Heading css={{ marginTop: 20 }} size="md">
          {profile.user.name}
        </Heading>
        <Text size="sm" color="gray-400">
          membro desde {memberSinceYear}
        </Text>
      </UserDetails>
      <ProfilesDetailsSection>
        <ProfileItemsDetails
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas Lidas"
        />
        <ProfileItemsDetails
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />
        <ProfileItemsDetails
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />
        {profile?.mostReadCategory && (
          <ProfileItemsDetails
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfilesDetailsSection>
    </Container>
  )
}
