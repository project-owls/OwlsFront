import { atom } from 'recoil';

//게시판 선택 - 네비게이션 바의 각각의 버튼에 대한 클릭 정보가 담긴 배열
export const isClickedState = atom<boolean[]>({
  key: 'isClickedState', // 고유한 key 값을 설정
  default: new Array(6).fill(false), // 기본값 설정
});
