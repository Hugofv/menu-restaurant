import { useContext } from 'react'
import { AppContext } from '../../providers/AppProvider'

export const useAppProvider = () => useContext(AppContext)
