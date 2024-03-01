import React from 'react';
import styles from './style';

import WriteIcon from '../../../images/boardPage/write.png';
import Pencil from '../../../images/boardPage/pencil.png';

const WriteButton: React.FC = () => {
  return (
    <styles.Container>
      <styles.TopContainer>
        <styles.TextContainer>
          {' '}
          {/*h태그와 p태그의 글자 간격 조정을 위해 lineHeight 적용 */}
          <styles.Title>찾으시는 글이 없으신가요?</styles.Title>
          <styles.Text>직접 작성해 보세요 </styles.Text>
        </styles.TextContainer>
        <styles.ImageIcon src={WriteIcon} />
      </styles.TopContainer>
      <styles.ButtonContainer>
        글 작성하기
        <styles.ButtonIcon src={Pencil} />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default WriteButton;
