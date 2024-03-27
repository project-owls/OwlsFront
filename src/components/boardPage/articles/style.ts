import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Link: styled(Link)`
    text-decoration: none;
  `,
  Text: styled.p`
    color: #7a7a7a;
    font-size: 20px;
    position: relative;
    top: 200px;
    left: 140px;
  `,
  Image: styled.img`
    position: relative;
    top: 200px;
    left: 200px;
    width: 200px;
    height: 150px;
  `,
};

export default styles;
