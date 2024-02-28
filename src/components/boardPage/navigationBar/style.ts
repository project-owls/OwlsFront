import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  isClicked: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
  `,
  Link: styled(Link)<ButtonProps>`
    text-decoration: none;
    color: ${({ isClicked }) => (isClicked ? '#6F885D' : 'black')};
    font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'normal')};
  `,
  Button: styled.div<ButtonProps>`
    position: relative;
    top: 150px;
    left: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;

    background-color: ${({ isClicked }) => (isClicked ? '#A0C586' : '#f5f5f5')};

    border-radius: 20px;

    width: 75px;
    height: 65px;

    cursor: pointer;
  `,
  IconImage: styled.img`
    width: 30px;
    height: 30px;
  `,
  ButtonContainer: styled.div`
    position: relative;
    top: 150px;
    left: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ButtonName: styled.p`
    font-size: 15px;
    cursor: pointer;
  `,
};

export default styles;
