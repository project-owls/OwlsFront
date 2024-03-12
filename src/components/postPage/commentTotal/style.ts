import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: relative;
    top: 0;

    width: 97%;
  `,
  CommentContainer: styled.div`
    position: relative;
    top: 0;

    display: flex;
    justify-content: space-around;
    width: 97%;
  `,
  RecommentIcon: styled.img`
    width: 20px;
    height: 20px;
  `,
  commentBox: styled.div`
    background-color: #f5f5f5;
    width: 90%;
    border-radius: 10px;
  `,
};

export default styles;
