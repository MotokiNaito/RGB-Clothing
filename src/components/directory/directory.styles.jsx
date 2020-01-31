import styled from 'styled-components';

import { device } from '../../device';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  margin: 40px 0 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${device.laptop} {
    width: 90%;
    margin: 40px auto 200px;
  }
`;
