import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 2px;
  }

  &:checked::after {
    background-color: ${({ theme }) => theme.color.primary};
  }
  &:hover::after {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
  &:focus {
    background-color: 2px solid ${({ theme }) => theme.color.navBackground};
  }
`
