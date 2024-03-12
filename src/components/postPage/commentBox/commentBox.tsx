import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../postComponent';
import Pencil from '../../../images/boardPage/pencil.png';
import CommentTotal from '../commentTotal/commentTotal';

const CommentBox: React.FC = () => {
  const { comments } = useContext(SessionContext);
  return (
    <styles.Container>
      <styles.WriteCommentContainer>
        <styles.TransParentInput placeholder="답변을 작성해주세요" />
        <styles.WriteButton>
          <styles.Pencil src={Pencil} />
        </styles.WriteButton>
      </styles.WriteCommentContainer>
      <CommentTotal comments={comments} />
    </styles.Container>
  );
};

export default CommentBox;
