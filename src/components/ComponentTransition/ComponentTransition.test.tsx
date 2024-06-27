import React from 'react'
import { screen } from '@testing-library/react'
import ComponentTransition from './ComponentTransition'
import { render } from '~/testUtils'

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children('entered'))
  const FakeTransitionGroup = jest.fn(({ children }) => <div>{children}</div>)
  return { Transition: FakeTransition, TransitionGroup: FakeTransitionGroup }
})

describe('ComponentTransition Component', () => {
  test('renders children correctly', () => {
    render(
      <ComponentTransition on='test'>
        <div>Test Content</div>
      </ComponentTransition>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('applies correct styles during transitions', () => {
    render(
      <ComponentTransition on='test' timeout={300} offset='20px'>
        <div>Test Content</div>
      </ComponentTransition>
    )

    const childElement = screen.getByText('Test Content').parentElement
    expect(childElement).toHaveStyle(
      'transition: opacity 300ms ease-in-out, transform 300ms ease-in-out'
    )
    expect(childElement).toHaveStyle('opacity: 1')
    expect(childElement).toHaveStyle('transform: translateX(0px)')
  })

  test('applies groupStyle and style props correctly', () => {
    const groupStyle: React.CSSProperties = { display: 'flex' }
    const style: React.CSSProperties = { color: 'red' }

    render(
      <ComponentTransition on='test' groupStyle={groupStyle} style={style}>
        <div>Test Content</div>
      </ComponentTransition>
    )

    const groupElement =
      screen.getByText('Test Content').parentElement?.parentElement
    expect(groupElement).toHaveStyle('display: block')

    const childElement = screen.getByText('Test Content').parentElement
    expect(childElement).toHaveStyle('color: red')
  })
})
