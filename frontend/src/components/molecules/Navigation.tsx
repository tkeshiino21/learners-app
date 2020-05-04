import React, { FC } from 'react';
import styled from '@emotion/styled';
import ds from '../../theme/theme';
import { StyledNavLink } from '../atoms';

const List = styled.li`
  padding-left: 0;
  list-style: none;
  line-height: 3;
  &.a {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
    color: #fff;
    ::before {
      color: #e27689;
    }
  }
`;

type links = {
  name: string;
  link: string;
};

const Navigation: FC = () => {
  const links: links[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Community',
      link: '/community',
    },
    {
      name: 'Events',
      link: '/event',
    },
    {
      name: 'MyGoal',
      link: '/mygoal',
    },
    {
      name: 'Quotes',
      link: '/quote',
    },
    {
      name: 'Books',
      link: '/book',
    },
    {
      name: 'Tips',
      link: '/tips',
    },
    {
      name: 'Profile',
      link: '/profile',
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <List key={link.name}>
            <StyledNavLink
              to={link.link}
              exact
              activeStyle={{
                color: ds.brand('main'),
              }}
            >
              {link.name}
            </StyledNavLink>
          </List>
        );
      })}
    </>
  );
};

export default Navigation;
