import React from 'react';
import styles from './style';

import Reply from '../../../images/postPage/reply.png';
import CommentType from '../../../types/PostPage/comment';

import Comment from '../comment/comment';
interface CommentProps {
  comments: CommentType[];
}

const CommentTotal: React.FC<CommentProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <styles.Container>
            {/*댓글의 배경색과 사이즈만 다르고 안에 들어가는 구조는 같으므로 컴포넌트화 시켜 놓음 */}
            <Comment comment={comment} />
          </styles.Container>
          {comment.comment &&
            comment.comment.map((reComment, reIndex) => (
              <styles.CommentContainer key={`recomment-${reIndex}`}>
                <styles.RecommentIcon src={Reply} />
                <styles.commentBox>
                  <Comment comment={reComment} />
                </styles.commentBox>
              </styles.CommentContainer>
            ))}
        </div>
      ))}
    </>
  );
};

export default CommentTotal;
