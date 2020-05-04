import React, { FC } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Backdrop, Button, Paper, Wrap, StyledLink } from '../atoms';

const Modal = styled(Paper)`
  position: absolute;
  z-index: 1500;
  top: 50%;
  left: 50%;
  width: 200px;
`;

const List = styled.li`
  padding-left: 12px;
  list-style: none;
  line-height: 3;
  border-bottom: 1px solid #ccc;
  &.a {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
    color: #fff;
    ::before {
      color: #e27689;
    }
  }
`;

type MoreNavigation = {
  onClick: () => void;
};
const MoreNavigation: FC<MoreNavigation> = ({ onClick }) => {
  const Links = [
    {
      name: 'Contact',
      link: '/contact',
    },
    {
      name: 'Pomodolo',
      link: '/pomodolo',
    },
  ];

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
          {Links.map((link) => {
            return (
              <List key={link.name}>
                <StyledLink to={link.link}>{link.name}</StyledLink>
              </List>
            );
          })}
          <List style={{ borderBottom: 'none' }}>
            <a
              href="https://cranky-cori-9304ff.netlify.com/"
              style={{
                textDecoration: 'none',
                borderBottom: '0px',
                color: 'inherit',
              }}
            >
              DevelopersBlog
            </a>
          </List>
        </Wrap>
      </Modal>
      <Backdrop />
    </>
  );
};

export default MoreNavigation;
