import React from 'react';
import styles from './style';
import LoadingImage from '../../../images/common/loading.png';

interface LoadingProps {
  message: string;
}
const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <styles.Container>
      <styles.Image src={LoadingImage} />
      <styles.Message>{message}</styles.Message>
    </styles.Container>
  );
};

export default Loading;
