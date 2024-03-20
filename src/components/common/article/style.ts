import styled from 'styled-components';
import TrendingArticleProps from '../../../types/common/isBoard';

const styles = {
  Container: styled.div<TrendingArticleProps>`
    position: relative;
    top: ${({ isBoard }) => (isBoard ? '180px' : '30px')};
    left: ${({ isBoard }) => (isBoard ? '140px' : '30px')};

    width: 750px;
    border-bottom: ${({ isBoard }) =>
      isBoard ? 'solid 0.2px #d9d9d9' : 'none'};
  `,
  Kind: styled.p`
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 600;
  `,
  Title: styled.h3`
    color: #4e4e4e;
    font-weight: 550;
  `,
  TextContainer: styled.div`
    line-height: 80%;
    margin: 15px 0;
  `,
  Text: styled.p`
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 500;
  `,
  UserInfo: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
  UserProfile: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 10px;
  `,
};

export default styles;
