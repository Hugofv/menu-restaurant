import React, { useMemo } from 'react'
import { BoxMenu, MenuItem, Wrapper } from './styles'
import { useRouteProvider } from '~/hooks/useRouteProvider'
import { Link } from 'react-router-dom'
import Typography from '~/components/Typography'

const DesktopMenu: React.FC = () => {
  const { findRoute, routes } = useRouteProvider()
  const pathname = window.location.pathname

  const routesToShow = useMemo(
    () => routes?.filter((route) => route.showMenu),
    [routes]
  )

  const current = findRoute(routes, pathname)

  return (
    <Wrapper data-testid='WrapperDesktopMenu'>
      <BoxMenu>
        {routesToShow.map((route) => (
          <MenuItem
            data-testid={`Menu-${route.title}`}
            active={current?.path === route.path}
            key={route.path}
          >
            <Link to={route.path}>
              <Typography variant='h5' color='light'>
                {route.title}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </BoxMenu>
    </Wrapper>
  )
}

export default DesktopMenu
