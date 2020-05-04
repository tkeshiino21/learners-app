import React from 'react';
import styled from '@emotion/styled';
import { Text, Wrap } from '../atoms';

const List = styled.li`
  padding-left: 12px;
  list-style: none;
  line-height: 3;
  border-bottom: 1px solid #ccc;
  &.a {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
    color: #fff;
    ::before {
      color: #e27689;
    }
  }
`;

const Member = () => {
  return (
    <Wrap mt="48px">
      <Text>4名のメンバーがいます。</Text>
      <section>
        <List>
          <List>へるすまん@HealthCore</List>
          <List>えもた@Emotion</List>
          <List>まるくす@Markus</List>
          <List>アウレリウス@aureLius</List>
        </List>
      </section>
    </Wrap>
  );
};

export default Member;
