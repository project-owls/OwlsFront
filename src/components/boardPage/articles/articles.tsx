import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';

const Articles: React.FC = () => {
  //board 컴포넌트의 자식들에게 다 같이 공유하는 게시물 데이터
  const { data } = useContext(SessionContext);
  return (
    <div>
      {data.map((post, index) => {
        return (
          <styles.Container key={index}>
            <styles.TextContainer>
              <styles.Kind>{post.kind}</styles.Kind>
              <styles.Title>{post.content}</styles.Title>
              <styles.Text>
                조회{post.reactions.comments} • 추천수 {post.reactions.likes} •{' '}
                {post.date}
              </styles.Text>
            </styles.TextContainer>
            <styles.UserInfo>
              <styles.UserProfile src={post.profile_url} />
              <styles.Text>{post.author}</styles.Text>
            </styles.UserInfo>
          </styles.Container>
        );
      })}
    </div>
  );
};

export default Articles;
