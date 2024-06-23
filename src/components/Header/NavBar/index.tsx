import React from 'react'
import { Container } from './styles'
import useBreakpoints from '~/hooks/useBreakpoints'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const NavBar: React.FC = () => {
  const { isSm } = useBreakpoints()

  return <Container>{isSm ? <MobileMenu /> : <DesktopMenu />}</Container>
}

export default NavBar
