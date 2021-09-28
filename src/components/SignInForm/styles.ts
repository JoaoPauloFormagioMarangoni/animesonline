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
        margin: 0 44px 0 44px;

        label {
            margin-bottom: 10px;
            font-size: 1.5rem;
        }

        input {
            padding: 1rem;
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
            margin-bottom: 21px;
            font-size: 1.88rem;
            transition: background .2s;

            &:hover {
                background-color: #BD00FF;
            }
        }
    }

    span {
        color: var(--white);
        display: block;
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        
        a {
            color: var(--purple);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
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

export const Loading = styled.span`
    height: 42px;
    width: 42px;
    margin: auto;
    margin-bottom: 21px;

    border: 4px solid #fff;
    border-radius: 50%;

    border-right-color: var(--purple);

    animation: loading .7s linear infinite;

    @keyframes loading {
        0%   {transform: rotate(0deg);}
        100%  {transform: rotate(360deg);}
    }
`;