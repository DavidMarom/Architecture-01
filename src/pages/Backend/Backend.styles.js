import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
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

export const Input = styled.input`
  border:0;
  margin: 5px;
  max-width: 300px;
  `

export const Button = styled.button`
  border:0;
  margin: 5px;
  background-color: #00aaff;
  width: 130px;
  color: white;
`

export const P = styled.p`
  margin: 2px;
  color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
`

export const H2 = styled.h2`
  color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
`