import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import { Wrap } from '../../atoms/Layout';
import { Heading, Text } from '../../atoms';

const About = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading className="h1" style={{ fontFamily: 'sans-serif' }}>
          About
        </Heading>
        <Text className="content">
          コンセプトは『意識の高いtwitter』。
          <br />
          自分の目標や現在学んでいることを宣言し、交流するSNSです。
          <br />
          今日成長したことなどをつぶやきましょう。
        </Text>
      </Wrap>
    </PageLayout>
  );
};

export default About;
