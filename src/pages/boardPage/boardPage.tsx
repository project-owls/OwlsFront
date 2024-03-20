import Board from '../../components/boardPage/boardComponent';

import Logo from '../../components/common/logo/logo';
import Paging from '../../components/common/pagination/paging';
import BottomWheelAnimation from '../../components/common/bottomWheelAnimation/bottomWheelAnimation';
import ScrollToTop from '../../components/common/scrollToTop/scrollToTop';

const BoardPage: React.FC = () => {
  return (
    <Board>
      <Logo />
      {/*검색창 컴포넌트 */}
      <Board.searchBar />
      {/*게시판 선택용 네비게이션 컴포넌트 */}
      <Board.navigationBar />
      {/*게시판 내에 게시물의 종류 선택용 버튼 컴포넌트 */}
      <Board.buttonBar isBoard={true} />
      {/*게시물 수와 게시물 정렬 버튼이 포함된 컴포넌트 */}
      {<Board.postSorter />}
      {/*게시물 컴포넌트 */}
      {<Board.articles />}
      {/*글 작성 페이지로 연결해주는 버튼 */}
      <Board.writeButton />
      {/*채팅방으로 연결해주는 버튼 */}
      <Board.chattingButton />
      {/*뜨고있는 게시글 모음 게시판 페이지인지 아닌지에 따라 위치 변화및 디자인 변화 props로 boolean값 내려주기*/}
      <Board.trendingArticle isBoard={true} />
      {/*페이지 네이션 */}
      <Paging />
      {/*페이지 최하단인데도 휠 사용시 로딩 화면 표시 */}
      <BottomWheelAnimation />
      <ScrollToTop />
    </Board>
  );
};

export default BoardPage;
