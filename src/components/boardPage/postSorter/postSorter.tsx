import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';

const PostSorter: React.FC = () => {
  //board 컴포넌트 자식 컴포넌트들에게 다 같이 공유할 게시물 데이터 - 이 컴포넌트에서는 게시물 수 표시 용도로만 사용
  const { data } = useContext(SessionContext);
  const { postSort, setPostSort } = useContext(SessionContext);
  return (
    <styles.Container>
      <styles.Count>{data.length}개</styles.Count>
      <styles.TextContainer>
        <styles.Text
          onClick={() => {
            setPostSort && setPostSort([true, false]);
          }}
          isClicked={postSort[0]}
        >
          최신순
        </styles.Text>
        <styles.Text
          onClick={() => {
            setPostSort && setPostSort([false, true]);
          }}
          isClicked={postSort[1]}
        >
          인기순
        </styles.Text>
      </styles.TextContainer>
    </styles.Container>
  );
};

export default PostSorter;
