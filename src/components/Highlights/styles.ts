import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        color: var(--white);
        margin-bottom: 15px;
        margin-left: 5px;
    }

    .gridAnimes {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        width: 100%;
        height: 60%;

        div {
            position: relative;
            transition: all .2s;
            border-radius: 15px;
            cursor: pointer;
            
            img {
                width: 100%;
                position: absolute;
                height: 100%;
                object-fit: cover;
                border-radius: 15px;
            }
            span {
                position:absolute;
                bottom: 0;
                border-radius: 0 0 15px 15px;
                padding: 10px 0;
                text-align: center;
                width: 100%;
                color: var(--white);
                font-size: 1.5rem;
                background: linear-gradient(180deg,rgba(255,0,0,0) 0%, rgba(0,0,0,0.72) 20%, #000000 90%);
            }

            &:hover {
                transform: scale(0.9);
            }
        }
    }

    @media (max-width: 750px) {
        .gridAnimes {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 550px) {
        .gridAnimes {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;