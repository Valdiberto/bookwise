import { styled } from '../../../stitches.config'

export const AuthContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const AuthButton = styled('button', {
  width: '100%',
  height: 72,
  border: 'none',
  backgroundColor: '$gray600',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$gray200',
  fontSize: '$lg',
  padding: '0 $6',
  borderRadius: 8,
  display: 'flex',

  alignItems: 'center',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  img: {
    marginRight: '$5',
  },
})

export const AuthError = styled('span', {
  color: '#f75a68',
  marginBottom: '$4',
})
