import React from 'react'
import { MenuProvider } from './providers/MenuProvider'
import useBreakpoints from '~/hooks/useBreakpoints'
import MobileView from './pages/MobileView'
import DesktopView from './pages/DesktopView'

const Home: React.FC = () => {
  const { isSm } = useBreakpoints()

  return <MenuProvider>{isSm ? <MobileView /> : <DesktopView />}</MenuProvider>
}

export default Home
