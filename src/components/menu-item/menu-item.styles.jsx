import styled from 'styled-components';

import { device } from '../../device';

export const MenuItemContainer = styled.div`
  position: relative;
  width: 18%;
  margin: 0 1% 10px;
  @media ${device.laptop} {
    width: 48%;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  @media ${device.laptop} {
    height: 300px;
  }
`;

export const BackgroundImageInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  opacity: 0.7;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 20px;
  letter-spacing: 2px;
`;
