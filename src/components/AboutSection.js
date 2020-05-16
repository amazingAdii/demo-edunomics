import React from 'react';

const AboutSection = () => {
  return (
    <div
      className='uk-card uk-card-default'
      style={{ margin: 'auto', width: '90%', padding: '50px' }}
    >
      <h3 style={{ fontWeight: 'bold' }}>About Edunomics</h3>
      <p>
        We are a bootstrap startup with a vision to impact education and
        economics solving complex problems with simple solutions. Edunomics
        combines tech expertise and business intelligence to catalyze change and
        deliver results. We are employing top talent to provide a uniquely
        matching solution for your unique problem.
      </p>
      <button className='uk-button uk-button-default sub-btn'>Know more</button>
    </div>
  );
};

export default AboutSection;
