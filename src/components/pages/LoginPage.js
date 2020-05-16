import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import LoginImage from '../../login_illus.jpg';

import Footer from '../common/Footer';

const LoginPage = () => {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <div className='spacer-sm'></div>
      <div className='spacer-sm'></div>
      <div
        className='uk-card uk-card-default'
        style={{ margin: 'auto', width: '80%', padding: '30px' }}
      >
        <div className='row'>
          <div className='col-md'>
            <img src={LoginImage} alt='' srcset='' height='400' width='400' />
          </div>
          <div className='col-md'>
            <h2 style={{ fontWeight: 'bold' }}>Login</h2>
            <div className='spacer-xsm'></div>
            <input
              type='email'
              placeholder='Email ID'
              className='search-input'
              style={{ backgroundColor: '#fafafa' }}
            />
            <div className='spacer-xsm'></div>
            <input
              type='password'
              placeholder='Password'
              className='search-input'
              style={{ backgroundColor: '#fafafa' }}
            />
            <div className='spacer-sm'></div>
            <button className='uk-button main-btn'>Login</button>
            <div className='spacer-xsm'></div>
            <p>
              Don't have an account?{' '}
              <Link
                to='/register'
                className='text-btn'
                style={{ textDecoration: 'none' }}
              >
                Register here
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='spacer-sm'></div>
      <Footer />
    </div>
  );
};

export default LoginPage;
