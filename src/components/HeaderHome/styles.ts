import styled from 'styled-components'

import Banner from '../../assets/HomeImg/bannerAnimeList.jpg'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
  position: fixed;
  margin-top: 15px;
  padding: 30px 20px;
  border-radius: 10px;
  background: var(--background);
  z-index: 999;

  left: 50%;

  transform: translateX(-50%);

  & > div {
    display: flex;
    align-items: center;

    nav a {
      font-size: 1.5rem;
      text-decoration: none;
      margin-right: 40px;
      color: var(--white);
      transition: color 0.2s;

      &:hover {
        color: var(--purple);
      }

      &.selected {
        color: var(--purple);
      }
    }

    div.containerSearch {
      display: flex;
      align-items: center;
      position: relative;
    }

    .iconSearch {
      position: absolute;
      left: 10px;
      font-size: 1.5rem;
    }

    div input {
      width: 243px;
      border-radius: 5px;
      border: 0;
      padding: 10px 10px 10px 40px;
      font-size: 1.2rem;
    }

    .avatar {
      width: 48px;
      margin-right: 16px;
      background-color: #fff;
      border: 1px solid var(--purple);
      border-radius: 50%;
    }

    button {
      background: transparent;
      border: 1px solid var(--purple);
      padding: 10px 30px;
      font-size: 1.2rem;
      color: var(--white);
      border-radius: 5px;
      transition: all 0.2s;

      &.firstButton {
        background-color: var(--purple);
        margin: 0 26px;

        &:hover {
          filter: brightness(0.9);
        }
      }

      &:hover {
        background-color: var(--purple);
      }
    }
  }

  .menuClosed,
  .menuOpened {
    display: none;
  }

  @media (max-width: 1450px) {
    width: auto;

    > div {
      display: none;
      position: absolute;
      flex-direction: column;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      background: var(--background);
      padding: 20px;

      nav {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
          margin: 0 0 10px 0;
        }
      }

      .containerSearch {
        margin-bottom: 10px;
      }

      button.firstButton {
        margin-bottom: 10px;
      }

      &.open {
        display: flex;
      }

      .avatar {
        margin-right: 0;
      }
    }

    .menuClosed,
    .menuOpened {
      display: block;
      color: #fff;
      font-size: 3rem;
      margin-left: 20px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
  }
`

export const AnimeList = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  height: 80%;
  overflow: auto;

  background: url(${Banner}) no-repeat top left;
  background-size: cover;
  z-index: 999;

  border-radius: 10px;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px 0;

    li {
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      padding: 15px;
      border-radius: 5px;

      img {
        border-radius: 10px;
      }

      h2 {
        padding-top: 10px;
        font-size: 1.2rem;
        color: var(--white);
      }
    }
  }

  @media (max-width: 1450px) {
    top: 38%;
  }

  @media (max-width: 1300px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 970px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 650px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`
