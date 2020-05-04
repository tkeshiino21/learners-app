import React, { FC, useState, ChangeEvent } from 'react';
import PageLayout from '../organisms/PageLayout';
import Member from '../organisms/Member';
import EventList from '../organisms/EventList';
import { Heading, Text, Button, Wrap } from '../atoms';
import Tab from '../molecules/Tab';
import Forum from '../organisms/Forum';

const CommunityDetail: FC = () => {
  const [active, setActive] = useState('1');
  const TabHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.value);
  };

  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          公認会計士を目指す人の会
        </Heading>
        <Text>国家資格『公認会計士』の取得に向けて頑張る会です</Text>
        <Button className="primary">参加する</Button>
        <section>
          <Wrap mt="32px">
            <Tab onClick={TabHandler} active={active} />
          </Wrap>
          <Wrap mt="32px">
            {active === '1' && <EventList />}
            {active === '2' && <Member />}
            {active === '3' && <Forum />}
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default CommunityDetail;
