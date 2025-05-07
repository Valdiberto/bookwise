import { styled } from '../../../../../stitches.config'

export const InputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: '$gray800',
  color: '$gray500',
  borderRadius: 4,
  border: '1px solid currentColor',
  paddingRight: '$5',
  transition: '0.2s',
  gap: '$5',

  '&:focus-within': {
    color: '$green200',
  },

  input: {
    height: 48,
    flex: 1,
    paddingLeft: '$5',
    background: 'none',
    border: 'none',
    color: '$gray100',
    fontSize: '$sm',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },
  },
})
