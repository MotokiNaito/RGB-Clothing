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
      RGB Clothing is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups. The customer is at the heart of our unique business
      model, which includes design, production, distribution and sales through our extensive retail network.
    </IntroText>
    <HomePageContainer>
      <h2>Category</h2>
      <Directory />
    </HomePageContainer>
  </>
);

export default HomePage;
