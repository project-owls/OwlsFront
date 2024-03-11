import React from 'react';
import styles from './style';

import profileImage from '../../../images/postPage/profileImage.png';
import Likes from '../../../images/postPage/likes.png';

const Comment: React.FC = () => {
  return (
    <styles.Container>
      <styles.Top>
        <styles.Top>
          <styles.ProfileImg src={profileImage} />
          <styles.ID>제니</styles.ID>
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
      <styles.Content>
        Visual Studio - develop Windows apps로 표시된 부분은 Visual Studio가
        설치되어 있지 않거나, 설치가 되어 있어도 Flutter 개발에 필요한 특정
        컴포넌트가 설치되지 않았음을 의미합니다.
      </styles.Content>
      <styles.Bottom>
        <styles.Text color={'#4E4E4E'}>03.01 21:17</styles.Text>
        <styles.Likes src={Likes} />
        <styles.Text color={'#A0C586'} cursor={true}>
          5
        </styles.Text>
      </styles.Bottom>
    </styles.Container>
  );
};

export default Comment;
