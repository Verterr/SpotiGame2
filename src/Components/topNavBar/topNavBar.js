import React from 'react';
import './topNavBar.css';

const topNavBar = props => (
  <div className="topNavBar">
      <nav>
          <a href="/">Login</a>
          <a href="/">Top Results</a>
          <a href="/">My account</a>
      </nav>
  </div>
);

export default topNavBar;