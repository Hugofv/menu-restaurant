import React from 'react'
import { useRouteProvider } from '~/hooks/useRouteProvider'
import { Wrapper } from './styles'
import Typography from '~/components/Typography'

const MobileMenu: React.FC = () => {
  const { current } = useRouteProvider()

  return (
    <Wrapper>
      <Typography variant='h3' color='light'>
        {current?.title}
      </Typography>
    </Wrapper>
  )
}

export default MobileMenu
