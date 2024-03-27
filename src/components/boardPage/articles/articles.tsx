import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';
import Article from '../../common/article/article';

import noPost from '../../../images/boardPage/noPost.png';
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
        <div>
          <styles.Image src={noPost} />
          <styles.Text>게시글이 더 이상 존재하지 않습니다.</styles.Text>
        </div>
      )}
    </div>
  );
};

export default Articles;
