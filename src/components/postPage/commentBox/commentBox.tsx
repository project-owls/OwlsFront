import React, { useContext } from 'react';
import styles from './style';
import { SessionContext } from '../postComponent';
import Pencil from '../../../images/boardPage/pencil.png';
import CommentTotal from '../commentTotal/commentTotal';

const CommentBox: React.FC = () => {
  const { comments, setWrittingComment } = useContext(SessionContext);

  return (
    <styles.Container>
      <styles.WriteCommentContainer>
        {/*여기서 change 이벤트 */}
        <styles.TransParentInput
          placeholder="답변을 작성해주세요"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setWrittingComment && setWrittingComment(event.target.value); // set함수의 인자 타입은 문자열입니다.
          }}
        />
        <styles.WriteButton>
          <styles.Pencil src={Pencil} />
        </styles.WriteButton>
      </styles.WriteCommentContainer>
      <CommentTotal comments={comments} />
    </styles.Container>
  );
};

export default CommentBox;
