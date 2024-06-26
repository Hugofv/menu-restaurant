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
