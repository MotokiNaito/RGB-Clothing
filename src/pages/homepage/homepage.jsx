import React from 'react';

import Directory from '../../components/directory/directory';
import heroImage from '../../assets/main-image.jpg';

import { HomePageContainer, MainImageContainer, MainTextContainer, DiscoverBtn, IntroText } from './homepage.styles';

const HomePage = () => (
  <>
    <MainImageContainer>
      <img alt="hero" src={heroImage} />
      <MainTextContainer>
        <h1>
          Summer, Fall <br />
          Collection
        </h1>
        <DiscoverBtn to="/shop">Discover</DiscoverBtn>
      </MainTextContainer>
    </MainImageContainer>
    <IntroText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </IntroText>
    <HomePageContainer>
      <h2>Category</h2>
      <Directory />
    </HomePageContainer>
  </>
);

export default HomePage;
