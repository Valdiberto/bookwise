import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { AuthButtons } from '../AuthButtons'
import { Heading } from '../Typography'
import { DialogClose, DialogContent, DialogOverlay } from './styles'

type LoginDialogProps = {
  children: ReactNode
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const router = useRouter()
  const paramBookId = router.query.book as string

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <VisuallyHidden>
            <Dialog.Title></Dialog.Title>
            <Dialog.Description></Dialog.Description>
          </VisuallyHidden>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <div>
            <Heading size="xs" color="gray-200" css={{ marginBottom: 40 }}>
              Faça login para deixar sua avaliação
            </Heading>
            <AuthButtons
              callbackUrl={
                paramBookId ? `/explore?book=${paramBookId}` : '/explore'
              }
            />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
