import styled from 'styled-components';

const DARK = '#777777';
const LIGHT = '#dddddd';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 612px) {
    p{
      font-size: 7px;
    }
  }
`

export const Img = styled.img`
  width:50px;
  height:50px;
  cursor: pointer;
`

export const Img2 = styled.img`
  width:40px;
  height:40px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`

export const LoginBtn = styled.div`
  margin-right: 20px;
  color: #000;
`