import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: '$gray800',
  border: '1px solid currentColor',
  borderRadius: 4,
  color: '$gray500',
  transition: '0.2s',

  '&:focus-within': {
    color: '$green200',
  },

  textarea: {
    flex: '1',
    border: 'none',
    background: 'none',
    padding: '0.875rem $5',
    fontSize: '0.875rem',
    resize: 'none',
    minHeight: '136px',
    color: '$gray100',
    outline: 'none',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  span: {
    color: '#7c7c8a',
    fontSize: '$xs',
    marginLeft: 'auto',
    paddingRight: 8,
    paddingBottom: 4,
  },
})
