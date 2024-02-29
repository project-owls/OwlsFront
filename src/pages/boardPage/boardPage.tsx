import Board from '../../components/boardPage/boardComponent';
import Logo from '../../components/common/logo/logo';
import Paging from '../../components/common/pagination/paging';

const BoardPage: React.FC = () => {
  return (
    <Board>
      <Logo />
      {/*검색창 컴포넌트 */}
      <Board.searchBar />
      {/*게시판 선택용 네비게이션 컴포넌트 */}
      <Board.navigationBar />
      {/*게시판 내에 게시물의 종류 선택용 버튼 컴포넌트 */}
      <Board.buttonBar />
      {/*게시물 수와 게시물 정렬 버튼이 포함된 컴포넌트 */}
      <Board.postSorter />
      {/*게시물 컴포넌트 */}
      <Board.article />
      <Paging />
    </Board>
  );
};

export default BoardPage;
