import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
    title: <>Digital Twin</>,
    description: (
      <>
        Visualize IoT time series data aligned to your 3D digital twin to 
        improve decision-making and increase the effectiveness of IoT analytics.
      </>
    ),
    url: '/examples/digital-twin',
    width: 'col--4',
  },
  {
    title: <>Scene Studio</>,
    description: (
      <>
        Scene Studio<sup>&trade;</sup> gets 3D applications to colleagues and clients. It 
        replaces traditional product documentation that is difficult to 
        maintain and not easily accessible.
      </>
    ),
    url: '/examples/scene-studio',
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

function BusinessInt() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`3D Visual Analytics Application | Vertex Developer Portal`}
      description="Example showing how easy it is to connect external data sources to your 3D digital twin for visual analytics."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>3D Visual Analytics</h1>
              <p>
                Connect external data sources to your 3D digital twin and 
                deliver powerful insights with ease. 
              </p>
            </div>
            <div className={classnames('col', 'col--8', 'col--offset-2')}>
              <img src="/img/examples/visual-analytics@2x.png" alt="" />
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
                Load a Vertex sample scene and download the corresponding CSV 
                files of test data. Simply drag and drop the CSV files onto the 
                app, and watch as your view updates to reflect the values 
                found in the test data. 
              </p>
              <div className={classnames(styles.textCenter)}>
                <Link to={'https://visual-analytics.vertexvis.io/?clientId=08F675C4AACE8C0214362DB5EFD4FACAFA556D463ECA00877CB225157EF58BFA&streamKey=RA00uJtbA41VR9NmZvHnXSW4H8viv9AI5Vbx'} className={classnames('button button--primary')}>
                  Launch App
                </Link>{' '}
                &nbsp;
                <Link
                  to={'https://github.com/Vertexvis/visual-analytics-demo'}
                  className={classnames(
                    'button button--primary button--outline'
                  )}
                >
                  View on Github
                </Link>
              </div>
               <h2 className={classnames(styles.betaCalloutHeading)}>
                Instructions
              </h2>
              <p className={classnames(styles.normalParagraph)}>
                Several data sets are available for you to try different 
                analytics. The CSV files are available on Github or you can 
                <Link 
                  to={'https://visual-analytics.vertexvis.io/super-car-data.zip'}>
                  easily download from here</Link>.
              </p>
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
                  to={
                    'https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true'
                  }
                >
                  Sign Up Now
                </Link>{' '}
                &nbsp;
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'/examples/contact'}
                >
                  Contact an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BusinessInt;
