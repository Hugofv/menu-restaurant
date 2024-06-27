/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { CSSProperties } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

interface IComponentTransition {
  children: React.ReactNode
  on: any
  timeout?: number
  offset?: string
  groupStyle?: React.CSSProperties
  style?: React.CSSProperties
}

const ComponentTransition: React.FC<IComponentTransition> = ({
  children,
  on,
  timeout = 150,
  offset = '10px',
  groupStyle,
  style
}) => {
  type TransitionOption = 'entering' | 'entered' | 'exiting'

  const transitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
      transform: `translateX(${offset})`
    } as CSSProperties,
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: 'translateX(0px)'
    } as CSSProperties,
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(-${offset})`
    } as CSSProperties
  }

  return (
    <TransitionGroup style={groupStyle}>
      <Transition
        key={on}
        timeout={{
          enter: timeout,
          exit: timeout
        }}
      >
        {/* @ts-ignore */}
        {(status: TransitionOption) => (
          <div
            style={{
              ...transitionStyles[status],
              ...style
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </TransitionGroup>
  )
}

export default ComponentTransition
