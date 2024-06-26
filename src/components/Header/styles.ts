import styled from 'styled-components'

interface IContainerProps {
  image: string
}

export const Container = styled.header<IContainerProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-color: ${({theme}) => theme.color.primary };
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 9rem;
`
