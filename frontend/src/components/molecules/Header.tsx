import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Wrap, Flex } from '../atoms';
import ds from '../../theme/theme';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  z-index: 120;
`;

const GutterBottom = styled.div`
  margin-top: 50px;
`;

const Logo = styled.h1`
  color: ${ds.brand('main')};
  font-size: 24px;
  line-height: 40px;
`;

const Header: FC = () => {
  return (
    <>
      <Container>
        <Flex align="center" height="100%" justify="center">
          <Wrap ml="120px">
            <Logo>LeanersApp</Logo>
          </Wrap>
        </Flex>
      </Container>
      <GutterBottom />
    </>
  );
};

export default Header;
