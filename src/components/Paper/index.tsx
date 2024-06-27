import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

export interface IPaper {
  children: ReactNode
}

const Paper: React.FC<IPaper> = ({ children, ...props }) => {
  return (
    <Wrapper data-testid='WrapperPaper' {...props}>
      {children}
    </Wrapper>
  )
}

export default Paper
