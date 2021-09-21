import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../styles.module.css';

const sampleApps = [
  {
    title: <>3D Work Instructions</>,
    description: (
      <>
        Optimize complex process workflows by connecting interactive visual data
        to work instructions. Real-time 3D clarifies processes to improve
        efficiency and quality.
      </>
    ),
    imageSrc: '/img/examples/work-instructions-card.png',
    url: '/examples/work-instructions',
    cta: 'Try it Out',
    width: 'col--6',
  },
  {
    title: <>Digital Twin</>,
    description: (
      <>
        Visualize IoT time series data aligned to your 3D digital twin to
        improve decision-making and increase the effectiveness of IoT analytics.
      </>
    ),
    imageSrc: '/img/examples/digital-twin-card.png',
    url: '/examples/digital-twin',
    cta: 'Try it Out',
    width: 'col--6',
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
    imageSrc: '/img/examples/visual analytics-card.png',
    url: '/examples/3d-visual-analytics',
    cta: 'Try it Out',
    width: 'col--6',
  },
  {
    title: <>NextJS Starter</>,
    description: (
      <>
        We created our full stack, deployable starter application using the
        NextJS framework. Quickly and easily build your own prototype
        application that takes full advantage of the Vertex platform.
      </>
    ),
    imageSrc: '/img/examples/starter-card.png',
    url: '/examples/nextjs',
    cta: 'Try it Out',
    width: 'col--6',
  },
];

function SampleApp({ title, description, imageSrc, url, cta, width }) {
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
        <div className={classnames('header')}>
          <img src={imageSrc} alt="" />
        </div>
        <div className={classnames('content')}>
          <h2>{title}</h2>
          <div className={classnames('intro')}>
            <div>{description}</div>
            <br />
            <div className={classnames('non-button-link')}>{cta}</div>
          </div>
          <Link to={url} className={classnames('target')}></Link>
        </div>
      </div>
    </div>
  );
}

function Samples() {
  return (
    <Layout
      title={`Example Applications | Vertex Developer Portal`}
      description="Example applications to help easily integrate 3D CAD data with data sources such as IoT, MES, data warehouses, and data lakes."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>Example Applications</h1>
              <p>
                With the Vertex platform, non-3D developers can easily integrate
                3D CAD data into their application with just a few lines of
                code. Get an idea of what you can do with these examples.
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
                <div className={classnames('col col--8 col--offset-2')}>
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
        <div className={classnames(styles.sectionPadding, styles.mainGray)}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col', 'col--5')}>
                <img src="/img/scene-studio/ss-preview.png" alt="" />
              </div>
              <div
                className={classnames('col', 'col--7', 'betaCalloutContent')}
              >
                <span className={classnames('tag-pill')}>Beta</span>
                <h2 className={classnames(styles.betaCalloutHeading)}>
                  Easily Author 3D Content with Scene Studio&trade;
                </h2>
                <p className={classnames(styles.betaCalloutParagraph)}>
                  Deliver 3D applications to colleagues and clients. Scene
                  Studio&trade; uses 3D visuals to replace traditional product
                  documentation that's difficult to maintain and not easily
                  accessible.
                </p>
                <p>
                  <Link
                    to={'/examples/scene-studio'}
                    className={classnames('non-button-link')}
                  >
                    Try it Out
                  </Link>
                </p>
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
                  Get in touch with a platform expert or subscribe for free to
                  the Vertex 3D Visualization Platform through the AWS
                  Marketplace.
                </p>
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'https://account.vertexvis.com/signup'}
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

export default Samples;
