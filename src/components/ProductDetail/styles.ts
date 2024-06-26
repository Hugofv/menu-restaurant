import styled from 'styled-components'
import Paper from '~/components/Paper'

export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const WrapperImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
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

export const WrapperBody = styled.div`
  flex: 1 auto;
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

export const WrapperIconClose = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  right: 10px;
  top: 10px;
  background-color: ${({ theme }) => theme.color.light};
`

export const WrapperAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
`
