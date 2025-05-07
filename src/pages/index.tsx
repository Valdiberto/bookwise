import { LatestReviews } from '@/components/LatestReviews'
import { PopularBooks } from '@/components/PopularBooks'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeContainer } from '@/styles/pages/home'

import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestReviews />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Inicio">{page}</DefaultLayout>
}

export default HomePage
