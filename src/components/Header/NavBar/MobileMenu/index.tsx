import React, { useState } from 'react'
import { useRouteProvider } from '~/hooks/useRouteProvider'
import { BoxMenu, Wrapper, WrapperIcon } from './styles'
import Typography from '~/components/Typography'
import { FaBars } from 'react-icons/fa6'
import { useTheme } from 'styled-components'
import { Popover } from 'react-tiny-popover'
import { Link } from 'react-router-dom'

const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { current, routes } = useRouteProvider()
  const theme = useTheme()

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Wrapper>
      <Typography variant='h3' color='light'>
        {current?.title}
      </Typography>

      <Popover
        isOpen={openMenu}
        onClickOutside={handleToggleMenu}
        positions={['left', 'bottom', 'top', 'right']}
        content={
          <BoxMenu>
            {routes.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>
                  <Typography>{route.title}</Typography>
                </Link>
              </li>
            ))}
          </BoxMenu>
        }
      >
        <WrapperIcon onClick={handleToggleMenu}>
          <FaBars size='1.5rem' color={theme.textColor.light} />
        </WrapperIcon>
      </Popover>
    </Wrapper>
  )
}

export default MobileMenu
