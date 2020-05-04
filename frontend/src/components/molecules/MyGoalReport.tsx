import React, { FC } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Backdrop, Button, Paper, Wrap } from '../atoms';

const Modal = styled(Paper)`
  position: absolute;
  z-index: 1500;
  top: 50%;
  left: 50%;
  width: 200px;
`;

type MyGoalReport = {
  onClick: () => void;
};

const MyGoalReport: FC<MyGoalReport> = ({ onClick }) => {
  return (
    <>
      <Modal className="shadow">
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
        </Wrap>
      </Modal>
      <Backdrop />
    </>
  );
};

export default MyGoalReport;
