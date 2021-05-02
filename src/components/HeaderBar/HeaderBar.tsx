import React from 'react';
import './HeaderBar.scss';

import logo from '../../assets/icons svg/logo.svg';

const HeaderBar: React.FC = () => (
  <div className='HeaderBar' data-testid="Header">
    <header className='header-bar'>
        <div className='header-bar-icon'>
          <img alt='logo' src={logo}/>
        </div> 
    </header>
  </div>
);

export default HeaderBar;
