import React from 'react';
import styled from '@emotion/styled';
import { Wrap } from '../atoms';
import ds from '../../theme/theme';

const Bubble = styled.div`
  margin-top: 20px;
  max-width: 100%;
  font-size: 16px;
`;

const Message = styled.p`
  color: ${ds.color('dark')}; /*テキストを黒にする*/
  background: 'inherit';
  border: 2px solid ${ds.color('dark', '2')};
  border-radius: 30px 30px 30px 0px; /*左下だけ尖らせて吹き出し感を出す*/
  margin-right: 50px; /*左側の発言だとわかる様に、吹き出し右側に隙間を入れる*/
  padding: 20px;
  &.bms_right {
    float: right; /*吹き出しをbms_messagesに対して右寄せ*/
    line-height: 1.3em;
  }
`;

const Forum = () => {
  return (
    <Wrap mt="48px">
      <Bubble>
        <Message>Hello?</Message>
      </Bubble>
      <Bubble>
        <Message>Can you hear me?</Message>
      </Bubble>
    </Wrap>
  );
};

export default Forum;
