import styled from "styled-components";

export const MenuItemContainer = styled.div`
  position: relative;
  width: 48%;
  margin: 0 7.5px 15px;

  &:last-child {
    width: 100%;
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
  height: ${({ size }) => (size ? "620px" : "460px")};
  position: relative;
  overflow: hidden;
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
  font-size: 40px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 24px;
`;
