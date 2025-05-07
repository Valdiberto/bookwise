import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
  height: 'max-content',
  marginTop: 70,
})

export const UserDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::after': {
    content: "''",
    display: 'block',
    width: 32,
    height: 4,
    background: '$gradient-horizontal',
    borderRadius: '$full',
    marginTop: 40,
  },
})

export const ProfilesDetailsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  marginTop: 40,
})
