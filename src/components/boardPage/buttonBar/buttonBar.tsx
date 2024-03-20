import React, { useContext, useState } from 'react';
import styles from './style';
import { useParams } from 'react-router-dom';
import { SessionContext } from '../boardComponent';

import TrendingArticleProps from '../../../types/common/isBoard';
//게시판의 종류

export const KindName: { [key: string]: number } = {
  coding: 1,
  design: 5,
  edit: 9,
  marketing: 13,
  pm: 17,
  etc: 21,
};

const ButtonBar: React.FC<TrendingArticleProps> = ({ isBoard }) => {
  //사용자가 보고 싶은 게시글의 종류를 선택할 수 있는 버튼에 들어갈 이름 키는 주소에 들어갈 파라미터, 값은 버튼 이름으로 활용
  const ButtonName = {
    total: '전체',
    question: '질문',
    study: '스터디',
    etc: '기타',
  };

  //이건 이 컴포넌트 내에서 버튼 색깔 변경 용도로만 사용
  const [isClicked, setIsClicked] = useState<boolean[]>(
    Array.from({ length: 4 }, (_, idx) => idx === 0),
  );
  //주소에서 그저 받아온 데이터 -게시판의 종류는 버튼 컴포넌트에서는 건드리면 안되므로 주소에서 그냥 파라미터를 읽어옴 -> 버튼 주소에 들어감
  const { kind } = useParams();
  //유저가 선택한 데이터의 종류를 바꿀 set함수
  const { setDataChoose, setCategoryId } = useContext(SessionContext);
  return (
    <styles.Container isBoard={isBoard}>
      {Object.entries(ButtonName).map(([choose, name], index) => {
        const path = `/boardPage/${kind}/${choose}`;
        return (
          <styles.Link
            key={index}
            to={path}
            onClick={() => {
              const newIsClicked = Array.from(
                { length: 4 },
                (_, idx) => idx === index,
              );
              setIsClicked(newIsClicked);
              setDataChoose && setDataChoose(choose);
              if (setCategoryId) {
                // kind 값에 따라 동적으로 CategoryId 설정
                if (kind && kind in KindName) {
                  setCategoryId(KindName[kind] + index);
                } else {
                  // kind가 정의되지 않은 경우의 처리. 여기서는 일단 1
                  setCategoryId(1);
                }
              }
            }}
          >
            <styles.Button isClicked={isClicked[index]}>{name}</styles.Button>
          </styles.Link>
        );
      })}
    </styles.Container>
  );
};

export default ButtonBar;
