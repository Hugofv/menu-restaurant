import { useContext } from 'react'
import { RouteContext } from '../../providers/RouteProvider'

export const useRouteProvider = () => useContext(RouteContext)
