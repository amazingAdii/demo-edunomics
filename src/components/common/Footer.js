import React from 'react';

import Logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      className='uk-section uk-section-secondary'
      style={{ marginBottom: '0px' }}
    >
      <img src={Logo} alt='' height='300' width='300' />
      <div className='spacer-xsm'></div>
      <p>
        <Link className='mr-auto' style={{ textDecoration: 'none' }}>
          Terms of use
        </Link>
        &nbsp; | &nbsp;
        <Link style={{ textDecoration: 'none' }}>Cookie Policy</Link>&nbsp; |
        &nbsp;
        <Link style={{ textDecoration: 'none' }}>Join US</Link>&nbsp; | &nbsp;
        <Link style={{ textDecoration: 'none' }}>Tech</Link>&nbsp; | &nbsp;
        <Link style={{ textDecoration: 'none' }}>Privacy Policy</Link>&nbsp; |
        &nbsp;
      </p>
      <p>Copyright 2020 © | All rights reserved.</p>
    </div>
  );
};

export default Footer;
