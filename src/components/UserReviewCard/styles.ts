import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  background: '$gray700',
  borderRadius: 8,
  padding: '$6',

  variants: {
    variant: {
      primary: {
        background: '$gray700',
      },
      highlight: {
        background: '$gray600',
      },
    },
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginBottom: '$5',

  '> section': {
    display: 'flex',

    gap: '$4',
  },
})
