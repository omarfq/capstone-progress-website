import React from 'react';
import './header.styles.scss';
import Logo from '../../assets/logo.png';

const resetProgress = () => {
  window.location.reload(false);
};

const Header = () => (
  <div className="header">
    <span>
      <img src={Logo} className="logo" alt="PezCool Logo" />
    </span>
    <h3>Laboratory Environment</h3>
    <button onClick={resetProgress} className="clear-btn">
      Clear Progress
    </button>
  </div>
);

export default Header;
