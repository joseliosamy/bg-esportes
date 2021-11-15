import styled from 'styled-components';

export const HomeArea = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    margin-bottom: 15px;
  }

  div {
    width: 100%;
    video {
      margin-bottom: -5px;
      width: 100%;
      height: 100%;
    }
  }
`;
