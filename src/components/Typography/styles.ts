import { createElement } from 'react'

import styled from 'styled-components'
import { IStyledTypography } from './type'

const styleMapping = {
  h1: `
    font-size: 24px;
    font-weight: 500;
  `,
  h2: `
    font-size: 19px;
    font-weight: 600;
  `,
  h3: `
    font-size: 18px;
    font-weight: 500;
  `,
  h4: `
    font-size: 17px;
    font-weight: 500;
  `,
  h5: `
    font-size: 16px;
    font-weight: 400;
  `,
  h6: `
    font-size: 15px;
    font-weight: 300;
  `,
  p: `
    font-size: .9rem
  `,
  span: `
    font-size: .7rem
  `,
  body1: `
    font-size: 16px;
    font-weight: 600;
  `,
  body2: `
    font-size: 16px;
    font-weight: 300;
  `,
  link: `
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
  `
}

export const StyledTypography = styled(
  ({ as, children, ...props }: IStyledTypography) =>
    createElement(as, props, children)
)`
  ${({ variant }) => styleMapping[variant]};
  color: ${({ theme, color }) => theme.textColor[color || 'primary']};
  margin: 0;
`
