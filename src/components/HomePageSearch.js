import React from 'react';

const HomePageSearch = () => {
  return (
    <div className='uk-section' style={{ backgroundColor: '#fafafa' }}>
      <div className='spacer-sm'></div>
      <h1
        className=''
        style={{ fontWeight: 'bold', color: '#64DD17', marginBottom: '30px' }}
      >
        WELCOME TO THE WORLD OF EDUNOMICS
      </h1>
      <form>
        <input
          className='search-input'
          type='text'
          placeholder='Search here ...'
        />
        <button
          className='uk-button main-btn'
          style={{
            marginLeft: '10px',
          }}
          type='submit'
        >
          Search
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        <button className='uk-button uk-button-default sub-btn'>Career</button>{' '}
        <button
          className='uk-button uk-button-default sub-btn'
          style={{
            marginLeft: '10px',
          }}
        >
          Skill
        </button>
      </p>
    </div>
  );
};

export default HomePageSearch;
