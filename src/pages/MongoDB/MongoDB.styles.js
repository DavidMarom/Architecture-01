import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 80vh;
  padding: 20px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};

  p {
    margin: 2px;
    color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
  }

  h2 {
    color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
  }

`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`