import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../postComponent';
import Article from '../../common/article/article';

import Likes from '../../../images/postPage/likes.png';
import Share from '../../../images/postPage/share.png';

const PostTop: React.FC = () => {
  const { content, data } = useContext(SessionContext);
  return (
    <styles.Container>
      <Article post={data} id={1} />
      <styles.Contnet>{content}</styles.Contnet>
      <styles.IconContainer>
        <styles.IconImage src={Likes} />
        <styles.IconName color={'#A0C586'}>5</styles.IconName>
        <styles.IconImage src={Share} />
        <styles.IconName color={'#7A7A7A'}>공유하기</styles.IconName>
      </styles.IconContainer>
    </styles.Container>
  );
};

export default PostTop;
