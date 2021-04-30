import React from 'react';
import classnames from 'classnames';
import Accordion from '../components/VertexAccordion';
import SearchButton from '../theme/SearchBar';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const supportCards = [
  {
    title: <>Vertex community support</>,
    icon: (
      <>
        <svg
          height="26"
          viewBox="0 0 29 26"
          width="29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m4.72853711 19.9929167c.18590693-.4575035.48950523-.8577012.88-1.16.41273419-.2954978.91293111-.4434434 1.42-.42.45358523-.0148956.90067782.1108491 1.28.36.39700669-.548372.84573085-1.0573726 1.34-1.52.2798081-.1891292.54703719-.3962318.79999999-.62-.46217712-.4764124-.8650971-1.0069237-1.19999999-1.58-.93476866.9890985-2.41823341 1.2250612-3.61375989.5748114s-1.80357714-2.0237928-1.48122772-3.3459876c.32234943-1.3221949 1.49433472-2.2617674 2.85498761-2.28882385.341801.01346075.67931418.08096335 1 .20000005.05035403-.68426541.19852741-1.35778076.44-2.00000005-.46692746-.14000779-.95259076-.20746102-1.44-.2-2.25445004-.01271412-4.23623502 1.4907122-4.83141198 3.66521695-.59517695 2.1745048.34473168 4.4776188 2.29141198 5.6147831-.9845393.77276-1.68736654 1.8480857-2 3.06-.28115241 1.0851647-.43551674 2.1992726-.46 3.32-.02773718.6182246.20152344 1.2203792.63339462 1.6636154.43187119.4432363 1.02786892.6880573 1.64660538.6763846h1.82c.044048-.6704909.12416395-1.3381238.24-2h-2l-.34-.26c.00257649-1.2808609.24685087-2.5497307.72-3.74zm20.23999999 6.8c-.0350031-2.3673947-.616817-4.6946504-1.7-6.8-.6382044-1.1767986-1.5766865-2.163585-2.72-2.86-.2-.12-.44-.22-.64-.32 2.5584042-1.7164837 3.6937748-4.903888 2.7966565-7.85124732-.8971182-2.94735931-3.6157884-4.96166938-6.6966565-4.96166938s-5.7995382 2.01431007-6.69665649 4.96166938c-.89711825 2.94735932.23825231 6.13476362 2.79665649 7.85124732-.2 0-.44.2-.64.32-1.65534962 1.0730215-2.88024327 2.6944126-3.45999999 4.58-.54085321 1.6691947-.84383099 3.4062673-.9 5.16v.14c.00984479 1.6108125 1.29005149 2.9263353 2.89999999 2.98h12c1.6490751 0 2.9890062-1.3309616 3-2.98v-.14zm-13.96-15.8c0-2.7614238 2.2385763-5.00000005 5-5.00000005 2.7614238 0 5 2.23857625 5 5.00000005 0 2.7614237-2.2385762 5-5 5-1.3260824 0-2.597852-.5267843-3.5355339-1.4644661-.9376819-.9376819-1.4644661-2.2094515-1.4644661-3.5355339zm11 17h-12c-.5445676.0001089-.98910865-.4355413-.99999999-.98.01614206-2.0813326.501519-4.1322211 1.41999999-6 .4686416-.8702448 1.1585069-1.601502 2-2.12 1.0830146-.6354429 2.3252372-.9477335 3.58-.9 1.2239685-.0446604 2.4361095.25318 3.5.86 1.2807305.8156929 2.2249766 2.0652216 2.66 3.52.4901608 1.4859664.7596967 3.0357974.8 4.6.011329.544761-.4155525.9983226-.96 1.02zm8-4.34c-.0114801-1.5072922-.3031023-2.9993123-.86-4.4-.3299194-.7787279-.8447987-1.4652336-1.5-2 1.9099996-1.1736171 2.8054033-3.475058 2.1907753-5.6309122-.614628-2.1558543-2.5890406-3.63911861-4.8307753-3.62913841-.5174306.00352431-1.030833.09134314-1.52.26005056.2414726.64221929.389646 1.31573464.44 2.00000005.3423476-.1481948.7077166-.236154 1.08-.26000005 1.3652225-.00084212 2.5588489.92019355 2.9042497 2.24100065s-.2445392 2.7082585-1.4354014 3.3758514-2.6822936.4469504-3.6288483-.536852c-.3349029.5730763-.7378229 1.1035876-1.2 1.58.2559873.2286595.5302334.4360163.82.62.5092875.4478216.9595653.9585844 1.34 1.52.3813403-.2785298.8489364-.4131408 1.32-.38.5008948-.0236445.994837.1245382 1.4.42.5955781.5245767 1.0088383 1.2250176 1.18 2 .201822.9534084.3023798 1.9254671.3 2.9l-.26.26h-2c.12.7.2 1.36.26 2h1.82c1.2214353-.0326761 2.1913466-1.0381805 2.18-2.26z"
            fill="#05abe2"
            fillRule="evenodd"
            transform="translate(-2 -4)"
          />
        </svg>
      </>
    ),
    description: (
      <>
        Ask questions and find answers from Vertex engineers and other
        developers.
      </>
    ),
    callout: false,
    cta_links: [
      {
        text: <>Check it out</>,
        url: '#',
      },
    ],
    classes: 'col col--4',
  },
  {
    title: <>Ask a Platform Specialist</>,
    icon: (
      <>
        <svg
          height="26"
          viewBox="0 0 26 26"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 22c-.4884342-.0108959-.9160056.3260762-1.0195685.8035292-.1035628.4774531.1459689.9612935.5950224 1.153745s.9715115.0394638 1.2458307-.3648079c.2743193-.4042717.2234567-.946287-.1212846-1.2924663-.1805607-.1942767-.4347923-.3032331-.7-.3zm0-19c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-3.4478144-1.3696389-6.75441524-3.8076118-9.19238816-2.437973-2.43797292-5.7445738-3.80761184-9.1923882-3.80761184zm7.78 20.78c-3.7098253 3.7115666-9.5248316 4.2857438-13.88890341 1.3713985-4.36407176-2.9143452-6.06180366-8.5055601-4.0549628-13.3543868 2.00684087-4.84882672 7.15934411-7.60485436 12.30654201-6.58265867 5.147198 1.02219569 8.8555826 5.53793057 8.8573614 10.78564697.007567 2.9190658-1.1517356 5.7201137-3.2200372 7.78zm-2.2-12.42c-.5533594-2.16222518-2.3670149-3.76996346-4.58-4.06-.3327074-.02888921-.6672926-.02888921-1 0-1.4643966-.02428719-2.8871069.48788852-4 1.44-1.0694082.90810185-1.6900848 2.23708-1.7 3.64 0 .5522847.4477153 1 1 1s1-.4477153 1-1c.006714-.8234452.3807636-1.6008816 1.02-2.12.7335932-.66679033 1.6886567-1.03741197 2.68-1.04h.7c1.4001138.17224812 2.5554643 1.1772448 2.92 2.54.0091758.1798831.0091758.3601169 0 .54-.0488576 1.1721981-.76362 2.213265-1.84 2.68-.7849174.3658939-1.4707314.9145451-2 1.6-.5098759.7036294-.7830144 1.5510589-.78 2.42 0 .5522847.4477153 1 1 1s1-.4477153 1-1c.0013757-.4418989.1490647-.8709003.42-1.22.3387041-.4245986.76958-.7665635 1.26-1 1.7806539-.7860066 2.9433347-2.5339295 2.98-4.48.0288239-.3126704.0288239-.6273296 0-.94z"
            fill="#05abe2"
            fillRule="evenodd"
            transform="translate(-3 -3)"
          />
        </svg>
      </>
    ),
    description: (
      <>
        For personalized support, in-depth information, and documentation
        requests.
      </>
    ),
    callout: false,
    cta_links: [
      {
        text: <>Contact us</>,
        url: '#',
      },
    ],
    classes: 'col col--4',
  },
  {
    title: <>Share your feedback</>,
    icon: (
      <>
        <svg
          height="26"
          viewBox="0 0 28 26"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m23 16h-14c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h14c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1zm0-6h-14c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h14c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1zm4-6h-22c-1.65685425 0-3 1.34314575-3 3v14c0 1.6568542 1.34314575 3 3 3h11.58l5.72 5.7c.2747333.2988361.7102612.3875547 1.08.22.3734255-.1534036.6179849-.5162981.62-.92v-5h3c1.6568542 0 3-1.3431458 3-3v-14c0-1.65685425-1.3431458-3-3-3zm1 17c0 .5522847-.4477153 1-1 1h-4c-.5478169.0106402-.9893598.4521831-1 1v3.58l-4.3-4.28c-.1805607-.1942767-.4347923-.3032331-.7-.3h-12c-.55228475 0-1-.4477153-1-1v-14c0-.55228475.44771525-1 1-1h22c.5522847 0 1 .44771525 1 1z"
            fill="#05abe2"
            fillRule="evenodd"
            transform="translate(-2 -4)"
          />
        </svg>
      </>
    ),
    description: (
      <>We’d love to learn more about your experience using our platform!</>
    ),
    callout: false,
    cta_links: [
      {
        text: <>COMING SOON</>,
        url: '#',
        disabled: true,
      },
    ],
    classes: 'col col--4',
  },
];
function SupportCard({
  title,
  description,
  icon,
  callout,
  cta_links,
  classes,
}) {
  return (
    <div
      className={classnames(
        'gs-guide',
        classes,
        styles.gsGuide,
        styles.textLeft
      )}
    >
      <div
        className={classnames(
          'gs-guide-content',
          styles.cardContent,
          styles.gsGuideContent
        )}
      >
        {icon}
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={classnames(styles.cardLinks)}>
          {callout.length &&
            callout.map((link, index) => (
              <div key={index} className={classnames(styles.callOutCardLink)}>
                <p>
                  <Link
                    className={classnames(
                      'button button--outline button--primary'
                    )}
                    to={link.url}
                  >
                    {link.text}
                  </Link>
                </p>
              </div>
            ))}
          {cta_links.length &&
            cta_links.map((link, index) => (
              <p key={index}>
                {link.disabled ? (
                  <span className={classnames('disabled')}>Coming Soon</span>
                ) : (
                  <Link
                    className={classnames('sdk-link non-button-link')}
                    to={link.url}
                  >
                    {link.text}
                  </Link>
                )}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

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
    question: <>What are the supported file types?</>,
    answer: (
      <>
        <p>
          NEED
        </p>
      </>
    ),
  },
  {
    question: <>How do I submit a feature request or report a bug?</>,
    answer: (
      <>
        <p>
          The best way to do this is to email <Link to={'mailto:support@vertexvis.com'}>support@vertexvis.com</Link>
        </p>
      </>
    ),
  },
  {
    question: <>What type of devices are supported?</>,
    answer: (
      <>
        <p>
          Vertex will work on any device using any of these browsers:
        </p>
        <ul>
          <li>Google Chrome</li>
          <li>Microsoft Edge</li>
          <li>Mozilla Firefox (desktop)</li>
          <li>Safari</li>
        </ul>
      </>
    ),
  },
  {
    question: (
      <>How do I know my data is safe?</>
    ),
    answer: (
      <>
        <p>
          Please refer to our <Link to={'https://vertexvis.com/security'}>security page</Link>. 
          From here you will be able to download our security overview, request third-party audits and 
          certifications, or watch a short video about our security model. If 
          for some reason you would like more information please reach out 
          through the chat on the security page and we will ensure your 
          questions are answered. Your security is our top priority.
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
      <header className={classnames(styles.LPhero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div
              className={classnames('col', 'col--12', styles.supportCardsIntro)}
            >
              <h1>Vertex Platform Support</h1>
              <p>
                We’re committed to offering you help with your integrations and
                questions about the Vertex platform.
              </p>
              <SearchButton />
            </div>
            {supportCards && supportCards.length && (
              <>
                {supportCards.map((props, idx) => (
                  <SupportCard key={idx} {...props} />
                ))}
              </>
            )}
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
      <div className={classnames(styles.logoCallout, 'logo-callout')}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col col--9')}>
              <h2 className={classnames(styles.logoMark, styles.githubMark)}>
                Be sure to check out our{' '}
                <Link to={'#'}>Vertex Community Discussions</Link> for more
                questions and answers from Vertex engineers and other
                developers.
              </h2>
            </div>
            <div className={classnames('col col--3 button-column')}>
              <p>
                <Link
                  to={'https://aws.amazon.com/marketplace/pp/B08PP264Z1'}
                  className={classnames(
                    'button button--secondary',
                    styles.callOutButton
                  )}
                >
                  Check It Out
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
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
