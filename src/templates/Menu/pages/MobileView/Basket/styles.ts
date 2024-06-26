import styled from 'styled-components'

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`

export const WrapperIconClose = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  right: 10px;
  top: 10px;
`

export const WrapperItems = styled.div`
  padding: 1rem 1rem 0 1rem;

  :last-child {
    border-bottom: none !important;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`

export const WrapperTotal = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

interface IBoxText {
  border?: boolean
}

export const BoxText = styled.div<IBoxText>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: ${({ border, theme }) =>
    border ? `1px solid ${theme.color.secondary}` : 'none'};
`

export const WrapperCheckoutButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  position: sticky;
  bottom: 1em;

  button {
    width: 80%;
  }
`
