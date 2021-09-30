import styled from 'styled-components';

export const Container = styled.div`
    padding: 200px 0 100px;
    background: #444;
    display: flex;
    justify-content: center;

    > div {
        height: 100%;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        align-items: center;

        > div {
            cursor: pointer;
            position: relative;
            height: 400px;
            border-radius: 20px;
            
            img {
                filter: brightness(.7);
                border-radius: 20px;
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: all .2s;
            }

            > div {
                z-index: 1;
                position: absolute;
                bottom: 0;
                padding: 20px;
                color: #ffffff;
                font-size: 1.2rem;
                transition: all .3s;

                span:first-child {
                    background: red;
                    font-size: 1rem;
                    font-weight: bold;
                    padding: 5px 10px;
                    border-radius: 5px;
                }

                h2 {
                    margin: 10px 0;
                }
            }

            &:hover {
                img {
                    filter: brightness(.6);
                }

                > div {
                    bottom: 10px;
                }
            }
        }
    }
`;