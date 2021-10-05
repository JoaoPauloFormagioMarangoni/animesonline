import styled from 'styled-components';

import banner from '../assets/HomeImg/BannerInitial.jpg'

export const Container = styled.div`
    .particles {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
    }
`;

export const ContainerDonation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: url(${banner}) no-repeat fixed top;
    background-size: cover;
    width: 100%;
    height: 100vh;

    > div {
        width: 70%;
        height: 60%;

        > div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            gap: 20px;

            padding: 20px;
            height: 100%;

            > div {
                padding: 5px;
                
                h1 {
                    color: #bd00ff;
                    margin-bottom: 20px;
                    font-size: 3rem;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 5px;
                    padding: 10px;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        margin: 0 15px;
                    }
                }

                p {
                    text-align: justify;
                    line-height: 2;
                    background: rgba(0, 0, 0, .5);
                    color: #fff;
                    border-radius: 5px;
                    padding: 10px;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        > div {
            width: 100%;
            
            > div {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`;