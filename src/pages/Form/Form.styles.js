import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
`

export const Error = styled.p`
  font-size: 0.5rem;
  color: red;
`