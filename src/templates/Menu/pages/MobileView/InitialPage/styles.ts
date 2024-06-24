import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.light};
  gap: 0.5rem;
  padding: 1rem;
`

export const WrapperCarousel = styled.div`
  margin-top: 2rem;
`

export const WrapperSection = styled.div`
  overflow: auto;
  margin-top: 2rem;
  max-height: calc(100vh - 36rem);
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
