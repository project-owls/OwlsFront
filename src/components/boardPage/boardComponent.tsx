import React, { createContext } from 'react';
import SearchBar from './searchBar/searchBar';

interface SessionInfo {
  userId: string; //유저 아이디
  userProfileImage: string; // 유저 프로필 이미지
  postTitle: string; // 제목
  postType: string; // 글 종류
  views: number; // 조회수
  likes: number; // 추천수
  createdAt: string; // 작성날짜
}

// 세션 정보의 기본값을 설정합니다.
const defaultSession: SessionInfo = {
  userId: '',
  userProfileImage: '',
  postTitle: '',
  postType: '',
  views: 0,
  likes: 0,
  createdAt: '2024.02.17',
};

// createContext에 기본값을 전달하여 호출 안그러면 에러남
const SessionContext = createContext<SessionInfo>(defaultSession);

interface ChildrenType {
  children: React.ReactNode;
}
// Board 컴포넌트가 가질 수 있는 추가적인 static 속성을 정의
interface BoardComponentType extends React.FC<ChildrenType> {
  searchBar: React.FC; // SearchBar 컴포넌트의 타입을 여기에 지정
}

const Board: BoardComponentType = ({ children }) => {
  return (
    <SessionContext.Provider value={defaultSession}>
      {children}
    </SessionContext.Provider>
  );
};

Board.searchBar = SearchBar;
export default Board;
