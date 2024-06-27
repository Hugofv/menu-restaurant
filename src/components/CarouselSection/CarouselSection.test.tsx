import { screen, fireEvent } from '@testing-library/react'
import menu from '~/mocks/menu.json'
import { render } from '~/testUtils'
import CarouselSection from '.'

const mockSections = menu.sections

describe('CarouselSection Component', () => {
  test('renders CarouselSection with sections', () => {
    render(<CarouselSection sections={mockSections} />)

    const containerElement = screen.getByTestId('CarouseSectionContainer')
    expect(containerElement).toBeInTheDocument()

    mockSections.forEach((section) => {
      expect(screen.getByText(section.name)).toBeInTheDocument()
    })
  })

  test('highlights the selected section', () => {
    const selectedSection = mockSections[1]
    render(
      <CarouselSection sections={mockSections} selected={selectedSection} />
    )

    const selectedElement = screen.getByTestId(`item-${selectedSection.id}`)
    expect(selectedElement).toHaveStyle('border-bottom: 2px solid #4f372f')
  })

  test('calls onChangeSection when a different section is clicked', () => {
    const handleChangeSection = jest.fn()
    render(
      <CarouselSection
        sections={mockSections}
        onChangeSection={handleChangeSection}
      />
    )

    const sectionToClick = mockSections[2]
    const sectionElement = screen.getByText(sectionToClick.name)
    fireEvent.click(sectionElement)

    expect(handleChangeSection).toHaveBeenCalledWith(sectionToClick)
  })

  test('does not call onChangeSection when the same section is clicked', () => {
    const handleChangeSection = jest.fn()
    const selectedSection = mockSections[0]
    render(
      <CarouselSection
        sections={mockSections}
        selected={selectedSection}
        onChangeSection={handleChangeSection}
      />
    )

    const sectionElement = screen.getByText(selectedSection.name)
    fireEvent.click(sectionElement)

    expect(handleChangeSection).not.toHaveBeenCalled()
  })
})
