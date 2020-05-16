import React, { Fragment } from 'react';
import HomePageSearch from '../HomePageSearch';
import AboutSection from '../AboutSection';
import ImpactSection from '../ImpactSection';
import Footer from '../common/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <div className='spacer-sm'></div>
      <HomePageSearch />
      <div className='uk-section' style={{ backgroundColor: '#fafafa' }}>
        <AboutSection />
        <div className='spacer-sm'></div>
        <ImpactSection />
      </div>

      <Footer />
    </Fragment>
  );
};

export default HomePage;
