import React from 'react';
import styles from './style';
import PostData from '../../../types/common/postData';
interface ArticleProps {
  post: PostData;
}
const Article: React.FC<ArticleProps> = ({ post }) => {
  return (
    <styles.Container>
      <styles.TextContainer>
        <styles.Kind>{post.kind}</styles.Kind>
        <styles.Title>{post.content}</styles.Title>
        <styles.Text>
          조회{post.reactions.comments} • 추천수 {post.reactions.likes} •{' '}
          {post.date}
        </styles.Text>
      </styles.TextContainer>
      <styles.UserInfo>
        <styles.UserProfile src={post.profile_url} />
        <styles.Text>{post.author}</styles.Text>
      </styles.UserInfo>
    </styles.Container>
  );
};

export default Article;
