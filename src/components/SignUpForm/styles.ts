import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;

    h1 {
        display: flex;
        align-items: center;
        
        img {
            width: 60px;
            height: auto;
            margin-right: 20px;
            object-fit: cover;
        }

        font-size: 4rem;
        color: var(--white);
        font-weight: 500;
        margin: 43px 0 36px 44px;
    }

    form {
        display: flex;
        flex-direction: column;
        color: var(--white);
        margin: 0 58px 0 44px;

        label {
            margin-bottom: 10px;
            font-size: 1.5rem;
        }

        input {
            padding: .5rem 1rem;
            border-radius: 5px;
            background: #302D2D;
            border: 0;
            margin-bottom: 33px;
            font-size: 1.88rem;
            color: var(--white);
        }

        button {
            padding: 1rem;
            border-radius: 5px;
            background: transparent;
            color: var(--white);
            border: 4px solid #BD00FF;
            font-size: 1.88rem;
            transition: background .2s;

            &:hover {
                background-color: #BD00FF;
            }
        }
    }

    @media (max-width: 1190px) {
        form {
            input {
                border: #BD00FF solid 1px;
            }
        }
    }

    @media (max-width: 420px) {
        form {
            margin: 0;
        }
    }

    @media (max-width: 320px) {
        form {
            input {
                padding: 0;
            }
        }
    }
`;