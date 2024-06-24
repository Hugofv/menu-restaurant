import { useContext } from 'react'
import { MenuContext } from '../../providers/MenuProvider'

export const useMenuProvider = () => useContext(MenuContext)
