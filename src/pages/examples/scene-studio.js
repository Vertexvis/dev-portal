import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

const SSFeatures = [
  {
    icon: (
      <>
        <svg
          height="28"
          viewBox="0 0 26 28"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m28.44 8.1-12-6c-.2768417-.13910511-.6031583-.13910511-.88 0l-12 6c-.34013205.17183734-.55611028.51894521-.56.9v14c.00388972.3810548.21986795.7281627.56.9l12 6c.2768417.1391051.6031583.1391051.88 0l12-6c.340132-.1718373.5561103-.5189452.56-.9v-14c-.0038897-.38105479-.219868-.72816266-.56-.9zm-13.44 19.28-10-5v-11.76l10 5zm1-13.5-9.76-4.88 9.76-4.88 9.76 4.88zm11 8.5-10 5v-11.76l10-5z"
            fill="#616161"
            fillRule="evenodd"
            transform="translate(-3 -2)"
          />
        </svg>
      </>
    ),
    title: <>Build your scene</>,
    description: (
      <>
        Quickly and easily add parts, assemblies and tools to your scene in an
        intuitive UI.
      </>
    ),
    width: 'col--6',
  },
  {
    icon: (
      <>
        <svg
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m25.76 8.82c-2.6069988-1.72376089-5.6369896-2.69916887-8.76-2.82v-3c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v21c-2.7090658-.1033356-5.34068891-.9321932-7.62-2.4-1.99345163-1.1827736-3.26233044-3.285058-3.38-5.6.01295116-1.2437626.42677627-2.4501681 1.18-3.44.55759802-.7674762 1.23252385-1.442402 2-2l1.82 2.44 3-7h-8l2 2.94c-.94691215.67574397-1.77200831 1.5076032-2.44 2.46-.99759715 1.327552-1.54424898 2.9394741-1.56 4.6.12840024 2.9503968 1.71838302 5.6428677 4.24 7.18 2.60699881 1.7237609 5.6369896 2.6991689 8.76 2.82v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3c3.1172279-.1029254 6.1467672-1.0574378 8.76-2.76 2.5388616-1.5487782 4.1313398-4.2680099 4.24-7.24-.1284002-2.9503968-1.718383-5.6428677-4.24-7.18zm-1.14 12.72c-2.273201 1.4889901-4.9052582 2.3387093-7.62 2.46v-16c2.7090658.10333557 5.3406889.93219325 7.62 2.4 1.9934516 1.1827736 3.2623304 3.285058 3.38 5.6-.137219 2.2932368-1.4035823 4.3688736-3.38 5.54z"
            fill="#616161"
            fillRule="evenodd"
            transform="translate(-2 -2)"
          />
        </svg>
      </>
    ),
    title: <>Transform parts</>,
    description: (
      <>
        Select individual parts and perform transformations at the part level
        without having to go back to your CAD program.
      </>
    ),
    width: 'col--6',
  },
  {
    icon: (
      <>
        <svg
          height="26"
          viewBox="0 0 29 26"
          width="29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m17 3c-7.17970175 0-13 5.82029825-13 13h-3l4 6 4-6h-3c-.00216897-5.0950021 3.49476954-9.52469231 8.4511015-10.70529589 4.9563319-1.18060358 10.0747511 1.19689919 12.3697571 5.74574509 2.2950059 4.5488459 1.1658872 10.078387-2.7287575 13.3633214s-9.5354028 3.4654396-13.6321011.4362294c-.4418278-.3313708-1.06862915-.2418278-1.4.2s-.2418278 1.0686292.2 1.4c2.2334068 1.6714699 4.9504094 2.5701168 7.74 2.5600845 7.1797017 0 13-5.8203828 13-13.0000845 0-7.17970175-5.8202983-13-13-13zm-.18 8c-.5522847 0-1 .4477153-1 1v5.88l2.42 2.78c.3645079.4197364 1.0002636.4645079 1.42.1.4197364-.364508.4645079-1.0002636.1-1.42l-2-2.22v-5.12c.0009542-.5296773-.4112761-.9682202-.94-1z"
            fill="#616161"
            fillRule="evenodd"
            transform="translate(-1 -3)"
          />
        </svg>
      </>
    ),
    title: <>View changes instantly</>,
    description: (
      <>
        Make adjustments, transformations, or material overrides and preview
        instantly, and only commit your changes when you have the perfect scene.
      </>
    ),
    width: 'col--6',
  },
  {
    icon: (
      <>
        <svg
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m20.980137 8.00013696c.5522847 0 1-.44771525 1-1s-.4477153-1-1-1c-.5522848 0-1 .44771525-1 1s.4477152 1 1 1zm-14.00000004 16.00000004c-.45552542-.006399-.8577991.2958947-.97838131.7352173-.12058222.4393225.07100934.9046163.4659753 1.1316543s.89346181.1584266 1.21240601-.1668716c.27790264-.2830695.36221213-.7036431.21488739-1.071955-.14732473-.3683118-.49842723-.6147207-.89488739-.628045zm18.00000004-8c.4884341.0108959.9160056-.3260762 1.0195684-.8035293.1035628-.477453-.1459688-.9612935-.5950223-1.153745-.4490536-.1924515-.9715116-.0394637-1.2458308.364808s-.2234567.946287.1212847 1.2924663c.1852266.1995544.4478787.3089927.72.3zm-.0000001-4c.5522848 0 1-.4477153 1-1 0-.5522848-.4477152-1-1-1-.5522847 0-1 .4477152-1 1-.0000537.2687183.1080441.5261508.2999286.7142728.1918845.1881221.4514068.2911015.7200715.2857272zm-17.99999994 8c-.55228475 0-1 .4477152-1 1h.02c0 .5522847.44771525 1 1 1s1-.4477153 1-1c0-.5522848-.44771525-1-1-1zm18.00000004-12.00000004c.5478169-.01064021.9893598-.45218309 1-1 .006399-.45552542-.2958948-.8577991-.7352173-.97838131-.4393226-.12058222-.9046163.07100934-1.1316543.4659753s-.1584267.89346181.1668716 1.21240601c.1852266.19955439.4478787.30899274.72.3zm-10.9799301-5c.0031632-.26520772-.1057932-.51943933-.3000699-.7-.1805607-.19427669-.4347923-.30323309-.7-.30006996h-10.00000004c-.26520772-.00316313-.51943933.10579327-.7.30006996-.19427669.18056067-.30323309.43479228-.30006996.7v10.00000004c-.00316313.2652077.10579327.5194393.30006996.7.18056067.1942767.43479228.3032331.7.3000699h10.00000004c.5478169-.0107101.9893598-.452253 1.0000699-1.0000699zm-2.0000699 9.00000004h-8.00000004v-8.00000004h8.00000004zm17.7 6.3c-.1805607-.1942767-.4347923-.3032331-.7-.30007h-10c-.5478169.0107102-.9893598.4522531-1 1.00007v10c.0106402.5478169.4521831.9893598 1 1h10c.5478169-.0106402.9893598-.4521831 1.0000699-1v-10c.0031632-.2652078-.1057932-.5194394-.3000699-.7zm-1.7 9.7h-8v-8h8zm-10.3-21.70000004c-.2857003-.28011972-.7108712-.36297553-1.0808485-.21063196-.3699772.15234357-.6135315.5105568-.6191515.91063196-.006399.45552543.2958947.85779911.7352173.97838132.4393225.12058221.9046163-.07100934 1.1316543-.4659753.227038-.39496597.1584266-.89346181-.1668716-1.21240602zm-10.70000004 9.70000004c-.45552542-.006399-.8577991.2958947-.97838131.7352173-.12058222.4393225.07100934.9046163.4659753 1.1316543s.89346181.1584266 1.21240601-.1668716c.28011972-.2857003.36297554-.7108712.21063197-1.0808485-.15234357-.3699772-.5105568-.6135315-.91063197-.6191515zm8.00000004 8c-.4884342-.010896-.9160057.3260762-1.0195685.8035292s.1459688.9612935.5950224 1.153745c.4490535.1924515.9715115.0394638 1.2458307-.3648079.2743192-.4042718.2234567-.9462871-.1212846-1.2924663-.1805607-.1942767-.4347923-.3032331-.7-.3zm-4 0c-.5522848 0-1 .4477152-1 1 0 .5522847.4477152 1 1 1 .5522847 0 1-.4477153 1-1 0-.5522848-.4477153-1-1-1z"
            fill="#616161"
            fillRule="evenodd"
            transform="translate(-2 -2)"
          />
        </svg>
      </>
    ),
    title: <>Seamless integration</>,
    description: (
      <>
        Set up your scene so it’s always using the latest geometry for your 3D
        data. No need to worry about your 3D data getting out of date.
      </>
    ),
    width: 'col--6',
  },
];

function SSFeature({ icon, title, description, width }) {
  return (
    <div className={classnames('col', width, styles.sceneStudioFeature)}>
      <div
        className={classnames(
          styles.gsGuideContent,
          styles.cardContent,
          styles.sceneStudioFeatureContent
        )}
      >
        <div className={classnames('content')}>
          {icon}
          <h2>{title}</h2>
          <div className={classnames('intro')}>
            <div className={classnames(styles.sceneStudioFeatureDescription)}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    url: '/examples/nextjs',
    width: 'col--4',
  },
  {
    title: <>3D Visual Analytics</>,
    description: (
      <>
        Connect external data sources to your 3D digital twin to accelerate
        quality, cost, and supply chain analyses and unlock your organization’s
        business intelligence.
      </>
    ),
    url: '/examples/3d-visual-analytics',
    width: 'col--4',
  },
  {
    title: <>Digital Twin</>,
    description: (
      <>
        Visualize IoT time series data aligned to your 3D digital twin to 
        improve decision-making and increase the effectiveness of IoT analytics 
        in your organization.
      </>
    ),
    url: '/examples/digital-twin',
    width: 'col--4',
  },
];

function SampleApp({ title, description, imageSrc, url, width }) {
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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Scene Studio | Vertex Developer Portal`}
      description="Quickly author lightweight 3D content that can be integrated with your
        Parts Catalog, Work Instructions, Training Materials, and more."
    >
      <header className={classnames(styles.LPhero, styles.lightHero)}>
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col')}>
              <h1>
                Scene Studio{' '}
                <span className={classnames('tag-pill')}>Beta</span>
              </h1>
              <p>
                Quickly author lightweight 3D content that can be integrated
                with your Parts Catalog, Work Instructions, Training Materials,
                and more.
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
              {SSFeatures && SSFeatures.length && (
                <div className={classnames('row')}>
                  {SSFeatures.map((props, idx) => (
                    <SSFeature key={idx} {...props} />
                  ))}
                </div>
              )}
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
                  Contact a Expert
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
