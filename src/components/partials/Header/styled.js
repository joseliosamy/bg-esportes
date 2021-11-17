import styled from 'styled-components';
import ui from '../../../helpers/ui.json';

const { colorSchemma } = ui;

export const HeaderArea = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d1d1d11f;
  background-color: #fff;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: ${colorSchemma.colorSecondary};
    a {
      font-size: 0.8rem;
      margin: 0 25px;
      color: #fff;
      &:hover {
        color: ${colorSchemma.textHeaderOne};
      }
    }
  }
  nav {
    width: 80%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      height: 100%;
      display: flex;
      align-items: center;
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 50px;
        }
        span {
          margin-left: 5px;
          color: #00000099;
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
      ul {
        height: 100%;
        display: flex;
        li {
          display: flex;
          align-items: center;
          margin-left: 20px;
          a {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            color: #00000099;
            font-weight: 600;
            transition: 180ms;
            position: relative;
            ::after {
              content: '';
              width: 0;
              height: 1px;
              display: flex;
              justify-content: center;
              background-color: ${colorSchemma.textHeaderOne};
              position: absolute;
              bottom: 0;
              transition: 100ms ease-out;
            }
            &:hover {
              color: ${colorSchemma.textHeaderOne};
              ::after {
                width: 100%;
              }
            }
            &:focus {
              color: #23163f;
              ::after {
                height: 3px;
                width: 100%;
                background-color: #23163f;
              }
            }
          }
        }
      }
    }
    & > a {
      padding: 12px 22px;
      border: 1px solid #bbb;
      border-radius: 15px;
      color: #fff;
      background-color: ${colorSchemma.colorSecondary};
      font-weight: 600;
      font-size: 0.9rem;
      transition: 180ms;
      &:hover {
        color: ${colorSchemma.textHeaderOne};
        border-color: ${colorSchemma.textHeaderOne};
        background-color: #fff;
      }
    }
  }
`;
