import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: fixed;
    top: 260px;
    left: 1000px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 330px;
    height: 35px;
    padding: 25px;

    background-color: #a0c586;
    border-radius: 10px;

    cursor: pointer;
  `,
  TopContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TextContainer: styled.div`
    line-height: 60%;
  `,
  Title: styled.h3`
    color: white;
    font-weight: 600;
  `,
  Text: styled.p`
    color: white;
    font-weight: bold;
    font-size: 15px;
  `,
  ImageIcon: styled.img`
    width: 50px;
    height: 50px;
    margin-left: 30px;
  `,
};

export default styles;
