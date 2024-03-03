import React, { useState, useEffect } from 'react';
import styles from './style';
import Arrow from '../../../images/common/Arrow.png';
import detectTop from '../../../hooks/scrollAnimation/detectTop';

const ScrollToTop: React.FC = () => {
  const [atTop, setAtTop] = useState<boolean>(false);

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
