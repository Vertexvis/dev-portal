import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';

import { ExamplesCta } from '../../components/ExamplesCta';
import styles from '../styles.module.css';

const sampleApps = [
  {
    title: <>NextJS Starter</>,
    description: (
      <>
        We created our full stack, deployable starter application using the
        NextJS framework. Quickly and easily build your own prototype
        application that takes full advantage of the Vertex platform.
      </>
    ),
    url: '/examples/nextjs',
    width: 'col--4',
  },
  {
    title: <>3D Visual Analytics</>,
    description: (
      <>
        Quickly connect external data sources to your 3D digital twin to
        accelerate quality, cost, and supply chain analyses and deliver powerful
        insights with ease.
      </>
    ),
    url: '/examples/3d-visual-analytics',
    width: 'col--4',
  },
  {
    title: <>3D Work Instructions</>,
    description: (
      <>
        Optimize complex process workflows by connecting interactive visual data
        to work instructions. Real-time 3D clarifies processes to improve
        efficiency and quality.
      </>
    ),
    url: '/examples/work-instructions',
    width: 'col--4',
  },
];

function SampleApp({ title, description, url, width }) {
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
  return (
    <Layout
      title={`Digital Twin Application | Vertex Developer Portal`}
      description="Example of how to visualize IoT time series data aligned to your 3D digital twin."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Digital Twin Application</h1>
              <p>
                Build a digital twin by mapping sensor IoT data directly to your
                3D geometry. Set up conditional triggers to help users better
                understand and explore issues, failures, and performance of
                individual assets.
              </p>
            </div>
            <div className={classnames('col', 'col--8', 'col--offset-2')}>
              <img src="/img/examples/digital-twin.png" alt="" />
            </div>
            <div
              className={classnames(
                'col',
                'col--8',
                'col--offset-2',
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
                  to={'https://digital-twin.vertexvis.io/'}
                  className={classnames('button button--primary')}
                >
                  Launch App
                </Link>{' '}
                &nbsp;
                <Link
                  to={'https://github.com/Vertexvis/digital-twin-demo'}
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
                <h2>Check out our other example apps</h2>
                <div className={classnames('row')}>
                  <div className={classnames('col col--10 col--offset-1')}>
                    <div className={classnames('row')}>
                      {sampleApps.map((props, idx) => (
                        <SampleApp key={idx} {...props} />
                      ))}
                    </div>
                  </div>
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
              <ExamplesCta />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TimeSeries;
