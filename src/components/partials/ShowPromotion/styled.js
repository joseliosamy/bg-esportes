import styled from 'styled-components';
import { colorSchemma } from '../../../helpers/ui.json';

export const Card = styled.div`
  margin: 0 15px;
  transition: 150ms ease;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    height: 120px;
    border-radius: 10px;
    text-align: center;
    background-color: ${colorSchemma.colorSecondary};
    color: #fff;
    .cardHead {
      font-weight: 700;
      margin-bottom: 5px;
    }
    .content {
      font-size: 0.8rem;
    }
    .price {
      font-weight: bold;
    }
    .button {
      width: 70px;
      margin: 10px auto 0 auto;
      background-color: ${colorSchemma.colorTerciary};
      border: 1px solid ${colorSchemma.colorTerciary};
      border-radius: 5px;
      transition: 150ms;
      &:hover {
        background-color: ${colorSchemma.colorSecondary};
        border: 1px solid ${colorSchemma.colorPrimary};
      }
    }
  }
  &:hover {
    transform: scale(1.2, 1.2);
  }
  @media (max-width: 900px) {
    margin: 15px;
  }
`;
