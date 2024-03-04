import React, { createContext } from 'react';

import PostData from '../../types/common/postData';

import PostTop from './postTop/postTop';

interface SessionContextType {
  data: PostData;
  content: string;
}

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

// 컨텍스트 생성
export const SessionContext = createContext<SessionContextType>({
  data: defaultSessionData,
  content: '',
});

interface ChildrenType {
  children: React.ReactNode;
}
// Post 컴포넌트가 가질 수 있는 추가적인 static 속성을 정의
interface PostComponentType extends React.FC<ChildrenType> {
  postTop: React.FC;
}
const Post: PostComponentType = ({ children }) => {
  const sessionContextValue: SessionContextType = {
    data: defaultSessionData,
    content:
      '강의 보는대로 flutter doctor -v치고 확인하니 이렇게 에러가 뜨네요 에러 뜬 링크대로 비쥬얼스튜디오를 다운로드 받았는데도 계속 뜨네요 ㅠ',
  };

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export default Post;

Post.postTop = PostTop;
