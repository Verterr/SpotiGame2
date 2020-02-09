import React from 'react';
import './topNavBar.css';

const topNavBar = props => (
  <div className="topNavBar">
      <div className="logo">Logo</div>
      <nav>
          <a href="/">Login/Register</a>
          <a href="/">Top Results</a>
          <a href="/">My account</a>
      </nav>
  </div>
);

export default topNavBar;