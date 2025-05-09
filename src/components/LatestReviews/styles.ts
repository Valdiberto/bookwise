import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingBottom: 40,

  header: {
    marginBottom: '$4',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const LatestContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$4',
    marginBottom: '$4',
  },
})
