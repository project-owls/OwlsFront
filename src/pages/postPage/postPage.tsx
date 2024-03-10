import React from 'react';
import Post from '../../components/postPage/postComponent';
import Board from '../../components/boardPage/boardComponent';

import Logo from '../../components/common/logo/logo';
import BottomWheelAnimation from '../../components/common/bottomWheelAnimation/bottomWheelAnimation';

const PostPage: React.FC = () => {
  return (
    <Board>
      <Logo />
      {/*검색창 컴포넌트 */}
      <Board.searchBar />
      {/*게시판 선택용 네비게이션 컴포넌트 */}
      <Board.navigationBar />
      <Post>
        <Post.postTop />
        <Post.commentBox />
      </Post>
      {/*글 작성 페이지로 연결해주는 버튼 */}
      <Board.writeButton />
      {/*채팅방으로 연결해주는 버튼 */}
      <Board.chattingButton />
      {/*뜨고있는 게시글 모음 게시판 페이지인지 아닌지에 따라 위치 변화및 디자인 변화 props로 boolean값 내려주기*/}
      <Board.trendingArticle isBoard={true} />
      {/*페이지 최하단인데도 휠 사용시 로딩 화면 표시 */}
      <BottomWheelAnimation />
    </Board>
  );
};

export default PostPage;
