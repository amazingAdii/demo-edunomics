import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../logo.png';

const NavBar = () => {
  return (
    <Fragment>
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top'
        style={{ backgroundColor: '#fff' }}
      >
        <a className='navbar-brand' href='!#'>
          <img src={Logo} alt='' height='200' width='200' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav mr-auto'></div>
          <div className='navbar-nav ml-auto'>
            <Link
              className='nav-item nav-link active'
              to='/'
              style={{ marginLeft: '10px' }}
            >
              Impact
            </Link>
            <Link
              className='nav-item nav-link'
              to='/'
              style={{ marginLeft: '10px' }}
            >
              Opportunities
            </Link>
            <Link
              className='nav-item nav-link'
              to='/'
              style={{ marginLeft: '10px' }}
            >
              Initiatives
            </Link>
            <Link
              className='nav-item nav-link'
              to='/'
              style={{ marginLeft: '10px' }}
            >
              FAQs
            </Link>
            <Link
              className='nav-item nav-link'
              to='/'
              style={{ marginLeft: '10px' }}
            >
              Blog
            </Link>
            <Link to='/login'>
              <button
                className='uk-button main-btn'
                style={{
                  marginLeft: '10px',
                }}
              >
                Try our alpha
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
