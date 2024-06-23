import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`

export const WrapperIcon = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxMenu = styled.ul`
  background-color: ${({ theme }) => theme.color.light};
  padding: 1rem;
  border-radius: 5px;

  li {
    list-style-type: none;
    padding: 5px 0;

    a {
      text-decoration: none;
    }
  }
`
