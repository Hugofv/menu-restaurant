import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 5px;
  padding: 5px;
  align-items: center;
`

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: 16px;
`
