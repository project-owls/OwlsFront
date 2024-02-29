import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../boardComponent';

const Article: React.FC = () => {
  //board 컴포넌트의 자식들에게 다 같이 공유하는 게시물 데이터
  const { data } = useContext(SessionContext);
  return (
    <div>
      {data.map((data, index) => {
        return (
          <styles.Container key={index}>
            <styles.Kind>{data.kind}</styles.Kind>
            <styles.Title>{data.content}</styles.Title>
            <styles.Text>
              조회{data.reactions.comments} • 추천수 {data.reactions.likes} •{' '}
              {data.date}
            </styles.Text>
            <styles.UserInfo>
              <styles.UserProfile src={data.profile_url} />
              <styles.Text>{data.author}</styles.Text>
            </styles.UserInfo>
          </styles.Container>
        );
      })}
    </div>
  );
};

export default Article;
