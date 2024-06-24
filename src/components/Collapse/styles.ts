import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const WrapperIcon = styled.div`
  position: absolute;
  right: 10px;
`

export const WrapperContent = styled.div`
  overflow: hidden;
  transition: 0.4s max-height;
`
