import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`

export const WrapperSection = styled.div`
  overflow: auto;
  margin-top: 2rem;
  max-height: calc(100vh - 30rem);
`

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`
