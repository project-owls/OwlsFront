import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const styles = {
  Container: styled.div`
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(245, 245, 245, 0.4);

    z-index: 1000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,

  Image: styled.img`
    width: 122px;
    height: 122px;
    animation: ${rotateAnimation} 3s linear infinite; //에니메이션 속도는 시작부터 끝까지 일정하게 무한히 반복
  `,

  Message: styled.div`
    margin-top: 20px;
    color: #d9d9d9;
    font-size: large;
    font-weight: bold;
  `,
};

export default styles;
