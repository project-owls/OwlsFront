import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;
    top: 90px;
    left: 290px;

    display: flex;
    border: solid #d9d9d9 2px;
    border-radius: 30px;
    width: 635px;
    height: 70px;
  `,
  Input: styled.input`
    width: 85%;
    height: 100%;

    background-color: transparent;
    border: none;
    padding: 0 0 0 30px;

    &::placeholder {
      color: #d9d9d9;
      font-size: 20px;
      font-weight: 550;
    }
  `,
  SearchIcon: styled.img`
    width: 30px;
    height: 40px;
    padding: 13px 0 0 0;
  `,
};
export default styles;
