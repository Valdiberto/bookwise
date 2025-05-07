import Image from 'next/image'

import { styled } from '../../../stitches.config'
import { Heading } from '../Typography'

export const BookContainer = styled('div', {
  display: 'flex',
  borderRadius: 8,
  background: '$gray700',
  gap: '$5',
  padding: '$4 $5',

  border: '1px solid $gray700',
  cursor: 'pointer',

  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    borderColor: '$gray600',
  },
})

export const BookImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: 4,

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const ReadBadge = styled('span', {
  position: 'absolute',
  display: 'block',
  background: '#0a313c',
  top: 0,
  right: 0,
  color: '$green100',
  fontWeight: '$bold',
  fontSize: '$xs',
  padding: '$1 $3',
  borderRadius: '0px 4px 0px 4px',
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookName = styled(Heading, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})
