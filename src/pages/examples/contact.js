import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import VertexCustomJS from '../../components/VertexCustomJS';
import styles from '../styles.module.css';

function ContactExpert() {
  return (
    <Layout
      title={`Contact an Expert | Vertex Developer Portal`}
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
                      onSubmit={() => console.log('submit!')}
                      onReady={() => window['js_selects']()}
                      loading={<div>Loading...</div>}
                    />
                    <div className={classnames(styles.contactLegal)}>
                      <p>
                        By submitting this form, you agree your contact
                        information may be used by us to communicate with you
                        about your registration, related products and services,
                        and offers from select partners. Refer to our{' '}
                        <Link to={'https://vertex3d.com/privacy-policy'}>
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link to={'https://vertex3d.com/terms-of-use'}>
                          Terms of Use
                        </Link>{' '}
                        for additional information.
                      </p>
                    </div>
                  </div>
                  <div className={classnames('col col--5 contact-content')}>
                    <p>
                      One of our platform experts will be happy to answer your
                      questions and get you started with the Vertex Platform.
                    </p>
                    <span>We are here to help you:</span>
                    <ul>
                      <li>Build insightful solutions</li>
                      <li>Connect with helpful resources</li>
                      <li>Simplify how you work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <VertexCustomJS />
    </Layout>
  );
}

export default ContactExpert;
