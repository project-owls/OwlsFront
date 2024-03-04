import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../postComponent';
const PostTop: React.FC = () => {
  const { content } = useContext(SessionContext);
  return (
    <styles.Container>
      <styles.Contnet>{content}</styles.Contnet>
    </styles.Container>
  );
};

export default PostTop;
