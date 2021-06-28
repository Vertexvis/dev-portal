import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../styles.module.css';

const sampleApps = [
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
	    Optimize complex process workflows by connecting interactive visual 
	    data to work instructions. Real-time 3D clarifies processes to improve 
	    efficiency and quality.
	  </>	
    ),
    imageSrc: '/img/examples/work-instructions-card.png',
    url: '/examples/work-instructions',
    cta: 'Try it Out',
	width: 'col--6'
  },
];

function SampleApp({ title, description, url }) {
  return (
    <div className={classnames('col', 'feature-card', styles.featureCard)}>
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

function SceneStudio() {
  return (
    <Layout
      title={`Scene Studio Authoring Tool | Vertex Developer Portal`}
      description="Author lightweight 3D content for quick integration with a parts catalog, work instructions, training materials and other critical workflows."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>
                Scene Studio&trade;{' '}
                <span className={classnames('tag-pill')}>Beta</span>
              </h1>
              <p>
                Quickly author lightweight 3D content that can be integrated
                with your parts catalog, work instructions, training materials,
                and more.
              </p>
            </div>
            <div className={classnames('col', 'col--8', 'col--offset-2')}>
              <img src="/img/scene-studio/scene-studio.png" alt="" />
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
                View a scene and transform parts along the X, Y, and Z axes. 
                You can also display part properties and change part visibility 
                using the BOM. Scene Studio makes it easy to visualize your data 
                in context so teammates can be more efficient, collaborative, 
                and innovative.
              </p>
              <div className={classnames(styles.textCenter)}>
                <Link
                  to={'https://scene-studio.vertexvis.io'}
                  className={classnames('button button--primary')}
                >
                  Launch App
                </Link>{' '}
                &nbsp;
                <Link
                  to={'https://github.com/Vertexvis/work-instructions-demo'}
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

export default SceneStudio;
