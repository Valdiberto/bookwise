import { styled } from '../../../../stitches.config'

export const ActionContainer = styled('button', {
  width: 40,
  height: 40,
  background: '$gray600',
  border: 'none',
  padding: '$2',
  borderRadius: 4,
  transition: '0.2s',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    height: 24,
    width: 24,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
