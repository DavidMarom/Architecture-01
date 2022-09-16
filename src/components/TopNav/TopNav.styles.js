import styled from 'styled-components';

const DARK = '#777777';
const LIGHT = '#dddddd';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
`
