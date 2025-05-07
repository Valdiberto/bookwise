import Link from 'next/link'

import { styled } from '../../../stitches.config'

export const Container = styled('aside', {
  width: '232px',
  // height: 'calc(100% - 40px)',
  background: '$gray700 url("/images/sidebar-bg.png") no-repeat center',
  margin: 20,
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,
    marginBottom: 64,
  },
})

export const LoginButton = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$md',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
