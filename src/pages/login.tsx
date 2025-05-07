import { AuthButtons } from '@/components/AuthButtons'
import { Heading, Text } from '@/components/Typography'

import {
  LoginContainer,
  LogoSection,
  WelcomeSection,
} from '../styles/pages/login'

export default function Login() {
  return (
    <LoginContainer>
      <LogoSection>
        <img src="/images/Logotext.svg" alt="bookwise logo" />
      </LogoSection>
      <WelcomeSection>
        <Heading size="lg">Boas vindas!</Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

        <AuthButtons canGuest />
      </WelcomeSection>
    </LoginContainer>
  )
}
