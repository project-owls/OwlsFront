import React, { useState, useEffect } from 'react';
import styles from './style';
import Loading from '../../../images/common/loading.png';
import detectBottom from '../../../hooks/scrollAnimation/detectBottom';

const ScrollAnimation: React.FC = () => {
  const [atBottom, setAtBottom] = useState<boolean>(false);
  const [isVisiblle, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtBottom(detectBottom());
    };

    const handleWheelAtBottom = (event: WheelEvent) => {
      if (atBottom && event.deltaY > 0) {
        // 페이지 하단에 있고, 휠을 아래로 스크롤할 때 deltaY가 양수일 경우 사용자가 휠을 아래로 스크롤하고 있는 것
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    // 휠 이벤트 리스너 추가
    window.addEventListener('wheel', handleWheelAtBottom);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheelAtBottom);
    };
  }, [atBottom]);

  return (
    <>
      {isVisiblle && (
        <styles.Container>
          <styles.Image src={Loading} />
          <styles.Message>더 이상 페이지를 내릴 수 없습니다.</styles.Message>
        </styles.Container>
      )}
    </>
  );
};

export default ScrollAnimation;
