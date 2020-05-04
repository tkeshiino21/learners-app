import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Button, Wrap, Text } from '../atoms';

const FriendsProfile = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Aban Badpista
        </Heading>
        <Text>会計士</Text>
        <section>
          <Wrap mt="32px">
            <Text>年齢：32才</Text>
            <Text>性別：男</Text>
            <Text>趣味：ガーデニング</Text>
            <Text>出身：アメリカ</Text>
            <Text>大学：南カルフォルニア大学</Text>
          </Wrap>
          <Button className="primary large">follow</Button>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default FriendsProfile;
