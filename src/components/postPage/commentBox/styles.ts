import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: relative;
    top: -400px;
    left: 165px;

    width: 700px;
    height: 350px;
    border: solid 0.2px #d9d9d9;
    border-radius: 10px;
  `,
  WriteCommentContainer: styled.div`
    position: relative;
    top: 0;

    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 50px;
    border: solid 0.5px #d9d9d9;
    border-radius: 10px;
  `,
  TransParentInput: styled.input`
    flex: 10;
    background-color: transparent;
    border: none;

    color: #4e4e4e;
    font-size: 20px;
    padding: 0 20px;

    &::placeholder {
      color: #d9d9d9;
      font-weight: 550;
    }

    &:focus {
      outline: none;
      border: none;
    }
  `,
  WriteButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    width: 50px;
    height: 50px;

    background-color: #eade71;
    border-radius: 10px;
  `,
  Pencil: styled.img`
    width: 30px;
    height: 30px;
  `,
  Contnet: styled.p`
    color: #4e4e4e;
    font-size: 20px;
    padding: 30px;
  `,
  IconContainer: styled.div`
    display: flex;r;
    align-items: center;

    padding:0 30px;
  `,
  IconImage: styled.img`
    width: 20px;
    height: 20px;

    margin-right: 5px;
    cursor: pointer;
  `,
};

export default styles;
