import styled from 'styled-components';

export const Button2 = styled.button`
  width: ${({ width }) => width};
  height: ${({ size }) => (size === 'small' ? 30 : size === 'medium' ? 50 : 70)}px;
  border-radius: ${({ rounded }) => (rounded ? '50px' : '0')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;
`;
