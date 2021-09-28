import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #151515;
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        margin-bottom: 50px;
    }

    div {
        margin-bottom: 20px;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 250px;

        a {
            color: #fff;
        }

        .instagram:hover {
            border-radius: 10px;
            padding: 2px;
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }

        .facebook:hover {
            color: #385898;
        }

        .twitch:hover {
            color: #9147ff;
        }

        .youtube:hover {
            color: #ff0000;
        }
    }

    span {
        font-size: 1rem;
        color: #fff;
    }
`;