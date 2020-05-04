import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Wrap } from '../atoms';
import Navigation from '../molecules/Navigation';
import MoreNavigation from '../molecules/MoreNavigation';
import LogCreate from './LogCreate';

const StyledSidebar = styled.div`
  display: flex;
  flex-basis: 380px;
  min-width: 380px;
  height: 90vh;
`;

const StyledSide = styled.div`
  position: fixed;
  min-width: 380px;
  height: 100vh;
`;

const SidebarNav = styled.ul`
  position: fixed;
  padding-left: 0;
  margin-bottom: 0;
  > a {
    display: block;
    padding: 0.5em 1.5em 0.5em 1.5em;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    outline: 0;
    border: 0;
    @include vendor('transition', 'none');

    &.span {
      position: relative;
      display: block;
      font-size: 0.8em;
    }

    &::before {
      position: absolute;
      left: 0;
      color: #41484c;
      text-align: center;
      width: 1.25em;
      line-height: 1.75em;
    }
  }
`;

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

const SidebarToggle = styled.nav`
  display: block;
  height: 2.25em;
  left: 0;
  position: fixed;
  top: 0;
  width: 3.25em;

  &.toggle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 0;
    border: 0;
    ::before {
      font-family: FontAwesome;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      content: '\f0c9';
      color: #fff;
      font-size: 18px;
      line-height: 2.25em;
      background: rgba(128, 136, 144, 0.5);
      border-radius: 0.35em;
      text-align: center;
      position: absolute;
      left: 0.5em;
      top: 0.5em;
      display: block;
      width: 3.25em;
      height: 2.25em;
      line-height: 2.25em;
    }
  }
`;

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    return setShowMore(!showMore);
  };
  const [logCreate, setLogCreate] = useState(false);
  const logCreateHandler = () => {
    return setLogCreate(!logCreate);
  };

  return (
    <StyledSidebar>
      <StyledSide>
        <Wrap mt="48px" ml="120px">
          <SidebarNav>
            <nav>
              <SidebarToggle />
              <Navigation />
              <List onClick={showMoreHandler}>Show More</List>
              {showMore && <MoreNavigation onClick={showMoreHandler} />}
            </nav>
            <div>
              <Button mt="24px" onClick={logCreateHandler}>
                Create Log
              </Button>
              {logCreate && <LogCreate onClick={logCreateHandler} />}
            </div>
          </SidebarNav>
        </Wrap>
      </StyledSide>
    </StyledSidebar>
  );
};

export default Sidebar;
