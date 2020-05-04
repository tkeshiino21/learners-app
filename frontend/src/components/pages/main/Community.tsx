import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import {
  Heading,
  Wrap,
  Input,
  Flex,
  Text,
  Button,
  StyledLink,
  Image,
} from '../../atoms';
import ds from '../../../theme/theme';
import pic1 from '../../../images/pic1.jpg';

const Community = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Community
        </Heading>
        <Text>共に頑張る仲間を見つけましょう。</Text>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <Flex>
            <Input
              className="outlined"
              style={{
                height: '32px',
                width: '300px',
                borderRight: 'none',
                borderRadius: '4px 0px 0px 4px',
              }}
            />
            <Button
              className="primary"
              style={{
                borderRadius: '0px 4px 4px 0px',
                border: `1px solid ${ds.color('dark', '4')}`,
                height: '36px',
                width: '80px',
              }}
            >
              検索
            </Button>
          </Flex>
        </div>

        <section>
          <Wrap mt="32px">
            <Flex>
              <Image className="left container" src={pic1} />
              <div>
                <StyledLink to="community-detail">
                  <Heading className="h4 underline">肥後橋devチーム</Heading>
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
                <Heading className="h4 underline">
                  公認会計士を目指す人の集い
                </Heading>
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
                <Heading className="h4 underline">
                  走人〜スポーツや筋トレをしている人集合！〜
                </Heading>
                <Text>
                  2019年4月１日 <br /> 新宿もくもく会 <br />
                  @新宿
                </Text>
              </div>
            </Flex>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Community;
