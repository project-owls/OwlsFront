import React from 'react';
import styles from './style';
import PostData from '../../../types/common/postData';

interface ArticleProps {
  post: PostData;
  isBoard: boolean;
}
const Article: React.FC<ArticleProps> = ({ post, isBoard }) => {
  return (
    <styles.Container isBoard={isBoard}>
      <styles.TextContainer>
        <styles.Kind>{post.boardCategory.name}</styles.Kind>
        <styles.Title>{post.title}</styles.Title>
        <styles.Text>
          조회{post.views} • 추천수 {post.likeCount} • {post.updatedAt}
        </styles.Text>
      </styles.TextContainer>
      <styles.UserInfo>
        <styles.UserProfile src={post.user.profileImage.url} />
        <styles.Text>{post.user.nickname}</styles.Text>
      </styles.UserInfo>
    </styles.Container>
  );
};

export default Article;
