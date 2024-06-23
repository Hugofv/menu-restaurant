import React, { createContext, useMemo, useState } from 'react'
import WrapperStepWizard from '~/components/Wizard/WrapperStepWizard'
import StepWizard from '~/components/Wizard/StepWizard'
import { STEP_MOBILE_VIEW } from './constants'
import InitialPage from './InitialPage'

export const MobileViewContext = createContext({})

const MobileView: React.FC = () => {
  const [step, setStep] = useState(STEP_MOBILE_VIEW.INITIAL)

  const valueContext = useMemo(
    () => ({
      step,
      setStep
    }),
    [step]
  )
  return (
    <MobileViewContext.Provider value={valueContext}>
      <WrapperStepWizard activeStep={0}>
        <StepWizard>
          <InitialPage />
        </StepWizard>
      </WrapperStepWizard>
    </MobileViewContext.Provider>
  )
}

export default MobileView
