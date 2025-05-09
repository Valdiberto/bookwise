import { styled } from '../../../stitches.config'

export const LoginContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const LogoSection = styled('section', {
  width: '100%',
  height: '100%',
  background: 'url(/images/logo-bg.png) no-repeat center',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
})

export const WelcomeSection = styled('section', {
  width: '100%',
  maxWidth: 372,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: 20,

  section: {
    marginTop: 40,
  },
})
