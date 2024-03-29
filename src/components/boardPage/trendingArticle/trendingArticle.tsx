import React, { useContext } from 'react';
import styles from './style';
import articleStyle from '../../common/article/style';
import { SessionContext } from '../boardComponent';

import First from '../../../images/boardPage/1.png';
import Second from '../../../images/boardPage/2.png';
import Third from '../../../images/boardPage/3.png';

import TrendingArticleProps from '../../../types/common/isBoard';
import ButtonBar from '../buttonBar/buttonBar';

const TrendingArticle: React.FC<TrendingArticleProps> = ({ isBoard }) => {
  const numbers = [First, Second, Third];
  const { data } = useContext(SessionContext);

  return (
    <styles.Container isBoard={isBoard}>
      <styles.TopContainer isBoard={isBoard}>
        <styles.Title>이 게시판에서 많이 본 글 </styles.Title>
        {!isBoard && <ButtonBar isBoard={isBoard} />}
      </styles.TopContainer>
      {data.boards.slice(0, 3).map((post, index) => {
        return (
          <>
            <styles.ArticleContainer isBoard={isBoard}>
              <styles.ImageIcon src={numbers[index]} />
              <articleStyle.TextContainer key={index}>
                <articleStyle.Title>{post.title}</articleStyle.Title>
                <articleStyle.Text>
                  조회{post.views} • 추천수 {post.likeCount} •{' '}
                  {post.boardCategory.name}
                </articleStyle.Text>
              </articleStyle.TextContainer>
            </styles.ArticleContainer>
          </>
        );
      })}
    </styles.Container>
  );
};

export default TrendingArticle;
