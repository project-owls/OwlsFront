import React, { SetStateAction, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostData from '../../types/common/postData';

import SearchBar from './searchBar/searchBar';
import NavigationBar from './navigationBar/navigationBar';
import ButtonBar from './buttonBar/buttonBar';
import Articles from './articles/articles';
import PostSorter from './postSorter/postSorter';
import WriteButton from './writeButton/writeButton';
import ChattingButton from './chattingButton/chattingButton';
import TrendingArticle from './trendingArticle/trendingArticle';

// 기본 세션 데이터
const defaultSessionData: PostData = {
  id: 1,
  kind: '스터디',
  author: '작성자1',
  date: '2024-02-22',
  content: '이따 10시부터 코딩 같이 하실 분??',
  reactions: {
    likes: 120,
    comments: 2,
  },
  profile_url:
    'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
};

// 컨텍스트 값에 세션 데이터와 kind를 포함하는 인터페이스 ? 선택적 속성은 undefined일 수도 있음
interface SessionContextType {
  data: PostData[];
  trendingData: PostData[];
  kind?: string;
  choose?: string;
  dataChoose?: string;
  setDataChoose?: React.Dispatch<SetStateAction<string>>;
  postSort: boolean[];
  setPostSort?: React.Dispatch<SetStateAction<boolean[]>>;
  page: number;
  setPage?: React.Dispatch<SetStateAction<number>>;
}

// 컨텍스트 생성 (기본값은 세션 데이터와 kind를 모두 포함)
export const SessionContext = createContext<SessionContextType>({
  data: [defaultSessionData],
  trendingData: [defaultSessionData],
  kind: undefined,
  choose: undefined,
  dataChoose: undefined,
  setDataChoose: undefined,
  postSort: [true, false],
  setPostSort: undefined,
  page: 1,
  setPage: undefined,
});

interface ChildrenType {
  children: React.ReactNode;
}
// Board 컴포넌트가 가질 수 있는 추가적인 static 속성을 정의
interface BoardComponentType extends React.FC<ChildrenType> {
  searchBar: React.FC; // SearchBar 컴포넌트의 타입을 여기에 지정
  navigationBar: React.FC;
  buttonBar: typeof ButtonBar;
  articles: React.FC;
  postSorter: React.FC;
  writeButton: React.FC;
  chattingButton: React.FC;
  trendingArticle: typeof TrendingArticle;
}

const Board: BoardComponentType = ({ children }) => {
  //주소에 있는 파라미터 데이터를 받아옴
  const { kind, choose } = useParams<{ kind: string; choose: string }>();
  //전체,스터디 등의 버튼 선택용 state
  const [dataChoose, setDataChoose] = useState<string>('total');
  //최신순, 인기순 클릭
  const [postSort, setPostSort] = useState<boolean[]>([true, false]);
  //페이지네이션에 쓰일 페이지 숫자
  const [page, setPage] = useState<number>(1);
  // 세션 컨텍스트 값에 세션 데이터와 kind 포함
  const sessionContextValue: SessionContextType = {
    data: dummy, //게시물 데이터 배열
    trendingData: dummy,
    kind: kind, // 현재 게시판 종류
    choose: choose, //게시판의 데이터 종류
    dataChoose: dataChoose,
    setDataChoose: setDataChoose,
    postSort: postSort,
    setPostSort: setPostSort,
    page: page,
    setPage: setPage,
  };

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

Board.searchBar = SearchBar;
Board.navigationBar = NavigationBar;
Board.buttonBar = ButtonBar;
Board.articles = Articles;
Board.postSorter = PostSorter;
Board.writeButton = WriteButton;
Board.chattingButton = ChattingButton;
Board.trendingArticle = TrendingArticle;

export default Board;
// 더미데이터
const dummy = [
  {
    id: 1,
    kind: '스터디',
    author: '작성자1',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
  },
  {
    id: 2,
    kind: '스터디',
    author: '작성자2',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 3,
    kind: '스터디',
    author: '작성자3',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 1,
    kind: '스터디',
    author: '작성자1',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
  },
  {
    id: 2,
    kind: '스터디',
    author: '작성자2',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 3,
    kind: '스터디',
    author: '작성자3',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 1,
    kind: '스터디',
    author: '작성자1',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
  },
  {
    id: 2,
    kind: '스터디',
    author: '작성자2',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 3,
    kind: '스터디',
    author: '작성자3',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-18f8SJ7bm1eJoT-AD806ZJFwPkKWDEMhQ&usqp=CAU',
  },
  {
    id: 1,
    kind: '스터디',
    author: '작성자1',
    date: '2024-02-22',
    content: '이따 10시부터 코딩 같이 하실 분??',
    reactions: {
      likes: 120,
      comments: 2,
    },
    profile_url:
      'https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=',
  },
];
