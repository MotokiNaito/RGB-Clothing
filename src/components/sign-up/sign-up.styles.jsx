import styled from 'styled-components';
import { device } from '../../device';

export const SignUpContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
