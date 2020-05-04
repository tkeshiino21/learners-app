import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;

  &.darker {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
