import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Flex, Button, Wrap, Input, Label, Text } from '../atoms';

const Contact = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="48px" mr="120px" style={{ minHeight: '72vh' }}>
        <Flex width="100%" justify="center">
          <div style={{ width: '500px' }}>
            <Heading
              className="h1"
              proximity="0px"
              style={{ fontFamily: 'sans-serif' }}
            >
              Contact
            </Heading>
            <Text>ご意見、ご感想をお聞かせください。</Text>
            <form>
              <Wrap mt="32px">
                <Label style={{ display: 'block' }}>名前</Label>
                <Input style={{ height: '32px', width: '500px' }} />
              </Wrap>
              <Wrap mt="32px">
                <Label style={{ display: 'block' }}>メールアドレス</Label>
                <Input style={{ height: '32px', width: '500px' }} />
              </Wrap>
              <Wrap mt="32px">
                <Label style={{ display: 'block' }}>ご意見・ご感想</Label>
                <Input style={{ height: '200px', width: '500px' }} />
              </Wrap>
              <Wrap mt="48px">
                <Button className="primary large" style={{ width: '500px' }}>
                  送信する
                </Button>
              </Wrap>
            </form>
          </div>
        </Flex>
      </Wrap>
    </PageLayout>
  );
};

export default Contact;
