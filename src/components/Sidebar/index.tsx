import { SignOut } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import { Navigation } from '../Navigation'
import { Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { Container, LoginButton, UserDetails } from './styles'

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const user = session?.user

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }

  return (
    <Container>
      <div>
        <img className="logo" src="/images/Logotext.svg" alt="BookWise Logo" />
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignOut size={20} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              src={user?.avatar_url || '/images/default-avatar.png'}
              size="sm"
              alt={user?.name}
              onClick={handleOpenProfile}
              css={{ cursor: 'pointer' }}
            />
            <Text size="sm" color="gray-200">
              {user?.name}
            </Text>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}
