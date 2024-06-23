import styled from 'styled-components'

interface IContainerProps {
  image: string
}

export const Container = styled.div<IContainerProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center center;
  width: 100vw;
  height: 9rem;
`
