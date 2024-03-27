import React, { createContext, useState, useEffect } from 'react';
import { SetStateAction } from 'react';
//import { useParams } from 'react-router-dom';

import axiosInstance from '../../api/axiosInatance';

import PostData from '../../types/common/postData';
import CommentType from '../../types/PostPage/comment';
import PostTop from './postTop/postTop';
import CommentBox from './commentBox/commentBox';
import { useParams } from 'react-router-dom';

interface SessionContextType {
  data: PostData;
  comments: CommentType[];
  writtingComment?: string;
  setWrittingComment?: React.Dispatch<SetStateAction<string>>;
  setLikeCount?: React.Dispatch<SetStateAction<number>>;
  likeCount: number;
}

const defaultSessionData: PostData = {
  id: 2, // 예시로 든 글 ID
  title: '테스트 제목', // 예시로 든 글 제목
  content: '테스트 내용', // 예시로 든 글 내용
  published: true,
  views: 0, // 조회 수
  likeCount: 1, // 좋아요 수
  createdAt: '2024-03-03T15:33:02.921Z', // 생성 날짜
  updatedAt: '2024-03-04T03:01:29.665Z', // 업데이트 날짜
  user: {
    id: 1,
    nickname: '별명', // 사용자 닉네임
    profileImage: {
      url: 'string;',
    },
  },
  boardCategory: {
    name: '게시판 카테고리', // 게시판 카테고리 이름
  },
  FileUpload: [],
};

// 컨텍스트 생성
export const SessionContext = createContext<SessionContextType>({
  data: defaultSessionData,
  comments: [],
  writtingComment: undefined,
  setWrittingComment: undefined,
  setLikeCount: undefined,
  likeCount: 1,
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
  //게시글 클릭시 게시글을 데이터를 받아올때 사용할 id
  const { board_id } = useParams<{ board_id: string }>();

  //댓글창에 입력중인 값을 저장
  const [writtingComment, setWrittingComment] = useState<string>('');
  const [data, setData] = useState<PostData>(defaultSessionData);
  const [likeCount, setLikeCount] = useState<number>(0);
  //댓글 배열
  const [comments, setComments] = useState<CommentType[]>(defaultcomments);

  const getPostData = async () => {
    try {
      const response = await axiosInstance.get(`boards/view/${board_id}`);
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error('유저 데이터 가져오기 실패:', error);
    }
  };
  const getCommentsData = async () => {
    try {
      const response = await axiosInstance.get(`comments/${board_id}`);
      console.log('댓글:', response);
      setComments(response.data.data);
      console.log(comments);
    } catch (error) {
      console.error('유저 데이터 가져오기 실패:', error);
    }
  };
  const postCommentData = async () => {
    try {
      const response = await axiosInstance.post(`comments/${board_id}`);
      console.log(response);
      //setComments(response.data.data);
    } catch (error) {
      console.error('유저 데이터 가져오기 실패:', error);
    }
  };
  useEffect(() => {
    getPostData(); //게시글 데이터 받아오기
    getCommentsData(); //댓글 데이터 받아오기
    postCommentData();
  }, [likeCount, board_id]);

  const sessionContextValue: SessionContextType = {
    data: data,
    comments: comments,
    writtingComment: writtingComment,
    setWrittingComment: setWrittingComment,
    setLikeCount: setLikeCount,
    likeCount: likeCount,
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

const defaultcomments = [
  {
    id: 1,
    content:
      'Visual Studio - develop Windows apps로 표시된 부분은 Visual Studio가 설치되어 있지 않거나, 설치가 되어 있어도 Flutter 개발에 필요한 특정 컴포넌트가 설치되지 않았음을 의미합니다.',
    likeCount: 5,
    createdAt: '2024-03-03T14:43:11.128Z',
    user: {
      nickname: '하마',
    },
    comment: [
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
    ],
  },
  {
    id: 2,
    content: 'ㅋㅋㅋ',
    likeCount: 3,
    createdAt: '2024-03-03T15:51:34.1458Z',
    user: {
      nickname: '코끼리',
    },
    comment: [
      {
        id: 1,
        content: 'ㅋㅋㅋㅋ',
        likeCount: 5,
        createdAt: '2024-03-03T14:43:11.128Z',
        user: {
          nickname: '제니',
        },
      },
    ],
  },
];
