import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faAward,
  faUserGraduate,
  faLightbulb,
  faHandHoldingUsd,
  faCheckDouble,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const ImpactSection = () => {
  return (
    <Fragment>
      <div className='spacer-sm'></div>
      <h3 style={{ fontWeight: 'bold' }}>Impact of Edunomics on Economy</h3>
      <div
        className='row'
        style={{ margin: 'auto', width: '90%', marginTop: '20px' }}
      >
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faBook} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Quality Education
            </h6>
            <p style={{ fontSize: '13px' }}>
              Skills with optimum experience will be shared to make a great
              transition to a professional world.
            </p>
          </div>
        </div>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faAward} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Better Talent
            </h6>
            <p style={{ fontSize: '13px' }}>
              Once the availability of Smart and sincere talent is ample, the
              increase in competition will be in favour of industry too .
            </p>
          </div>
        </div>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faUserGraduate} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Productivity at jobs
            </h6>
            <p style={{ fontSize: '13px' }}>
              Talented workforce will enable innovation and productivity led
              mission for quality and good output.
            </p>
          </div>
        </div>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faLightbulb} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Innovation Drive
            </h6>
            <p style={{ fontSize: '13px' }}>
              Further industry will innovate to claim the value available with
              more demand & hence more talented people.
            </p>
          </div>
        </div>
      </div>
      <div className='row' style={{ margin: 'auto', width: '90%' }}>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              size='5x'
              color='#64dd17'
            />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              More Profits
            </h6>
            <p style={{ fontSize: '13px' }}>
              When productivity is more and rejections are less, it will lead to
              more sales and profits.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faCheckDouble} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Need Capacity Enhancement
            </h6>
            <p style={{ fontSize: '13px' }}>
              Invite opportunity for Existing and New industry to come up with
              new facilities.
            </p>
          </div>
        </div>
        <div className='col-sm' style={{ marginTop: '20px' }}>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faHandshake} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>More Jobs</h6>
            <p style={{ fontSize: '13px' }}>
              As consumption, industry and innovation peaks will also lead to
              increasing number of jobs and hence create a circle.
            </p>
          </div>
        </div>
        <div className='col-sm uk-invisible'>
          <div
            className='uk-card uk-card-default uk-card-hover'
            style={{ padding: '30px' }}
          >
            <FontAwesomeIcon icon={faLightbulb} size='5x' color='#64dd17' />
            <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Innovation Drive
            </h6>
            <p style={{ fontSize: '13px' }}>
              Further industry will innovate to claim the value available with
              more demand & hence more talented people.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImpactSection;
