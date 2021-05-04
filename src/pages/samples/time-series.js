import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

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
    url: '/samples/nextjs',
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
    url: '/samples/business-intelligence',
    width: 'col--4',
  },
  {
    title: <>Scene Studio</>,
    description: (
      <>
        Quickly author lightweight 3D content that can be integrated with your
        Parts Catalog, Work Instructions, Training Materials, and more.
      </>
    ),
    url: '/samples/scene-studio',
    width: 'col--4',
  },
];

function SampleApp({ title, description, imageSrc, url, width }) {
  return (
    <div
      className={classnames('col', width, 'feature-card', styles.featureCard)}
    >
      <div
        className={classnames(
          'feature-card-content',
          styles.featureCardContent
        )}
      >
        <div className={classnames('content')}>
          <h2>{title}</h2>
          <div className={classnames('intro')}>
            <div>{description}</div>
          </div>
          <Link to={url} className={classnames('target')}></Link>
        </div>
      </div>
    </div>
  );
}

function TimeSeries() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Time Series Application | Vertex Developer Portal`}
      description="Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Time Series Application</h1>
              <p>
                Visualize IoT time series data aligned to your 3D digital twin.
              </p>
            </div>
            <div className={classnames('col', 'col--10', 'col--offset-1')}>
              {/* Placeholder for demo */}
              <div className={classnames(styles.placeholder)}></div>
              {/* End Placeholder */}
            </div>
            <div
              className={classnames(
                'col',
                'col--10',
                'col--offset-1',
                styles.textLeft
              )}
            >
              <h2 className={classnames(styles.betaCalloutHeading)}>
                What you can do with this application
              </h2>
              <p className={classnames(styles.normalParagraph)}>
                Build a true digital twin by mapping sensor IoT data directly to
                your 3D geometry. Set up conditional triggers to help users
                better understand and explore issues, failures and performance
                of individual assets.
              </p>
              <div className={classnames(styles.textCenter)}>
                <Link
                  to={
                    'https://time-series.vertexvis.io/?clientId=08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA&streamKey=4Hvcmm-waM5ygmEX8nep_uLgCXRz9V0yJ09G'
                  }
                  className={classnames('button button--primary')}
                >
                  Launch App
                </Link>{' '}
                <Link
                  to={'https://github.com/Vertexvis/time-series-demo'}
                  className={classnames(
                    'button button--primary button--outline'
                  )}
                >
                  View on Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames(styles.mainGray)}>
          {sampleApps && sampleApps.length && (
            <div
              className={classnames(styles.sectionPadding, styles.textCenter)}
            >
              <div className={classnames(styles.containerLarge)}>
                <h2>Check out our other sample apps</h2>
                <div className={classnames('row')}>
                  {sampleApps.map((props, idx) => (
                    <SampleApp key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <div className={classnames('cta-block')}>
        <div className={classnames('content')}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col col--12')}>
                <h2>Ready to get started?</h2>
                <p>
                  Get in touch with one of our platform experts or subscribe for
                  free to the Vertex 3D Visualization Platform through the AWS
                  Marketplace.
                </p>
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'/samples/contact'}
                >
                  Contact a Expert
                </Link>{' '}
                &nbsp;
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={
                    'https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true'
                  }
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

export default TimeSeries;
