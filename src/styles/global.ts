import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #292929;
        --purple: #bd00ff;
        --white: #fcfcfc;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
  }

    .react-modal-content {
        width: 100%;
        max-width: 1250px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: 0;
        background: transparent;
        font-size: 20px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`