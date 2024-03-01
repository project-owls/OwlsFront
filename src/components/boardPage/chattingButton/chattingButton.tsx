import React from 'react';
import styles from './style';

import ChatIcon from '../../../images/boardPage/chat.png';

const ChattingButton: React.FC = () => {
  return (
    <styles.Container>
      <styles.TopContainer>
        <styles.TextContainer>
          <styles.Title>채팅방 바로가기</styles.Title>
          <styles.Text>직접 참여해 보세요 </styles.Text>
        </styles.TextContainer>
        <styles.ImageIcon src={ChatIcon} />
      </styles.TopContainer>
    </styles.Container>
  );
};

export default ChattingButton;
