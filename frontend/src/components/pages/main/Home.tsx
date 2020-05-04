import React from 'react';
import styled from '@emotion/styled';
import PageLayout from '../../organisms/PageLayout';
import { Wrap, Button, StyledLink, Heading, Text } from '../../atoms';

const CenterContainer = styled.div`
  display: flex;
  height: 90vh;
  margin: auto;
`;

const CenterWrapper = styled.div`
  margin: auto;
`;

const Home = () => {
  return (
    <PageLayout>
      <Wrap style={{ minHeight: '72vh' }}>
        <CenterContainer>
          <CenterWrapper>
            <Heading className="h1 primary">
              Push higher than yesterday!
            </Heading>
            <Text className="content">
              コンセプトは『意識の高いtwitter』。
              <br />
              自分の目標や現在学んでいることを宣言し、交流するSNSです。
              <br />
              今日成長したことなどをつぶやきましょう。
              <br />
            </Text>
            <Button className="primary large">
              <StyledLink to="/signup">Signup</StyledLink>
            </Button>
            <Button ml="24px" className="outlined large">
              <StyledLink to="/about">Show Detail</StyledLink>
            </Button>
          </CenterWrapper>
        </CenterContainer>
      </Wrap>
    </PageLayout>
  );
};

export default Home;
