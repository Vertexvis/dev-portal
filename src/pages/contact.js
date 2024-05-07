import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import VertexCustomJS from '../components/VertexCustomJS';
import styles from './styles.module.css';

function ContactSpecialist() {
  return (
    <Layout
      title={`Contact a Specialist | Vertex Developer Portal`}
      description="Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Contact a Specialist</h1>
              <p>
                Please complete the form below or email our team at any time at{' '}
                <Link to={'mailto:support@vertex3d.com'}>
                  support@vertex3d.com
                </Link>
                .
              </p>
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
                      formId="415c36a7-dbae-4dfb-bf40-9db22e7875f1"
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
                      We're committed to offering you help with your
                      integrations and questions about the Vertex platform.
                    </p>
                    <p>
                      Our Customer Support team is available Monday through
                      Friday from 7 a.m. - 7 p.m. CST/CDT (excluding major U.S.
                      holidays).
                    </p>
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

export default ContactSpecialist;
