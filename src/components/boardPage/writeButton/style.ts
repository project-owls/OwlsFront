import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: fixed;
    top: 70px;
    left: 1000px;

    width: 330px;
    height: 130px;
    padding: 25px;

    background-color: #f5f5f5;
    border-radius: 10px;
  `,
  TopContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
  `,
  TextContainer: styled.div`
    line-height: 60%;
  `,
  Title: styled.h3`
    color: #4e4e4e;
    font-weight: 600;
  `,
  Text: styled.p`
    color: #7a7a7a;
    font-weight: bold;
    font-size: 15px;
  `,
  ImageIcon: styled.img`
    width: 50px;
    height: 50px;
    margin-left: 30px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 310px;
    height: 45px;

    background-color: #eade71;
    border-radius: 10px;
    color: white;
    font-weight: bold;

    cursor: pointer;
  `,
  ButtonIcon: styled.img`
    width: 20px;
    height: 25px;

    margin-left: 5px;
  `,
};

export default styles;
