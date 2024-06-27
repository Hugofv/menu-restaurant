import { useWizard } from '../useWizard'
import StepWizard from './StepWizard'
import { render } from '~/testUtils'

jest.mock('../useWizard', () => ({
  useWizard: jest.fn(() => ({ activeStep: 0 }))
}))

describe('StepWizard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders active when active step', () => {
    const { getByText } = render(
      <StepWizard activeStep={0} index={0}>
        <div>Step 1 Content</div>
      </StepWizard>
    )

    expect(getByText('Step 1 Content')).toBeInTheDocument()
  })

  test('renders active when active step matches useWizard', () => {
    ;(useWizard as jest.Mock).mockReturnValueOnce({ activeStep: 1 })

    const { getByText } = render(
      <StepWizard index={1}>
        <div>Step 2 Content</div>
      </StepWizard>
    )

    expect(getByText('Step 2 Content')).toBeInTheDocument()
  })

  test('renders with custom props', () => {
    const { getByTestId } = render(
      <StepWizard activeStep={0} index={0} data-testid='test-step'>
        <div>Step 1 Content</div>
      </StepWizard>
    )

    expect(getByTestId('test-step')).toBeInTheDocument()
  })
})
