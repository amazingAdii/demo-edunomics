import React from 'react';

import LoginImage from '../../login_illus.jpg';

import Footer from '../common/Footer';
const RegisterPage = () => {
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
            <img src={LoginImage} alt='' srcset='' height='500' width='500' />
          </div>
          <div className='col-md'>
            <h2 style={{ fontWeight: 'bold' }}>Register</h2>
            <div className='spacer-xsm'></div>
            <input
              type='text'
              placeholder='Full name'
              className='search-input'
              style={{ backgroundColor: '#fafafa' }}
            />
            <div className='spacer-xsm'></div>
            <input
              type='email'
              placeholder='Email ID'
              className='search-input'
              style={{ backgroundColor: '#fafafa' }}
            />
            <div className='spacer-xsm'></div>
            <input
              type='mobile'
              placeholder='Mobile number'
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
            <div className='spacer-xsm'></div>
            <input
              type='date'
              placeholder='Date of Birth'
              className='search-input'
              style={{ backgroundColor: '#fafafa' }}
            />
            <div className='spacer-sm'></div>
            <button className='uk-button main-btn'>Register</button>
          </div>
        </div>
      </div>
      <div className='spacer-sm'></div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
