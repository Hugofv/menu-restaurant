import React from 'react'
import { useAppProvider } from '~/hooks/useAppProvider'
import { Container } from './styles'
import NavBar from './NavBar'

const Header: React.FC = () => {
  const { company } = useAppProvider()

  return (
    <>
      <NavBar />
      <Container
        data-testid='HeaderContainer'
        image={company?.webSettings?.bannerImage || ''}
      />
    </>
  )
}

export default Header
