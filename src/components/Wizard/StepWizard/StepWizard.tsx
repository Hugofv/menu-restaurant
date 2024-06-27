import React, { ReactElement } from 'react'
import { StepWizardRoot } from './styles'
import ComponentTransition from '~/components/ComponentTransition'
import { useWizard } from '../useWizard'

interface StepWizardProps {
  activeStep?: number
  active?: boolean
  children: ReactElement
  index?: number
}

const StepWizard: React.FC<StepWizardProps> = (props) => {
  const { active: activeProp, children, index, ...other } = props

  const { activeStep } = useWizard()

  let [active = false] = [activeProp]

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true
  }

  const step = React.cloneElement(children)

  return (
    <ComponentTransition
      timeout={200}
      on={activeStep}
      style={{
        height: '100%'
      }}
      groupStyle={{
        width: '100%',
        height: '100%',
        display: active ? 'block' : 'none'
      }}
    >
      {active ? <StepWizardRoot {...other}>{step}</StepWizardRoot> : null}
    </ComponentTransition>
  )
}

export default StepWizard
