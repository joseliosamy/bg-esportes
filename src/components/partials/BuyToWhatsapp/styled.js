import styled from 'styled-components';
import { colorSchemma } from '../../../helpers/ui.json';

export const BuyToWhatsappArea = styled.div`
  width: 100%;
  a {
    width: 100%;
    height: 45px;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colorSchemma.textColorOne};
    span:first-child {
      font-weight: bold;
    }
    span:last-child {
      padding: 5px 25px;
      border-radius: 7px;
      background-color: #000;
      margin-left: 20px;
      color: #fff;
      transition: 150ms;
      &:hover {
        background-color: ${colorSchemma.colorSecondary};
      }
    }
  }
`;
