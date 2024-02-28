import { atom } from 'recoil';

export const isClickedState = atom<boolean[]>({
  key: 'isClickedState', // 고유한 key 값을 설정
  default: new Array(6).fill(false), // 기본값 설정
});
