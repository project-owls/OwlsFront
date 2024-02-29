import React, { useContext } from 'react';
import './paging.css';
import Pagination from 'react-js-pagination';
import { SessionContext } from '../../boardPage/boardComponent';

const Paging: React.FC = () => {
  //Board 에서 받아온 page와 setPage 서버에서 해당 페이지의 데이터를 받아오는 건 BoardComponent에서실행
  const { page, setPage } = useContext(SessionContext);
  const handlePageChange = (page: number) => {
    setPage && setPage(page);
  };

  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={450} // 총 아이템 갯수
      pageRangeDisplayed={5} // paginator의 페이지 범위
      prevPageText={'‹'} // "이전"을 나타낼 텍스트
      nextPageText={'›'} // "다음"을 나타낼 텍스트
      onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
    />
  );
};

export default Paging;
