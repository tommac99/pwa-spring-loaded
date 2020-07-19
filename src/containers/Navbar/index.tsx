import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './styles';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/Browse">
        <h4>Browse</h4>
      </Link>
      <Link to="/ProductPage">
        <h4>Product</h4>
      </Link>
    </NavbarContainer>
  );
};
