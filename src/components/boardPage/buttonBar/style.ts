import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface ButtonProps {
  isClicked: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    position: relative;
    top: 180px;
    left: 120px;
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
  `,
  Button: styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;

    background-color: ${({ isClicked }) => (isClicked ? '#EADE71' : '#D9D9D9')};

    border-radius: 20px;

    width: 85px;
    height: 40px;

    cursor: pointer;
  `,
};

export default styles;
