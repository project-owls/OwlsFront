import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../postComponent';
import Article from '../../common/article/article';
const PostTop: React.FC = () => {
  const { content, data } = useContext(SessionContext);
  return (
    <styles.Container>
      <Article post={data} />
      <styles.Contnet>{content}</styles.Contnet>
    </styles.Container>
  );
};

export default PostTop;
