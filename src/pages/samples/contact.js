import React from 'react';
import classnames from 'classnames';
import HubspotForm from 'react-hubspot-form';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../styles.module.css';

function ContactExpert() {
  return (
    <Layout
      title={`Vertex Developer Portal`}
      description="Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Contact an Expert</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames(styles.contactSpecialist)}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col col--10 col--offset-1')}>
                <div className={classnames('row form-wrapper')}>
                  <div className={classnames('col col--7 contact-form')}>
                    <HubspotForm
                      portalId="8780919"
                      formId="710f874e-9d98-4d9d-9228-f5ef842716d3"
                      onSubmit={() => console.log('Submit!')}
                      onReady={() => console.log('Form ready!')}
                      loading={<div>Loading...</div>}
                    />
                  </div>
                  <div className={classnames('col col--5 contact-content')}>
                    <p>
                      One of our platform experts will be happy to answer your 
                      questions and get you started with the Vertex Platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ContactExpert;
