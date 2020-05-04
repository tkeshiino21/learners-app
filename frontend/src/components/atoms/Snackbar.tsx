import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadein = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;
const fadeout = keyframes`
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`;

export const Snackbar = styled.button`
  min-width: 250px;
  margin-left: -125px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 24px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  &.show {
    visibility: visible;
    animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
  }
  &.hidden {
    visibility: hidden;
    display: hidden;
  }
`;
