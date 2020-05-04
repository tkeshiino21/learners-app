import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import { Heading, Button, StyledLink, Text, Wrap, Paper } from '../../atoms';
import pic2 from '../../../images/pic2.png';
import ds from '../../../theme/theme';

const MyGoal = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          MyGoal
        </Heading>
        <Text>目標に向けて学習時間の積み上げをサポートします。</Text>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <Button className="primary">
            <StyledLink to="/about">今日の積み上げ</StyledLink>
          </Button>
          <Button className="outlined" ml="24px">
            <StyledLink to="/signup">ゴール設定</StyledLink>
          </Button>
        </div>
        <Wrap mt="48px" />
        <Paper
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: 'none',
          }}
        >
          <Wrap m="24px">
            <Text proximity="-12px" style={{ textAlign: 'center' }}>
              2021年4月19日までに
            </Text>
            <Heading
              className="h3"
              proximity="0px"
              style={{ textAlign: 'center' }}
            >
              基本情報技術者試験に合格する
            </Heading>
            <Heading className="h6" style={{ textAlign: 'center' }}>
              You stocked 234 hours, hot dog!
            </Heading>
          </Wrap>
        </Paper>
        <section>
          <Wrap mt="48px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
            </Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
            </Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
              <br />
              Apolloを勉強した。。
            </Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>Apolloを勉強した。</Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>Apolloを勉強した。</Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
              <br />
              Apolloを勉強した。
            </Text>
          </Wrap>
          <Wrap mt="32px">
            <Heading className="h6" proximity="-4px">
              2020年4月1日の積み上げ
            </Heading>
            <Text>Apolloを勉強した。</Text>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default MyGoal;
