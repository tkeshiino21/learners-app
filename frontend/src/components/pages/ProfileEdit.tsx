import React from 'react';
import PageLayout from '../organisms/PageLayout';
import { Heading, Button, Wrap, Input, Label } from '../atoms';

const ProfileEdit = () => {
  return (
    <PageLayout>
      <Wrap ml="48px" mt="24px" mr="48px" style={{ minHeight: '72vh' }}>
        <Heading
          className="h1"
          proximity="0px"
          style={{ fontFamily: 'sans-serif' }}
        >
          Profile
        </Heading>
        <section>
          <form>
            <Wrap mt="32px">
              <Label style={{ display: 'block' }}>Label</Label>
              <Input style={{ height: '32px', width: '300px' }} />
            </Wrap>
            <Wrap mt="32px">
              <Label style={{ display: 'block' }}>Label</Label>
              <Input style={{ height: '32px', width: '300px' }} />
            </Wrap>
            <Wrap mt="32px">
              <Label style={{ display: 'block' }}>Label</Label>
              <Input style={{ height: '32px', width: '300px' }} />
            </Wrap>
            <Wrap mt="32px">
              <Label style={{ display: 'block' }}>Label</Label>
              <Input style={{ height: '32px', width: '300px' }} />
            </Wrap>
            <Wrap mt="32px">
              <Label style={{ display: 'block' }}>Label</Label>
              <Input style={{ height: '32px', width: '300px' }} />
            </Wrap>
            <Wrap mt="48px">
              <Button>Edit</Button>
            </Wrap>
          </form>
        </section>
      </Wrap>
    </PageLayout>
  );
};

export default ProfileEdit;
