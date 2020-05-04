import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Wrap, Heading, Text } from '../atoms';

const Container = styled.div`
  display: block;
  width: 72vw;
  text-align: right;
  margin-top: 64px;
`;

const Footer: FC = () => {
  return (
    <Container>
      <Wrap mr="24px" mt="24px">
        <Heading className="h6" proximity="-12px" color="#999999">
          LearnesApp
        </Heading>
        <Text color="#999999">createdBy: Takeshi Inoue</Text>
      </Wrap>
    </Container>
  );
};

export default Footer;
