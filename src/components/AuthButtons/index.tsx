import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { AuthButton, AuthContainer, AuthError } from './styles'

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export const AuthButtons = ({
  callbackUrl = '/',
  canGuest,
}: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      return router.push('/')
    }

    signIn(provider, {
      callbackUrl,
    })
  }
  const hasAuthError = !!router.query.error

  return (
    <AuthContainer>
      <AuthButton onClick={() => handleSignIn('google')}>
        <img src="/images/icons/google-icon.svg" alt="google icon" />
        Entrar com Goggle
      </AuthButton>
      {hasAuthError && <AuthError>Falha ao se conectar ao Google.</AuthError>}
      <AuthButton onClick={() => handleSignIn('github')}>
        <img src="/images/icons/github-fill.svg" alt="github icon" />
        Entrar com GitHub
      </AuthButton>

      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <img src="/images/icons/RocketLaunch.svg" alt="Rocket icon" />
          Entrar como visitante
        </AuthButton>
      )}
    </AuthContainer>
  )
}
