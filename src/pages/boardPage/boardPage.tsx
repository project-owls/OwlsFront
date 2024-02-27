import Board from '../../components/boardPage/boardComponent';
import Logo from '../../components/common/logo/logo';

const BoardPage: React.FC = () => {
  return (
    <Board>
      <Logo />
      <Board.searchBar />
    </Board>
  );
};

export default BoardPage;
