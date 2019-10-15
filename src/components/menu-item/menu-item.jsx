import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, BackgroundImageInner, ContentContainer, ContentTitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer size={size}>
      <BackgroundImageInner className="background-image" imageUrl={imageUrl} />
    </BackgroundImageContainer>
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
