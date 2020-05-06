import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledNavLink, StyledLink } from '../components/atoms';

export default {
  title: 'Atoms/StyledLink',
  component: StyledLink,
};

export const StyledLinkStories = () => (
  <Router>
    <StyledLink to="/">リンク先へ移動</StyledLink>
    <StyledNavLink to="/">リンク先へ移動</StyledNavLink>
  </Router>
);
