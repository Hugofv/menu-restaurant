import React, { createContext } from 'react'

interface WrapperStepTrackerProps {
  activeStep: number
  children: React.ReactNode
}

export interface IWizard {
  activeStep: number
}

export const WizardContext = createContext<IWizard>({
  activeStep: 0
})

const WrapperStepWizard: React.FC<WrapperStepTrackerProps> = (
  props: WrapperStepTrackerProps
) => {
  const { activeStep = 0, children, ...other } = props

  const childrenArray = React.Children.toArray(children).filter(Boolean)
  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      index,
      ...step.props
    })
  })

  const contextValue = React.useMemo(
    () => ({
      activeStep
    }),
    [activeStep]
  )

  return (
    <WizardContext.Provider value={contextValue}>
      <div {...other}>{steps}</div>
    </WizardContext.Provider>
  )
}

export default WrapperStepWizard
