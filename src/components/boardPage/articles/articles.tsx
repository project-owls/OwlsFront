import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';
import Article from '../../common/article/article';

const Articles: React.FC = () => {
  //board 컴포넌트의 자식들에게 다 같이 공유하는 게시물 데이터
  const { data } = useContext(SessionContext);
  return (
    <div>
      {data.map((post, index) => {
        const path = `/postPage/${post.id}`;
        return (
          <styles.Link to={path} key={index}>
            <Article post={post} />
          </styles.Link>
        );
      })}
    </div>
  );
};

export default Articles;
