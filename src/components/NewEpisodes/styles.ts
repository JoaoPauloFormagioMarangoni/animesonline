import styled from 'styled-components';

export const Container = styled.article`
    max-width: 1000px;
    margin: auto;
    padding: 15px 0;
    color: var(--white);

    h2 {
        font-size: 2rem;
        padding-bottom: 15px;
    }

    & > div {
        display: flex;
        flex-wrap: wrap;

        & > a {
            position: relative;
            width: 480px;
            margin: 0 20px 20px 0;

            img {
                border-radius: 20px;
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
        }
    }

    > button {
        display: block;
        margin: auto;

        border: 2px solid var(--purple);
        border-radius: 5px;

        padding: 10px 20px;

        background-color: transparent;
        color: var(--white);

        font-size: 1.5rem;

        transition: background .2s;

        &:hover {
            background: var(--purple);
        }
    }

    @media (max-width: 1030px) {
        width: 100%;
        padding: 10px;
        
        > div {
            justify-content: center;
            align-items: center;
        }
    }
`;

export const SubtitleImg = styled.div`
    position: absolute;
    z-index: 2;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--white);

    top: 0;

    div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 20px 20px 0 0;
        width: 100%;

        padding: 15px;

        background-color: rgba(0, 0, 0, .5);

        button {
            border-radius: 5px;
            border: none;
            padding: 5px 15px;
            background: var(--purple);
            color: var(--white);
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;

        border-radius: 0 0 20px 20px;
        width: 100%;

        padding: 10px;

        background-color: rgba(0, 0, 0, .5);
        visibility: hidden;

        h3 {
            font-weight: normal;
            font-size: 1.2rem;
            letter-spacing: 0.05rem;
        }

        span {
            font-weight: normal;
            font-size: 0.9rem;
            letter-spacing: 0.05rem;
        }
    }

    transition: visibility .2s;

    &:hover div:last-child {
        visibility: visible;
    }
`;