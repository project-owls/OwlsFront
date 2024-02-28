import React, { useState } from 'react';
import styles from './style';

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

  const [isClicked, setIsClicked] = useState<boolean[]>(
    new Array(6).fill(false),
  );

  return (
    <styles.Container>
      {Object.entries(iconImages).map(([key, value], index) => {
        const path = `/boardPage/${key}`;
        return (
          <styles.Link
            to={path}
            key={index}
            onClick={() => {
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
