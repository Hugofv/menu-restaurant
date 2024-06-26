import styled from "styled-components"

export const WrapperItems = styled.div`
  padding: 1rem 1rem 0 1rem;

  :last-child {
    border-bottom: none !important;
  }
`

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`

export const WrapperTotal = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

interface IBoxText {
  border?: boolean
}

export const BoxText = styled.div<IBoxText>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: ${({ border, theme }) =>
    border ? `1px solid ${theme.color.secondary}` : 'none'};
`
