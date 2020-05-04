import styled from '@emotion/styled';

type Image = {
  src: string;
};
export const Image = styled.div<Image>`
  display: inline-block;
  border: 0;

  img {
    display: block;
    width: 100%;
  }

  &.avatar {
    width: 120px;
    height: 120px;

    img {
      width: 128px;
      height: 128px;
    }
  }

  &.container {
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 160px;
    height: 160px;
  }

  &.fit {
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 274px;
  }

  &.featured {
    display: block;
    width: 100%;
    margin: 0 0 2em 0;
  }

  &.left {
    margin: 0 2em 2em 0;
  }

  &.centered {
    display: block;
    margin: 0 0 2em 0;

    img {
      margin: 0 auto;
      width: auto;
    }
  }
`;
