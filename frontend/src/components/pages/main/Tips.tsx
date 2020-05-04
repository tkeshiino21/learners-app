import React from 'react';
import PageLayout from '../../organisms/PageLayout';
import {
  Heading,
  Wrap,
  Select,
  SelectWrapper,
  Option,
  Text,
} from '../../atoms';
import ds from '../../../theme/theme';
import TipsList from '../../organisms/TipsList';

const Tips = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Tips
        </Heading>
        <Text>
          最新科学のデータに基づいた効率的な学習の方法をお届けします。
        </Text>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <SelectWrapper style={{ width: '380px' }}>
            <Select width="380px">
              <Option>he</Option>
              <Option>has</Option>
              <Option>pen</Option>
            </Select>
          </SelectWrapper>
        </div>
        <section>
          <Wrap mb="-32px" />
          <TipsList />
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Tips;
