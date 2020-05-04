import React, { useState } from 'react';
import styled from '@emotion/styled';
import PageLayout from '../../organisms/PageLayout';
import ds from '../../../theme/theme';
import { Heading, Button, Wrap, Paper, Box, Text } from '../../atoms';
import QuotesCreate from '../../organisms/QuotesCreate';
import QuotesEdit from '../../organisms/QuotesEdit';

const BlackBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ds.color('dark', '1')};
  height: 274px;
`;

const QuoteHeading = styled.h3`
  line-height: 2;
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Quote = () => {
  const [create, setCreate] = useState(false);
  const setCreateHandler = () => {
    return setCreate(!create);
  };
  const [edit, setEdit] = useState(false);
  const setEditHandler = () => {
    return setEdit(!edit);
  };

  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Quotes
        </Heading>
        <Text>心を動かす名言を閲覧＆投稿できます。</Text>
        <div
          style={{
            paddingBottom: '32px',
            borderBottom: `1px solid ${ds.color('light', '4')}`,
            width: '100%',
          }}
        >
          <Button className="primary" onClick={setCreateHandler}>
            投稿
          </Button>
          {create && <QuotesCreate onClick={setCreateHandler} />}

          <Button className="outlined" ml="24px" onClick={setEditHandler}>
            編集
          </Button>
          {edit && <QuotesEdit onClick={setEditHandler} />}
        </div>
        <section>
          <Wrap mt="32px">
            <Paper className="shadow">
              <BlackBoard>
                <Box>
                  <article>
                    <QuoteHeading color="white">
                      好かれようとしているだけなら
                      <br />
                      いつでも何でも妥協する用意があり
                      <br />
                      何も達成しないだろう
                    </QuoteHeading>
                  </article>
                </Box>
              </BlackBoard>
              <Wrap m="24px">
                <Heading className="h4">By Margaret Thatcher</Heading>
                <Text>投稿者：Adbav Bapista</Text>
              </Wrap>
            </Paper>
          </Wrap>
          <Wrap mt="64px">
            <Paper className="shadow">
              <BlackBoard>
                <Box>
                  <article>
                    <QuoteHeading color="white">
                      人の一生は、最終的にその人の品格に左右され、
                      <br />
                      品格は自分をどう形成するかにかかっている。
                    </QuoteHeading>
                  </article>
                </Box>
              </BlackBoard>
              <Wrap m="24px">
                <Heading className="h4">By Margaret Thatcher</Heading>
                <Text>投稿者：Adbav Bapista</Text>
              </Wrap>
            </Paper>
          </Wrap>
          <Wrap mt="64px">
            <Paper className="shadow">
              <BlackBoard>
                <Box>
                  <article>
                    <QuoteHeading color="white">
                      多数に追随するな。自分自身で決断せよ。
                      <br />
                      そして人々をも納得させ、リードしていけ。
                    </QuoteHeading>
                  </article>
                </Box>
              </BlackBoard>
              <Wrap m="24px">
                <Heading className="h4">By Margaret Thatcher</Heading>
                <Text>投稿者：Adbav Bapista</Text>
              </Wrap>
            </Paper>
          </Wrap>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default Quote;
