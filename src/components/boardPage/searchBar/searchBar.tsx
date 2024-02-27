import styles from './style';
import SearchIcon from '../../../images/boardPage/Search.png';

const SearchBar: React.FC = () => {
  return (
    <styles.Container>
      <styles.Input
        type="text"
        placeholder="궁금했던 질문이나 관심 글을 검색해보세요 "
      />
      <styles.SearchIcon src={SearchIcon} />
    </styles.Container>
  );
};

export default SearchBar;
