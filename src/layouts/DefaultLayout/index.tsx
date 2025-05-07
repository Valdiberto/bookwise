import Head from 'next/head'
import { ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'

import { Container, Content } from './styles'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
      </Head>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  )
}
