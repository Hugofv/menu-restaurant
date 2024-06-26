import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.light};
  gap: 0.5rem;
  padding: 1rem;
`

interface IWrapperCarousel {
  isSticky: boolean
}
export const WrapperCarousel = styled.div<IWrapperCarousel>`
  ${({ theme, isSticky }) =>
    isSticky
      ? `
    position: sticky;
    margin: 0;
    top: 0;
    padding-top: 2em;
    z-index: 999;
    background-color: ${theme.color.light}
  `
      : 'margin-top: 2rem;'};
`

export const WrapperSection = styled.div`
  overflow: auto;
  margin-top: 2rem;
`

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`

export const WrapperInfo = styled.div`
  padding: 1.3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background-color: ${({ theme }) => theme.color.light};
    width: 100%;
    padding: 5px;
  }
`

export const WrapperBasketButton = styled.div`
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
