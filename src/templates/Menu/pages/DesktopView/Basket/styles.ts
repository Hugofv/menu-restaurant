import styled from 'styled-components'

export const WrapperBasket = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Container = styled.div`
  box-shadow: 0px 2px 14px 0px #00000024;
  background-color: ${({ theme }) => theme.color.light};

  > section {
    background-color: ${({ theme }) => theme.color.backgroundPage};
  }
`

export const HeaderTitle = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.backgroundPage};
`
