
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <IndexLink to="/"><h1>HearMe</h1></IndexLink>
          </div>
          <nav>
            <Link to="/">Blog</Link>
            <span>|</span>
            <Link to="/photo">Photo</Link>
            <span>|</span>
            <Link to="/note">Note</Link>
            <span>|</span>
            <Link to="/chat">Chat</Link>
          </nav>
        </header>
        <div className="page-divider"></div>
      </div>
    )
  }
}

export default Header;

