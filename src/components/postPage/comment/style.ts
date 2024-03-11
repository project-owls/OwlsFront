import styled from 'styled-components';
interface ColorProps {
  color: string;
  cursor?: boolean;
}
const styles = {
  Container: styled.div`
    position: relative;
    top: 0;

    width: 700px;
  `,
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ProfileImg: styled.img`
    padding: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    cursor: pointer;
  `,
  ID: styled.p`
    color: #4e4e4e;
    font-size: 10px;
    cursor: pointer;
  `,
  Text: styled.p<ColorProps>`
    color: ${({ color }) => color};
    font-size: 10px;
    padding: 0 5px;
    cursor: ${({ cursor }) => (cursor ? 'pointer' : 'default')};
  `,
  Content: styled.p`
    position: relative;
    top: -10px;
    color: #4e4e4e;
    font-size: 10px;
    padding: 0 10px;
  `,
  Bottom: styled.div`
    position: relative;
    top: -20px;

    display: flex;
    align-items: center;
    padding: 0 10px;
  `,
  Likes: styled.img`
    width: 15px;
    height: 15px;
    margin-left: 5px;
    cursor: pointer;
  `,
};

export default styles;
