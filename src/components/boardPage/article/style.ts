import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: relative;
    top: 200px;
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
    color: black;
  `,
  Text: styled.p`
    color: #7a7a7a;
    font-size: 15px;
  `,
  UserInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  UserProfile: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 0 10px;
  `,
};

export default styles;
