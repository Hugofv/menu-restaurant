import styled from 'styled-components'
import Paper from '~/components/Paper'

export const WrapperImage = styled.div`
  img {
    width: 100%;
    height: 20rem;
  }
`

export const WrapperInfo = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  gap: 1rem;
`

export const WrapperHeadOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

export const WrapperOption = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 1rem;
`
