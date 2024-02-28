import React from 'react';
import styles from './style';

import { useRecoilState } from 'recoil';
import { isClickedState } from '../../../states/isClickedState/isClickesstate';

import coding from '../../../images/boardPage/coding.png';
import design from '../../../images/boardPage/design.png';
import etc from '../../../images/boardPage/etc.png';
import marketing from '../../../images/boardPage/marketting.png';
import pm from '../../../images/boardPage/pm.png';
import edit from '../../../images/boardPage/video.png';

const NavigationBar: React.FC = () => {
  const iconImages = {
    coding: coding,
    design: design,
    edit: edit,
    marketing: marketing,
    pm: pm,
    etc: etc,
  };

  const ButtonName = ['코딩', '디자인', '편집', '마켓팅', '기획', '기타'];
  // 전역 상태
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  return (
    <styles.Container>
      {Object.entries(iconImages).map(([key, value], index) => {
        const path = `/boardPage/${key}`;
        return (
          <styles.Link
            to={path}
            key={index}
            onClick={() => {
              //isClicked에 추가할 새로운 배열 형성 from메서드 이용, length속성에 들어간 값은 반환할 배열의 길이
              const newIsClicked = Array.from(
                { length: ButtonName.length },
                (_, idx) => idx === index,
              );
              setIsClicked(newIsClicked);
            }}
            isClicked={isClicked[index]}
          >
            <styles.Button isClicked={isClicked[index]}>
              <styles.IconImage src={value} />
            </styles.Button>
            <styles.ButtonContainer>
              <styles.ButtonName>{ButtonName[index]}</styles.ButtonName>
            </styles.ButtonContainer>
          </styles.Link>
        );
      })}
    </styles.Container>
  );
};

export default NavigationBar;
