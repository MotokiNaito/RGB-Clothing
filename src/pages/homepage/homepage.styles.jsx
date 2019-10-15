import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 20px 0;
  align-items: center;
  h2 {
    margin-left: 1%;
  }
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 70px;
  img {
    width: 60%;
    max-width: 100%;
    height: auto;
  }
`;

export const MainTextContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  h1 {
    font-size: 150px;
  }
`;

export const DiscoverBtn = styled(Link)`
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  background-color: #000;
  padding: 1rem 3rem;
`;

export const IntroText = styled.div`
  max-width: 800px;
  margin: 140px auto 100px;
  font-size: 32px;
  text-align: center;
`;
