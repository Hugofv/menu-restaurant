import styled from 'styled-components'

interface MenuItemProps {
  active?: boolean
}

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`

export const BoxMenu = styled.ul`
  display: flex;
  margin: 0;
`

export const MenuItem = styled.li<MenuItemProps>`
  list-style-type: none;
  padding: 5px 0;
  width: 12rem;
  text-transform: uppercase;
  text-align: center;
  ${({ active, theme }) =>
    active
      ? `
      border-bottom: 5px solid ${theme.color.light}
   `
      : ''};
  a {
    text-decoration: none;
  }
`
