import { CSSProperties } from 'react'
import { StyledTypography } from './styles'
import { ComponentVariant, TypographyProps, VariantMapping } from './type'

const Typography = ({
  variant = 'p',
  color = 'primary',
  children,
  ...props
}: TypographyProps & CSSProperties) => (
  <StyledTypography
    as={VariantMapping[variant] as ComponentVariant}
    variant={variant}
    color={color}
    style={{ ...props }}
  >
    {children}
  </StyledTypography>
)

export default Typography
