import React, { useState, useEffect } from 'react';
import styles from './style';
import Arrow from '../../../images/common/Arrow.png';
import detectTop from '../../../hooks/scrollAnimation/detectTop';

const ScrollToTop: React.FC = () => {
  //처음에 렌더링 될 때는 스크롤을 안한 상태일테니까 기본 값 true로 설정
  const [atTop, setAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(detectTop());
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [atTop]);

  //최상단으로 올려주는 함수
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {!atTop && (
        <styles.Container onClick={toTop}>
          <styles.ArrowIcon src={Arrow} />
        </styles.Container>
      )}
    </>
  );
};

export default ScrollToTop;
