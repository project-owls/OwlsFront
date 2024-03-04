import styled from 'styled-components';

interface IconColorProps {
  color: string;
}
const styles = {
  Container: styled.div`
    position: relative;
    top: 120px;
    left: 140px;

    width: 750px;
    height: 900px;
    border: solid 0.2px #d9d9d9;
    border-radius: 10px;
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
  IconName: styled.p<IconColorProps>`
    color: ${({ color }) => color};
    font-size: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 10px;
    cursor: pointer;
  `,
};

export default styles;
