/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
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
  const transitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
      transform: `translateX(${offset})`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: 'translateX(0px)'
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(-${offset})`
    }
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
        {(status) => (
          <div
            style={{
              // @ts-ignore
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
