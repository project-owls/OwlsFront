import styled from 'styled-components';

interface PostSortProps {
  isClicked: boolean;
}
const styles = {
  Container: styled.div`
    position: relative;
    top: 180px;
    left: 140px;

    display: flex;
    justify-content: space-between;
    width: 760px;
  `,
  Count: styled.p`
    color: #7a7a7a;
    font-size: 15px;
  `,
  Text: styled.p<PostSortProps>`
    color: #7a7a7a;
    font-size: 15px;
    font-weight: ${({ isClicked }) => (isClicked ? 'bold' : 'normal')};
    margin: 20px 10px;
    cursor: pointer;
  `,
  TextContainer: styled.div`
    display: flex;
  `,
};

export default styles;
