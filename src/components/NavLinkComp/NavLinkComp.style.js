import styled from 'styled-components';

// background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};

const DARK = '#777777';
const LIGHT = '#dddddd';

export const Container = styled.div`
  height: 30px;
  width: 80px;
  border-radius: 50px;
  background-color: ${({ active }) => (active ? `${DARK}` : `${LIGHT}`)};
  padding: 5px;
  cursor: pointer;
`;
