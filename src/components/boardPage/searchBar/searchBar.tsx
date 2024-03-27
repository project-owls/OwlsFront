import { useContext, useState } from 'react';
import styles from './style';
import SearchIcon from '../../../images/boardPage/Search.png';
import { SessionContext } from '../boardComponent';
const SearchBar: React.FC = () => {
  const { setSearch } = useContext(SessionContext);

  const [searchInput, setSearchInput] = useState<string>('');
  return (
    <styles.Container>
      <styles.Input
        type="text"
        placeholder="궁금했던 질문이나 관심 글을 검색해보세요 "
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setSearchInput(e.target.value);
        }}
      />
      <styles.SearchIcon
        src={SearchIcon}
        onClick={() => {
          setSearch && setSearch(searchInput);
        }}
      />
    </styles.Container>
  );
};

export default SearchBar;
