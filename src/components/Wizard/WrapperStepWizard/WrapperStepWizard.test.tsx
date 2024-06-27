import { render } from '~/testUtils'
import WrapperStepWizard, { WizardContext } from './WrapperStepWizard'

describe('WrapperStepWizard Component', () => {
  test('provides correct context value', () => {
    const activeStep = 1

    const { getByText } = render(
      <WrapperStepWizard activeStep={activeStep}>
        <WizardContext.Consumer>
          {(context) => <div>{context.activeStep}</div>}
        </WizardContext.Consumer>
      </WrapperStepWizard>
    )

    expect(getByText('1')).toBeInTheDocument()
  })

  test('clones children with index prop', () => {
    const { container } = render(
      <WrapperStepWizard activeStep={0}>
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
      </WrapperStepWizard>
    )

    const steps = container.querySelectorAll('div')
    expect(steps.length).toBe(4)
    expect(steps[0]).toHaveTextContent('Step 1')
    expect(steps[1]).toHaveTextContent('Step 1')
    expect(steps[2]).toHaveTextContent('Step 2')
  })

  test('renders children with additional props', () => {
    const { container } = render(
      <WrapperStepWizard activeStep={0}>
        <div data-testid='step'>Step 1</div>
      </WrapperStepWizard>
    )

    const step = container.querySelector('[data-testid="step"]')
    expect(step).toBeInTheDocument()
  })
})
