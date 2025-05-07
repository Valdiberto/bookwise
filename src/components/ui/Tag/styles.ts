import { styled } from '../../../../stitches.config'

export const TagContainer = styled('button', {
  borderRadius: '$full',
  background: 'none',
  border: '1px solid $purple100',
  color: '$purple100',
  fontSize: '$md',
  transition: '0.2s',

  padding: '$2 $4',

  '&:hover': {
    color: '$gray100',
    background: '$purple200',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        background: '$purple200',
        borderColor: '$purple200',
      },
    },
  },
})
