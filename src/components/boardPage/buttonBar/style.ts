import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TrendingArticleProps from '../../../types/common/isBoard';

interface ButtonProps {
  isClicked: boolean;
}

const styles = {
  Container: styled.div<TrendingArticleProps>`
    ${({ isBoard }) =>
      isBoard // 게시판페이지인 경우에만 상대적인 위치 사용
        ? `
      position: relative;
      top: 130px;
      left: 135px;
    `
        : ''}

    display: flex;
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
    margin: 0 15px;

    background-color: ${({ isClicked }) => (isClicked ? '#EADE71' : '#D9D9D9')};

    border-radius: 20px;

    width: 85px;
    height: 40px;

    cursor: pointer;
  `,
};

export default styles;
