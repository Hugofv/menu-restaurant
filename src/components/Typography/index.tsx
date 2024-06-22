import { ReactNode, CSSProperties } from 'react'
import { StyledTypography } from './styles'
import { ComponentVariant, TypographyVariant, VariantMapping } from './type'

type TypographyProps = {
  variant?: TypographyVariant
  children: ReactNode
}

const Typography = ({
  variant = 'p',
  children,
  ...props
}: TypographyProps & CSSProperties) => (
  <StyledTypography
    variant={VariantMapping[variant] as ComponentVariant}
    style={{ ...props }}
  >
    {children}
  </StyledTypography>
)

export default Typography
