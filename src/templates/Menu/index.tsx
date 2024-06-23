import React from 'react'
import Header from '~/components/Header'
import { MenuProvider } from './providers/MenuProvider'

const Home: React.FC = () => {
  return (
    <MenuProvider>
      <Header />
    </MenuProvider>
  )
}

export default Home
