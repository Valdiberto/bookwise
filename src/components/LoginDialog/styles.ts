import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',

  inset: 0,
  background: '#00000099',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  width: 516,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '$gray700',
  boxShadow: '-4px 0px 30px 0px #00000040',
  borderRadius: 12,
  padding: '56px 72px',

  '> div': {
    maxWidth: 372,
    margin: '0 auto',
    textAlign: 'center',
  },
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray400',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
