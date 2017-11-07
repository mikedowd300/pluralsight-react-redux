import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>Pluralsight Administration</h1>
        <h2>About Page</h2>
        <Link to="/" className="btn btn-primary btn-lg"></Link>
      </div>
    );
  }
}

export default AboutPage;
