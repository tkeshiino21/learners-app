import React from 'react';
import { Heading, Flex, Wrap, Image, Text, StyledLink } from '../atoms';
import pic1 from '../../images/pic1.jpg';

const EventList = () => {
  return (
    <Wrap mt="48px">
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
  );
};

export default EventList;
