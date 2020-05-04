import React from 'react';
import { request } from 'graphql-request';
import useSWR from 'swr';
import { Wrap, Paper, Image, Heading, Text } from '../atoms';
import pic1 from '../../images/pic1.jpg';

const API =
  'https://api-ap-northeast-1.graphcms.com/v2/ck8l03h9u23ac01z61k2chamq/master';

const TipsList = () => {
  const { data, error } = useSWR(
    `{
      posts {
        title
        lead
      }
    }`,
    (query) => request(API, query),
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return data.posts.map(
    (post: { title: React.ReactNode; lead: React.ReactNode }) => {
      return (
        <Wrap mt="64px">
          <Paper className="shadow">
            <Image className="fit" src={pic1} />
            <Wrap m="24px">
              <Heading className="h4">{post.title}</Heading>
              <Text>{post.lead}</Text>
            </Wrap>
          </Paper>
        </Wrap>
      );
    },
  );
};

export default TipsList;
