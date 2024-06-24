import styled from 'styled-components'

interface IWrapperAvatarProps {
  active?: boolean
}

export const WrapperAvatar = styled.div<IWrapperAvatarProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.9rem;

  ${({ active, theme }) =>
    active
      ? `
   border-bottom: 2px solid ${theme.color.primaryHover}
  `
      : ''}
`
interface IAvatarProps {
  active?: boolean
  image: string
}

export const Avatar = styled.div<IAvatarProps>`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  ${({ active, theme }) =>
    active
      ? `
        border: 2px solid ${theme.color.primaryHover};
        box-shadow: 0 0 0 3px #ffffff inset;
        box-sizing: border-box;
  `
      : ''};
`

export const AnchorSection = styled.a`
  text-decoration: none;
`
