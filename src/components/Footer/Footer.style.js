import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: 200px;
    background-color: #333333;
    padding: 20px;

    p {
        color: #888888;
        font-size: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`;