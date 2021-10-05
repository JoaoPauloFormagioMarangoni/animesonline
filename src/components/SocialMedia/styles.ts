import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: #000;
        font-size: 2.3rem;
        background: #fff;
        
        margin-bottom: 5px;
        padding: 5px;

        transition: all .3s;

        &:first-child {
            border-radius: 0 8px 0 0;
        }

        &:last-child {
            border-radius: 0 0 8px 0;
        }

        &.instagram:hover {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            color: #fff;
            padding: 5px 10px;
        }

        &.facebook:hover {
            background: #385898;
            color: #fff;
            padding: 5px 10px;
        }

        &.twitch:hover {
            background: #9147ff;
            color: #fff;
            padding: 5px 10px;
        }

        &.youtube:hover {
            background: #ff0000;
            color: #fff;
            padding: 5px 10px;
        }
    }
`;
