import React from 'react';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <h3 id="companyName">PentestPak</h3>
    <h3>Laboratory Environment</h3>
    <button className="clear-btn">Clear Progress</button>
  </div>
);

export default Header;
