import React from 'react';
import classnames from 'classnames';
import Accordion from '../components/VertexAccordion';
import SearchButton from '../theme/SearchBar';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const frequentlyAskedQuestions = [
  {
    question: <>What can I do with Vertex’s platform?</>,
    answer: (
      <>
        <p>
          With the Vertex 3D platform, non-3D developers can easily integrate
          their 3D CAD data into an application with just a few lines of code.
          Because all the heavy lifting of rendering takes place server-side,
          developers can build performant applications across all types of
          devices using even complex models.
        </p>
      </>
    ),
  },
  {
    question: <>How do I get started using Vertex’s platform?</>,
    answer: (
      <>
        <p>
          You can render your first scene without even signing up for an
          account. Simply check out{' '}
          <Link to={'/docs/guides/render-your-first-scene'}>our guide</Link> and
          use the sample scene we’ve provided to get started.
        </p>
        <p>
          When you are ready to try the platform out with some of your own 3D
          data, simply{' '}
          <Link
            to={
              'https://aws.amazon.com/marketplace/pp/B08PP264Z1?qid=1614803817665&sr'
            }
          >
            subscribe to the Vertex 3D Visualization Platform
          </Link>{' '}
          through the AWS Marketplace. Your first 100 rendering sessions are
          free.{' '}
        </p>
      </>
    ),
  },
  {
    question: <>What is a stream key?</>,
    answer: (
      <>
        <p>
          Stream keys grant the Vertex Web SDK access to a specific scene. To
          render a scene, you’ll need a stream key. To ensure the security of
          your production data, stream keys expire after 24 hours.
        </p>
      </>
    ),
  },
  {
    question: <>Can an existing stream key expiry time be extended?</>,
    answer: (
      <>
        <p>
          Anyone who has access to your stream keys has access to view your
          product data. To ensure best practices from a security perspective,
          stream keys expire after 24 hours. Customers have the option to
          specify a shorter expiration time if they so desire. The
          recommendation is to generate new stream keys for every viewing
          session.
        </p>
      </>
    ),
  },
  {
    question: <>What is the difference between a “scene” and a “scene view”?</>,
    answer: (
      <>
        <p>
          A <em>scene</em> is a blueprint of what you want a user to view,
          containing a defined camera and scene items (parts or geometry sets)
          that have default transform, material, and visibility states. A{' '}
          <em>scene view</em> is created when a new streaming session is started
          in the Vertex Web SDK. Scene views are used to isolate scene
          modifications such as camera and scene item updates. This allows users
          to view and modify a scene without their changes impacting others
          viewing the same scene.
        </p>
      </>
    ),
  },
  {
    question: (
      <>Do I import part files or assembly files for my geometry into Vertex?</>
    ),
    answer: (
      <>
        <p>
          The answer to this question ultimately depends on your use case. The
          recommended path is to import individual part files into the Vertex
          Parts Library and then create scenes representing your assemblies or
          subassemblies. This method gives you the most flexibility to create
          dynamic scenes that represent your configurations and allows you to
          take advantage of cloning scenes to speed up scene creation.
        </p>
        <p>
          Alternatively, you can import assembly geometry files into the Vertex
          Parts Library; those assemblies will be created as a part with a
          hierarchy of children parts. You can create a scene that references
          that part and children parts.
        </p>
      </>
    ),
  },
  {
    question: (
      <>When I create my scene, my model is all white. How do I avoid this?</>
    ),
    answer: (
      <>
        <p>
          The ColorMaterial is not a required field and, if left in the body as
          is, will cause the part color to be white as the defaults are all set
          to 255. You can use them to modify the default colors if you choose.
          However, if you want to maintain the original part colors, you can
          simply remove those lines from the body.
        </p>
      </>
    ),
  },
];

function Support() {
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
              <h1>Vertex Platform Support</h1>
              <p>
                We’re committed to offering you help with your integrations and
                questions about the Vertex platform.
              </p>
              <SearchButton />
            </div>
          </div>
        </div>
      </header>
      <main>
        {frequentlyAskedQuestions && frequentlyAskedQuestions.length && (
          <div className={classnames(styles.platformFAQSection)}>
            <div className={classnames('container')}>
              <div className={classnames('row')}>
                <div className={classnames('col col--12')}>
                  <h2>Platform FAQs</h2>
                </div>
                <div className={classnames('col col--8 col--offset-2')}>
                  {frequentlyAskedQuestions.map((faq, index) => (
                    <Accordion
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <div className={classnames('cta-block')}>
        <div className={classnames('content')}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col col--12')}>
                <h2>We&apos;re Here to Help</h2>
                <p>
                  Our Customer Support team is available Monday through Friday
                  from 7 a.m. - 7 p.m. CST/CDT (excluding major U.S. holidays).
                </p>
                <Link
                  className={classnames(
                    'button button--primary',
                    styles.getStarted
                  )}
                  to={'/contact'}
                >
                  Contact a Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Support;
