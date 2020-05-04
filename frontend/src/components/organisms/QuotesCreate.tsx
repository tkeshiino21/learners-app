import React, { FC } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Backdrop, Button, Paper, Wrap, Input, Label } from '../atoms';

const Modal = styled.div`
  position: fixed;
  z-index: 1500;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
`;

type QuotesCreate = {
  onClick: () => void;
};
const QuotesCreate: FC<QuotesCreate> = ({ onClick }) => {
  return (
    <>
      <Modal className="shadow">
        <Paper>
          <Wrap mt="8px">
            <Button
              style={{
                width: '100%',
                border: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              onClick={onClick}
            >
              <MdClose
                style={{
                  fontSize: '16px',
                }}
              />
            </Button>
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
        </Paper>
      </Modal>
      <Button onClick={onClick}>
        <Backdrop className="darker" />
      </Button>
    </>
  );
};

export default QuotesCreate;
