import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
    </nav>
  );
};

export default Header;
