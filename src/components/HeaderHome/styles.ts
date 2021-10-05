import styled from 'styled-components'

import Banner from '../../assets/HomeImg/bannerAnimeList.jpg';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 81%;
    min-width: 1000px;
    position: fixed;
    margin-top: 15px;
    padding: 30px 20px;
    border-radius: 10px;
    background: var(--background);
    z-index: 999;

    left: 50%;

    transform: translateX(-50%);

    & > button {
        display: none;
    }

    & > div {
        display: flex;
        align-items: center;
        margin: 0 10px;
        
        nav a {
            font-size: 1.2rem;
            text-decoration: none;
            margin-right: 40px;
            color: var(--white);
            transition: color .2s;

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
            width: 100%;
            max-width: 243px;
            min-width: 110px;
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

        .logoutButton {
            display: flex;
            align-items: center;
            justify-content: center;
            
            button {
                background: transparent;
                border: 1px solid var(--purple);
                padding: 10px 30px;
                font-size: 1.2rem;
                color: var(--white);
                border-radius: 5px;
                transition: all .2s;
    
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
    }

    @media(max-width: 1550px) {
        .avatar {
            display: none;
        }

        div.logoutButton {
            button {
                padding: 10px;

                &.firstButton {
                    margin: 0 10px;
                }
            }
        }
    }

    @media(max-width: 1050px) {
        width: 100vw;
        margin: 0;
        border-radius: 0;
        min-width: 0;

        justify-content: center;

        & > button {
            display: block;
            position:fixed;
            left: 10px;
            top: 10px;
            background: transparent;
            border: 0;
            z-index: 999;
        }

        .menuOpen {
            color: #fff;
            font-size: 2rem;
        }

        .menuIsOpen {
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            position: fixed;
            left: 0;
            background: #151515;
            margin: 0;
            top: 0;
            padding: 50px 10px 10px;
            border-radius: 0 0 10px 0;

            nav {    
                display: flex;
                flex-direction: column;
                width: 100%;
                a {
                    margin: 0;
                    text-align: center;
                    margin-bottom: 10px;
                    border: 1px solid rgba(255, 255, 255, .2);
                    border-radius: 5px;
                    padding: 5px;

                    &.selected {
                        border: 1px solid var(--purple);
                    }
                }
            } 

            div input {
                margin: 20px 0;
            }
        }

        div.logoutButton {
            justify-content: space-between;
            align-items: center;
            width: 100%;

            button {
                padding: 10px;

                &.firstButton {
                    margin: 0;
                }
            }

            .avatar {
                display: block;
                margin: 0;
            }
        }

        & > div {
            display: none;
            position: absolute;
        }
    }
`;

export const AnimeList = styled.div`
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 1400px;
    height: 80%;
    overflow: auto;

    background: url(${Banner}) no-repeat top;
    background-size: cover;
    z-index: 99;

    border-radius: 10px;

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 20px 0;

        li {
            text-align: center;
            background: rgba(0, 0, 0, .5);
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

    @media(max-width: 1370px) {
        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media(max-width: 1030px) {
        ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 680px) {
        ul {
            grid-template-columns: repeat(1, 1fr);

            li {
                img {
                    width: 100%;
                    max-width: 300px;
                }
            }
        }
    }
`;