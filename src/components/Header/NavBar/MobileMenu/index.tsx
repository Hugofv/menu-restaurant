import React from 'react'
import useRouterConfig from '~/hooks/useRouterConfig'

const MobileMenu: React.FC = () => {
  const { current } = useRouterConfig()
  console.log(current)
  return <div>Mobile</div>
}

export default MobileMenu
