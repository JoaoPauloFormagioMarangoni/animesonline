import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        height: 100vh;
        width: 828px;
        object-fit: cover;
        border-radius: 30px 0 0 30px;
    }

    @media (max-width: 1190px) {
        img {
            position: absolute;
            border-radius: 0 0 0 0;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            z-index: -1;
            filter: brightness(.3);
        }
    }
`