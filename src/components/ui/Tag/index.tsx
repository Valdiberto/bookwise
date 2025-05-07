import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

import { TagContainer } from './styles'

type TagProps = ComponentProps<typeof TagContainer> & {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <TagContainer active={active} {...props}>
      {children}
    </TagContainer>
  )
}
