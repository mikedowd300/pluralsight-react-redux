import React, { Component } from 'react';
import { Link } from 'react-router';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="/" className="btn btn-primary btn-lg"></Link>
      </div>
    );
  }
}

export default AboutPage;
