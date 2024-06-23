import styled from 'styled-components'

const Paper = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  -webkit-box-shadow: 10px 9px 14px -4px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 10px 9px 14px -4px rgba(0, 0, 0, 0.39);
  box-shadow: 10px 9px 14px -4px rgba(0, 0, 0, 0.39);
`

export default Paper
