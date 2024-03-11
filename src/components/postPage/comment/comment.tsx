import React from 'react';
import styles from './style';

import profileImage from '../../../images/postPage/profileImage.png';
import Likes from '../../../images/postPage/likes.png';

import CommentType from '../../../types/common/comment';

interface CommentProps {
  comments: CommentType[];
}

const Comment: React.FC<CommentProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <styles.Container key={index}>
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
        );
      })}{' '}
    </>
  );
};

export default Comment;
