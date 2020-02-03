import styled from 'styled-components';
import { device } from '../../device';

export const SignInContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
