import { Rating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ReactElement } from 'react'

import { ProfileDetails } from '@/components/ProfileDetails'
import { ProfileRating, ProfileRatings } from '@/components/ProfileRatings'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'
import { HomeContainer } from '@/styles/pages/home'

import { NextPageWithLayout } from '../_app'

export type ProfileData = {
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  ratings: ProfileRating[]
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter()
  const userId = router.query.id as string

  const { data: session } = useSession()
  const { data: profile } = useQuery<ProfileData>({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const { data } = await api.get(`/profile/${userId}`)
      return data?.profile ?? {}
    },
    enabled: !!userId,
  })

  const isOwnProfile = session?.user?.id === userId
  if (!profile) {
    return <h1>Carregando...</h1>
  }
  return (
    <HomeContainer>
      {profile ? (
        <>
          <ProfileRatings
            isOwnProfile={isOwnProfile}
            ratings={profile.ratings}
          />
          <ProfileDetails profile={profile} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </HomeContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ProfilePage
