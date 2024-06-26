import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
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

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  gap: 5px;
`

export const Badge = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.textColor.light};
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
