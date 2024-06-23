import { useContext } from 'react'
import { WizardContext } from './WrapperStepWizard/WrapperStepWizard'

export const useWizard = () => useContext(WizardContext)
