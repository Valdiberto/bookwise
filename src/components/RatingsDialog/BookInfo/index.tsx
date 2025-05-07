import { ReactNode } from 'react'

import { Heading, Text } from '@/components/Typography'

import { BookInfoContainer } from './styles'

type BookInfoProps = {
  icon: ReactNode
  title: string
  info: string
}

export const BookInfo = ({ icon, title, info }: BookInfoProps) => {
  return (
    <BookInfoContainer>
      {icon}
      <div>
        <Text size="sm" color="gray-300">
          {info}
        </Text>
        <Heading size="sm" color="gray-200">
          {title}
        </Heading>
      </div>
    </BookInfoContainer>
  )
}
