import React, { createContext, useMemo, useState } from 'react'
import WrapperStepWizard from '~/components/Wizard/WrapperStepWizard'
import StepWizard from '~/components/Wizard/StepWizard'
import { STEP_MOBILE_VIEW } from './constants'
import InitialPage from './InitialPage'
import { Product } from '~/models/menu'
import ProductDetail from '~/components/ProductDetail'

interface IMobileViewContext {
  step: number
  productSelected: Product | null | undefined
  setProductSelected: React.Dispatch<
    React.SetStateAction<Product | null | undefined>
  >
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export const MobileViewContext = createContext<IMobileViewContext>({
  step: STEP_MOBILE_VIEW.INITIAL,
  productSelected: null,
  setProductSelected: () => null,
  setStep: () => null
})

const MobileView: React.FC = () => {
  const [step, setStep] = useState(STEP_MOBILE_VIEW.INITIAL)
  const [productSelected, setProductSelected] = useState<Product | null>()

  const valueContext = useMemo(
    () => ({
      step,
      productSelected,
      setProductSelected,
      setStep
    }),
    [productSelected, step]
  )
  return (
    <MobileViewContext.Provider value={valueContext}>
      <WrapperStepWizard activeStep={step}>
        <StepWizard>
          <InitialPage />
        </StepWizard>
        <StepWizard>
          <ProductDetail product={productSelected} />
        </StepWizard>
      </WrapperStepWizard>
    </MobileViewContext.Provider>
  )
}

export default MobileView
