import React from 'react';
import styles from './style';

import profileImage from '../../../images/postPage/profileImage.png';
import Likes from '../../../images/postPage/likes.png';
import Reply from '../../../images/postPage/reply.png';

import CommentType from '../../../types/common/comment';

interface CommentProps {
  comments: CommentType[];
}

const Comment: React.FC<CommentProps> = ({ comments }) => {
  return (
    <>
      {' '}
      {/* 불필요한 React.Fragment 제거 및 최상위 요소로 div 사용 */}
      {comments.map((comment, index) => (
        <div key={index}>
          {' '}
          {/* key prop을 최상위 반복 요소에 직접 제공 */}
          <styles.Container>
            <styles.Top>
              <styles.Top>
                <styles.ProfileImg src={profileImage} />
                <styles.ID>{comment.user.nickname}</styles.ID>
              </styles.Top>
              <styles.Top>
                <styles.Text color={'#4E4E4E'} cursor={true}>
                  추천
                </styles.Text>
                <styles.Text color={'#4E4E4E'} cursor={true}>
                  대댓글
                </styles.Text>
              </styles.Top>
            </styles.Top>
            <styles.Content>{comment.content}</styles.Content>
            <styles.Bottom>
              <styles.Text color={'#4E4E4E'}>{comment.createdAt}</styles.Text>
              <styles.Likes src={Likes} />
              <styles.Text color={'#A0C586'} cursor={true}>
                {comment.likeCount}
              </styles.Text>
            </styles.Bottom>
          </styles.Container>
          {comment.comment &&
            comment.comment.map((reComment, reIndex) => (
              <styles.CommentContainer key={`recomment-${reIndex}`}>
                <styles.RecommentIcon src={Reply} />
                <styles.commentBox>
                  <styles.Top>
                    <styles.Top>
                      <styles.ProfileImg src={profileImage} />
                      <styles.ID>{reComment.user.nickname}</styles.ID>
                    </styles.Top>
                    <styles.Top>
                      <styles.Text color={'#4E4E4E'} cursor={true}>
                        추천
                      </styles.Text>
                      <styles.Text color={'#4E4E4E'} cursor={true}>
                        대댓글
                      </styles.Text>
                    </styles.Top>
                  </styles.Top>
                  <styles.Content>{reComment.content}</styles.Content>
                  <styles.Bottom>
                    <styles.Text color={'#4E4E4E'}>
                      {reComment.createdAt}
                    </styles.Text>
                    <styles.Likes src={Likes} />
                    <styles.Text color={'#A0C586'} cursor={true}>
                      {reComment.likeCount}
                    </styles.Text>
                  </styles.Bottom>
                </styles.commentBox>
              </styles.CommentContainer>
            ))}
        </div>
      ))}
    </>
  );
};

export default Comment;
