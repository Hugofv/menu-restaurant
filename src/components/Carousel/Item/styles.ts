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

export const Avatar = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: #000;
`
