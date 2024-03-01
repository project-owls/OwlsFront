import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: relative;
    top: 180px;
    left: 140px;

    width: 750px;
    border-bottom: solid 0.2px #d9d9d9;
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
    margin: 0 10px;
  `,
};

export default styles;
