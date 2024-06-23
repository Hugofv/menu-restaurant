import React from 'react'
import { MenuProvider } from './providers/MenuProvider'
import useBreakpoints from '~/hooks/useBreakpoints'
import MobileView from './pages/MobileView'

const Home: React.FC = () => {
  const { isSm } = useBreakpoints()

  return <MenuProvider>{isSm ? <MobileView /> : null}</MenuProvider>
}

export default Home
