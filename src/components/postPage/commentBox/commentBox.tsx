import React from 'react';
import styles from './styles';
import Pencil from '../../../images/boardPage/pencil.png';
import Comment from '../comment/comment';

const CommentBox: React.FC = () => {
  return (
    <styles.Container>
      <styles.WriteCommentContainer>
        <styles.TransParentInput placeholder="답변을 작성해주세요" />
        <styles.WriteButton>
          <styles.Pencil src={Pencil} />
        </styles.WriteButton>
      </styles.WriteCommentContainer>
      <Comment />
    </styles.Container>
  );
};

export default CommentBox;
