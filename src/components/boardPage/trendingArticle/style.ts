import styled from 'styled-components';
import TrendingArticleProps from '../../../types/common/isBoard';

const styles = {
  Container: styled.div<TrendingArticleProps>`
    position: ${({ isBoard }) => (isBoard ? 'fixed' : 'relative')};
    top: ${({ isBoard }) =>
      isBoard
        ? '360px'
        : '700px'}; //임의로 잡아둠 보드게시판인지 아닌 지에따라 위치 변화
    left: ${({ isBoard }) => (isBoard ? '1000px' : '120px')};

    width: auto;
    padding: 10px;

    border: solid 0.3px #f5f5f5;
    border-radius: 10px;

    cursor: pointer;
  `,
  Title: styled.h4`
    color: #4e4e4e;
  `,
  TopContainer: styled.div<TrendingArticleProps>`
    display: flex;
    justify-content: ${({ isBoard }) => (isBoard ? 'center' : 'flex-start')};
    align-items: center;
  `,
  ArticleContainer: styled.div<TrendingArticleProps>`
    display: flex;
    justify-content: ${({ isBoard }) => (isBoard ? 'center' : 'flex-start')};
    align-items: center;
  `,
  ImageIcon: styled.img`
    width: 30px;
    height: 40px;

    margin: 0 10px;
  `,
};

export default styles;
