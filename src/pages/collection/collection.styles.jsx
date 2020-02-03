import styled from 'styled-components';
import { device } from '../../device';

export const CollectionPageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media ${device.laptop} {
    grid-template-columns: 2fr 2fr;
  }

  & > div {
    margin-bottom: 30px;
    @media ${device.laptop} {
      width: 100%;
    }
  }
`;
