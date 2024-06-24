import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperDescription = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const WrapperImage = styled.div`
  img {
    width: 8rem;
    height: 5rem;
  }
`
