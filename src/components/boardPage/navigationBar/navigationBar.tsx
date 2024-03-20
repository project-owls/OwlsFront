import React, { useContext } from 'react';
import styles from './style';

import { useRecoilState } from 'recoil';
import { isClickedState } from '../../../states/isClickedState/isClickesstate';

import coding from '../../../images/boardPage/coding.png';
import design from '../../../images/boardPage/design.png';
import etc from '../../../images/boardPage/etc.png';
import marketing from '../../../images/boardPage/marketting.png';
import pm from '../../../images/boardPage/pm.png';
import edit from '../../../images/boardPage/video.png';

import { SessionContext } from '../boardComponent';

import { KindName } from '../buttonBar/buttonBar';

const NavigationBar: React.FC = () => {
  //이 객체의 키는 버튼이 가리킬 주소의 parameter로 들어가고 값은 버튼에 들어갈 아이콘 이미지 주소
  const iconImages = {
    coding: coding,
    design: design,
    edit: edit,
    marketing: marketing,
    pm: pm,
    etc: etc,
  };
  //버튼 밑에 들어가는 버튼 이름이 담긴 배열
  const ButtonName = ['코딩', '디자인', '편집', '마켓팅', '기획', '기타'];
  //게시글의 종류
  const chooseName: { [key: string]: number } = {
    total: 0,
    question: 1,
    study: 2,
    etc: 3,
  };
  // 전역 상태
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  //boardPage내에서 공유하는 전체, 질문, 스터디 ,기타 중 유저가 선택한 데이터 -기본은 전체
  const { dataChoose, setCategoryId } = useContext(SessionContext);
  return (
    <styles.Container>
      {Object.entries(iconImages).map(([key, value], index) => {
        const path = `/boardPage/${key}/${dataChoose}`;

        return (
          <styles.Link
            to={path}
            key={index}
            onClick={() => {
              //isClicked에 추가할 새로운 배열 형성 from메서드 이용, length속성에 들어간 값은 반환할 배열의 길이 배열에서 현재 인덱스의 값만 참으로 바꾸고 이 인덱스에 들어있는 값을 스타일드 컴포넌트에  props로 내려서 해당 버튼 색만 변경
              const newIsClicked = Array.from(
                { length: ButtonName.length },
                (_, idx) => idx === index,
              );
              setIsClicked(newIsClicked);
              if (setCategoryId) {
                if (dataChoose && dataChoose in chooseName) {
                  setCategoryId(KindName[key] + chooseName[dataChoose]);
                } else {
                  setCategoryId(1);
                }
              }
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
