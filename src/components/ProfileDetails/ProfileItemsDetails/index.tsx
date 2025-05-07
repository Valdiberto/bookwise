import { ReactNode } from 'react'

import { Heading, Text } from '@/components/Typography'

import { Container } from './styles'

type ProfileItemsDetailsProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileItemsDetails = ({
  icon,
  info,
  label,
}: ProfileItemsDetailsProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Heading size="xs" color="gray-200">
          {info}
        </Heading>
        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </Container>
  )
}
