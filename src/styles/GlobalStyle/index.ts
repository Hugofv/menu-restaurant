import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   html,
  body{
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.color.backgroundBase};
  }

  html, * {
    font-family: ${({ theme }) => theme.font};

    ::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background: #f4f4f4;
    }

    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 15px;
    }
  }
`
