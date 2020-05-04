import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import {
  Heading,
  Button,
  Flex,
  Wrap,
  Image,
  Text,
  StyledLink,
} from '../../atoms';
import ds from '../../../theme/theme';
import pic1 from '../../../images/pic1.jpg';

const Event = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Event
        </Heading>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <Text>
            LearnesAppに登録されているイベントを一覧から探すことができます。
          </Text>
          <Button className="primary">
            <StyledLink to="/signup">イベント作成</StyledLink>
          </Button>
          <Button ml="24px" className="outlined">
            <StyledLink to="/about">イベント管理</StyledLink>
          </Button>
        </div>
        <section>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <StyledLink to="/event-detail">
                  <Heading className="h4 underline">とあるイベント</Heading>
                </StyledLink>
                <Text>
                  2019年4月１日 <br /> 新宿もくもく会 <br />
                  @新宿
                </Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4 underline">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4 underline">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <Heading className="h4 underline">とあるイベント</Heading>
                <Text>2019年4月１日</Text>
                <Text>新宿もくもく会</Text>
              </div>
            </Flex>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Event;
