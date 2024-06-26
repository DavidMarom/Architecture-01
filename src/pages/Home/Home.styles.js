import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  padding-bottom: 50px;
  min-height: 80vh;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};

  p {
    margin: 2px;
    color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
  }

  a {
    color: ${({ darkMode }) => (darkMode ? '#FFA900' : '#006EFF')};
  }

  h1, h2, h3 {
    color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
  }

  li {
    color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  margin: 5px;
`
