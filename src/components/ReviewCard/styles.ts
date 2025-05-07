import Image from 'next/image'

import { styled } from '../../../stitches.config'

export const CardContainer = styled('div', {
  width: '100%',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  padding: '$6',

  variants: {
    variant: {
      default: {
        background: '$gray700',
      },
      compact: {
        background: '$gray600',
      },
    },
  },
})

export const CompactDetails = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$3',
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$8',

  section: {
    display: 'flex',
    gap: '$4',
    alignItems: 'center',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
})

export const BookImage = styled(Image, {
  minWidth: 108,
  objectFit: 'cover',
  transition: '0.2s',
  borderRadius: 4,
  marginRight: '$5',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ToggleShowMoreButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '0.875rem',
  color: '$purple100',
  fontWeight: '$bold',
  marginLeft: '$1',
})
