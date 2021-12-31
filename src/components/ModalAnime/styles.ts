import styled from 'styled-components'

export const ButtonClose = styled.button`
  .closeModal {
    color: var(--white);
  }
`

export const Container = styled.div`
  position: relative;

  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
      display: flex;
      margin-bottom: 3rem;

      img {
        width: 250px;
        height: 350px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 20px;
      }

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--white);
        width: 100%;

        div {
          h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          h6 {
            font-size: 1.2rem;
            margin-bottom: 15px;
          }
        }

        button {
          display: flex;
          align-items: center;
          justify-content: space-evenly;

          padding: 10px 0;
          width: 50%;
          border-radius: 10px;
          border: 3px solid var(--purple);
          font-size: 2rem;
          font-weight: 600;
          background: transparent;
          color: var(--white);
          transition: all 0.2s;

          &.isNotSigned {
            cursor: not-allowed;
          }

          .heart {
            font-size: 26px;
          }

          .favorites {
            color: red;
          }

          &:hover {
            background: #bd00ff75;
          }

          &:active {
            .heart {
              color: red;
            }
          }
        }
      }
    }
    p {
      color: var(--white);
      text-align: justify;
      line-height: 130%;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    height: 610px;
    overflow-y: scroll;
    color: var(--white);

    li {
      width: 100%;
      padding: 15px;
      border-radius: 5px;
      background: var(--purple);
      margin-bottom: 10px;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  > button {
    position: absolute;
    width: 90px;
    height: 75px;
    border-radius: 20px;
    border: none;
    font-size: 1.2rem;
    color: var(--white);
    background-color: var(--purple);

    box-shadow: 0 4px #000;

    &.previous {
      top: 50%;
      transform: translateY(-50%);
      left: -150px;

      display: flex;
      align-items: center;
      justify-content: center;

      .arrowLeft {
        font-size: 35px;
        transform: rotate(180deg);
      }
    }

    &.next {
      top: 50%;
      transform: translateY(-50%);
      right: -150px;

      display: flex;
      align-items: center;
      justify-content: center;

      .arrowRight {
        font-size: 35px;
      }
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      box-shadow: none;
      transform: translateY(-45%);
    }
  }

  @media (max-width: 1460px) {
    > button {
      &.previous {
        top: auto;
        bottom: -150px;

        left: 0px;
      }

      &.next {
        top: auto;
        bottom: -150px;

        right: 0px;
      }
    }
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    > div {
      > div {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }
`
