import React, { createContext } from 'react';

import PostData from '../../types/common/postData';
import CommentType from '../../types/common/comment';
import PostTop from './postTop/postTop';
import CommentBox from './commentBox/commentBox';

interface SessionContextType {
  data: PostData;
  content: string;
  comments: CommentType[];
}

const defaultSessionData: PostData = {
  id: 2, // 예시로 든 글 ID
  title: '테스트 제목', // 예시로 든 글 제목
  content: '테스트 내용', // 예시로 든 글 내용
  views: 0, // 조회 수
  likeCount: 1, // 좋아요 수
  createdAt: '2024-03-03T15:33:02.921Z', // 생성 날짜
  updatedAt: '2024-03-04T03:01:29.665Z', // 업데이트 날짜
  user: {
    nickname: '별명', // 사용자 닉네임
  },
  boardCategory: {
    name: '게시판 카테고리', // 게시판 카테고리 이름
  },
  FileUpload: [],
};

// 컨텍스트 생성
export const SessionContext = createContext<SessionContextType>({
  data: defaultSessionData,
  content: '',
  comments: [],
});

interface ChildrenType {
  children: React.ReactNode;
}
// Post 컴포넌트가 가질 수 있는 추가적인 static 속성을 정의
interface PostComponentType extends React.FC<ChildrenType> {
  postTop: React.FC;
  commentBox: React.FC;
}
const Post: PostComponentType = ({ children }) => {
  const sessionContextValue: SessionContextType = {
    data: defaultSessionData,
    content:
      '강의 보는대로 flutter doctor -v치고 확인하니 이렇게 에러가 뜨네요 에러 뜬 링크대로 비쥬얼스튜디오를 다운로드 받았는데도 계속 뜨네요 ㅠ',
    comments: comments,
  };

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export default Post;

Post.postTop = PostTop;
Post.commentBox = CommentBox;

const comments = [
  {
    id: 1,
    content:
      'Visual Studio - develop Windows apps로 표시된 부분은 Visual Studio가 설치되어 있지 않거나, 설치가 되어 있어도 Flutter 개발에 필요한 특정 컴포넌트가 설치되지 않았음을 의미합니다.',
    likeCount: 5,
    createdAt: '2024-03-03T14:43:11.128Z',
    user: {
      nickname: '하마',
    },
  },
  {
    id: 2,
    content: 'ㅋㅋㅋ',
    likeCount: 3,
    createdAt: '2024-03-03T15:51:34.1458Z',
    user: {
      nickname: '코끼리',
    },
    comment: {
      id: 1,
      content: 'ㅋㅋㅋㅋ',
      likeCount: 5,
      createdAt: '2024-03-03T14:43:11.128Z',
      user: {
        nickname: '제니',
      },
    },
  },
];
