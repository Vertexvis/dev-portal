import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const sampleApps = [
  {
    title: <>NextJS Starter Application</>,
    description: (
      <>
        We created our full stack, deployable starter application using the 
        NextJS framework. Start with our template to quickly and easily build 
        your own prototype application that takes full advantage of the Vertex 
        platform. 
      </>
    ),
    imageSrc: 'https://placeimg.com/900/473/tech',
    url: '#',
    width: 'col--4',
  },
  {
    title: <>Time Series Application</>,
    description: (
      <>
        Visualize IoT time series data aligned to your 3D digital twin to 
        improve decision-making and accelerate the adoption of IoT analytics in 
        your organization.
      </>
    ),
    imageSrc: 'https://placeimg.com/900/473/tech',
    url: '#',
    width: 'col--4',
  },
  {
    title: <>Business Intelligence Application</>,
    description: (
      <>
        Connect external data sources to your 3D digital twin to accelerate 
        quality, cost, and supply chain analyses and unlock your organization’s 
        business intelligence.
      </>
    ),
    imageSrc: 'https://placeimg.com/900/473/tech',
    url: '#',
    width: 'col--4',
  },
];

function SampleApp({ title, description, imageSrc, url, width }) {
  return (
	
    <div className={classnames('col', 'feature-card', styles.featureCard)}>
      <div className={classnames('feature-card-content', styles.featureCardContent)}>
        <div className={classnames('header')}>
          <img src={imageSrc} alt="" />
        </div>
         <div className={classnames('content')}>
           <h2>{title}</h2>
           <div className={classnames('intro')}>
             <div>{description}</div>
             <br />
             <div className={classnames('non-button-link')}>Learn more</div>
           </div>
           <Link to={url} className={classnames('target')}></Link>
        </div>
      </div>
    </div>
  );
}

function Samples() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Vertex Developer Portal`}
      description="Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Sample Applications</h1>
              <p>
                With the Vertex platform, non-3D developers can easily 
                integrate 3D CAD data into their application with just a few 
                lines of code. Here are some sample applications to help you 
                get an idea of what you can do with Vertex.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        {sampleApps && sampleApps.length && (
        <div className={classnames(styles.sampleAppsSection)}>
          <div className={classnames(styles.containerLarge)}>
            <div className={classnames('row')}>
              {sampleApps.map((props, idx) => (
	            <SampleApp key={idx} {...props} /> 
	          ))}
            </div>
          </div>
        </div>
        )}
        <div className={classnames(styles.betaCallout, styles.mainGray)}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col','col--4')}>
                <img src="https://placeimg.com/900/473/tech" alt="" />
              </div>
              <div className={classnames('col','col--8','betaCalloutContent')}>
                <span className={classnames('tag-pill')}>Beta</span>
                <h2 className={classnames(styles.betaCalloutHeading)}>Easily Author 3D Content with Scene Studio</h2>
                <p className={classnames(styles.betaCalloutParagraph)}>
                  Quickly author lightweight 3D content that can be integrated 
                  with your Parts Catalog, Work Instructions, Training 
                  Materials, and more. Scene Studio replaces traditional 
                  product documentation methods that are error-prone, costly, 
                  and slow.
                </p>
                <p><Link to={'#'} className={classnames('non-button-link')}>Learn more</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={classnames('cta-block')}>
        <div className={classnames('content')}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col col--12')}>
                <h2>Ready to get started?</h2>
                <p>
                  Get in touch with one of our platform experts or subscribe 
                  for free to the Vertex 3D Visualization Platform through the 
                  AWS Marketplace.
                </p>
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'/contact'}
                >
                  Contact a Expert
                </Link> &nbsp; 
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true'}
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Samples;
