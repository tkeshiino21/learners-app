import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Text, Button, Wrap } from '../atoms';

const EventDetail = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          新宿もくもく会
        </Heading>
        <Text>もくもくしましょう！</Text>
        <Button className="primary">参加する</Button>
        <section>
          <Wrap mt="32px">
            <div>
              <Heading className="h3" proximity="0px">
                概要
              </Heading>
              <Text>もくもくしましょう！</Text>
            </div>
            <div>
              <Heading className="h3" proximity="0px">
                持ち物
              </Heading>
              <Text>PC・参考書など</Text>
            </div>
            <div>
              <Heading className="h3" proximity="0px">
                費用
              </Heading>
              <Text>¥500</Text>
            </div>
            <div>
              <Heading className="h3" proximity="0px">
                スケジュール
              </Heading>
              <ul>
                <li>12:30- 開場</li>
                <li>13:00-13:15 軽く自己紹介など</li>
                <li>13:15-18:00 もくもく</li>
                <li>18:00-18:15 学びシェア</li>
                <li>18:15- 随時解散</li>
              </ul>
            </div>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default EventDetail;
