import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';
import Article from '../../common/article/article';

const Articles: React.FC = () => {
  //board 컴포넌트의 자식들에게 다 같이 공유하는 게시물 데이터
  const { data } = useContext(SessionContext);
  return (
    <div>
      {data.boards && data.boards.length > 0 ? (
        data.boards.map((post) => {
          const path = `/postPage/${post.id}`;
          return (
            <styles.Link to={path} key={post.id}>
              <Article post={post} isBoard={true} />
            </styles.Link>
          );
        })
      ) : (
        <></> //게시물이 없을 경우 띄울 컴포넌트
      )}
    </div>
  );
};

export default Articles;
