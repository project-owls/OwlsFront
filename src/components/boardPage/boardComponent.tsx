import React, { createContext } from 'react';
import { useParams } from 'react-router-dom';

import SearchBar from './searchBar/searchBar';
import NavigationBar from './navigationBar/navigationBar';

// 세션 정보 인터페이스 정의 (kind 제외)
interface SessionData {
  userId: string;
  userProfileImage: string;
  postTitle: string;
  postType: string;
  views: number;
  likes: number;
  createdAt: string;
}

// 기본 세션 데이터
const defaultSessionData: SessionData = {
  userId: '',
  userProfileImage: '',
  postTitle: '',
  postType: '',
  views: 0,
  likes: 0,
  createdAt: '',
};

// 컨텍스트 값에 세션 데이터와 kind를 포함하는 인터페이스
interface SessionContextType {
  sessionData: SessionData;
  kind?: string;
}

// 컨텍스트 생성 (기본값은 세션 데이터와 kind를 모두 포함)
export const SessionContext = createContext<SessionContextType>({
  sessionData: defaultSessionData,
  kind: undefined,
});

interface ChildrenType {
  children: React.ReactNode;
}
// Board 컴포넌트가 가질 수 있는 추가적인 static 속성을 정의
interface BoardComponentType extends React.FC<ChildrenType> {
  searchBar: React.FC; // SearchBar 컴포넌트의 타입을 여기에 지정
  navigationBar: React.FC;
}

const Board: BoardComponentType = ({ children }) => {
  const { kind } = useParams<{ kind: string }>();

  // 세션 컨텍스트 값에 세션 데이터와 kind 포함
  const sessionContextValue: SessionContextType = {
    sessionData: defaultSessionData, // 세션 데이터
    kind: kind, // 현재 페이지 종류
  };

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

Board.searchBar = SearchBar;
Board.navigationBar = NavigationBar;
export default Board;
