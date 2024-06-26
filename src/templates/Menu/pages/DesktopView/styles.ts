import styled from 'styled-components'

export const WrapperContainer = styled.main`
  display: flex;
  justify-content: center;
`

export const Container = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: calc(100vw - 5rem);
  max-width: 60rem;
  padding: 2rem;
`

export const BoxSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.backgroundPage};
`

export const CardProducts = styled.div`
  padding: 1rem;
  width: 60%;
  box-shadow: 0px 2px 14px 0px #00000024;
  background-color: ${({ theme }) => theme.color.light};
`
