import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

import { theme } from '../../../../stitches.config'
import { ActionContainer } from './styles'

type ActionIconProps = ComponentProps<typeof ActionContainer> & {
  icon: ReactNode
  iconColor: keyof typeof theme.colors
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionIconProps) => {
  return (
    <ActionContainer {...props} css={{ color: `$${iconColor}` }}>
      {icon}
    </ActionContainer>
  )
}
