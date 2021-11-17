import styled from 'styled-components';

import { colorSchemma } from '../../helpers/ui.json';

export const HomeArea = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    color: ${colorSchemma.textColorOne};
    text-align: center;
    font-weight: 700;
    margin: 25px 0;
  }
  .banner {
    width: 100%;
    margin-bottom: 25px;
    a {
      width: 100%;
      display: flex;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
