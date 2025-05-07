import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  background: '$gray700',
  borderRadius: 8,
})

export const UserDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  alignItems: 'center',
})
