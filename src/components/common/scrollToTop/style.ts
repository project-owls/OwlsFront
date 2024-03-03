import styled, { keyframes } from 'styled-components';
//keyframs를 사용해 시간 순서대로 정밀한 애니메이션 정의 가능
const rotateAnimation = keyframes`
0%, 100% {
    transform: translate(0px, 0px);
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1); //애니메이션 선의 속도곡선 베지어 곡선을 이용해 정밀한 조정
  }
  50% {
    transform: translate(0px, -30px);
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  70% {
    transform: translate(0px, -15px);
  }
  90% {
    transform: translate(0px, -4px);
  }
`;
const styles = {
  Container: styled.div`
    position: fixed;
    top: 70vh;
    left: 55vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f5f5f5;
    opacity: 0.5;
    border-radius: 100px;

    width: 130px;
    height: 130px;

    cursor: pointer;
    animation: ${rotateAnimation} 1.4s infinite;
  `,
  ArrowIcon: styled.img`
    width: 60px;
    height: 80px;
    padding: 13px 0 0 0;
  `,
};
export default styles;
