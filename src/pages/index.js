import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const gettingStarted = [
  {
    title: <>Render your first scene</>,
    icon: (
      <>
        <svg
          height="32"
          viewBox="0 0 16 16"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8 5.37a.5.5 0 0 0 -.5.5.5.5 0 0 0 1 0 .5.5 0 0 0 -.5-.5zm-1.57 4.22a.5.5 0 0 0 -.54-.85.5.5 0 0 0 .54.84zm-1.84 1.17a.5.5 0 1 0 -.54-.84.49.49 0 0 0 -.16.69.5.5 0 0 0 .7.15zm3.41-7.5a.5.5 0 0 0 -.5.5.5.5 0 1 0 1 0 .5.5 0 0 0 -.5-.5zm5.73.8-5.5-2.85a.47.47 0 0 0 -.42 0l-5.54 2.85a.48.48 0 0 0 -.27.44v7a.6.6 0 0 0 .06.23v.06.06a.31.31 0 0 0 .09.07l5.5 2.85a.47.47 0 0 0 .46 0l5.5-2.85a.31.31 0 0 0 .09-.07l.05-.06v-.06a.6.6 0 0 0 .25-.23v-7a.48.48 0 0 0 -.27-.44zm-6.23 9.47-4.5-2.33v-5.79l4.5 2.86zm.5-6.12-4.5-2.87 4.5-2.33 4.5 2.33zm5 3.79-4.5 2.33v-5.26l4.5-2.86zm-1.61-.45a.5.5 0 0 0 .54-.85.5.5 0 0 0 -.54.84zm-1.83-1.17a.5.5 0 1 0 .54-.84.5.5 0 0 0 -.69.15.49.49 0 0 0 .15.69z"
            fill="#00ade4"
          />
        </svg>
      </>
    ),
    description: (
      <>
        Visualize 3D in under 10 minutes. We’ve provided a sample model that’s
        already in the cloud, so you can try out Vertex. Once you’re rendering,
        you’re ready to integrate Vertex into your applications. It’s that
        simple.
      </>
    ),
    callout: [
      {
        text: <>TRY IT OUT</>,
        url: '/docs/guides/render-your-first-scene/',
      },
    ],
    cta_links: false,
    classes: 'col col--4 first',
  },
  {
    title: <>Import data</>,
    icon: (
      <>
        <svg
          height="32"
          viewBox="0 0 16 16"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m7 12a.5.5 0 0 0 1 0v-4.5h3l-3.5-5-3.5 5h3zm6.5-1a.5.5 0 0 0 -.5.5v2.33a.16.16 0 0 1 -.17.17h-10.66a.16.16 0 0 1 -.17-.17v-2.33a.5.5 0 0 0 -1 0v2.33a1.17 1.17 0 0 0 1.17 1.17h10.66a1.17 1.17 0 0 0 1.17-1.17v-2.33a.5.5 0 0 0 -.5-.5z"
            fill="#00ade4"
          />
        </svg>
      </>
    ),
    description: (
      <>
        Import 3D data into the Vertex Parts Library. We provide you two ways to
        do this along with options to include attributes, such as existing part
        and revision IDs or metadata from your PLM system.
      </>
    ),
    callout: false,
    cta_links: [
      {
        text: <>Quickly import data (CLI)</>,
        url: '/docs/guides/import-data',
      },
      {
        text: <>Populate your Parts Library (API)</>,
        url: '/docs/guides/import-data-with-api',
      },
      {
        text: <>Import metadata</>,
        url: '/docs/guides/import-metadata',
      },
    ],
    classes: 'col col--4',
  },
  {
    title: <>Build your first application</>,
    icon: (
      <>
        <svg
          height="29"
          width="29"
          viewBox="0 0 25.38 25.38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#00ade4" transform="translate(-1.81 -1.81)">
            <path d="m24.47 16.31h-5.47a2.72 2.72 0 0 0 -2.69 2.69v5.44a2.72 2.72 0 0 0 2.69 2.75h5.44a2.72 2.72 0 0 0 2.72-2.72v-5.47a2.72 2.72 0 0 0 -2.69-2.69zm.91 8.16a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.53h7.26z" />
            <path d="m10 16.31h-5.47a2.72 2.72 0 0 0 -2.72 2.69v5.44a2.72 2.72 0 0 0 2.72 2.72h5.47a2.72 2.72 0 0 0 2.72-2.72v-5.44a2.72 2.72 0 0 0 -2.72-2.69zm.91 8.16a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.53h7.26z" />
            <path d="m24.47 1.81h-5.47a2.72 2.72 0 0 0 -2.72 2.72v5.47a2.72 2.72 0 0 0 2.72 2.69h5.44a2.72 2.72 0 0 0 2.75-2.69v-5.47a2.72 2.72 0 0 0 -2.72-2.72zm.91 8.19a.91.91 0 0 1 -.91.91h-5.47a.91.91 0 0 1 -.91-.91v-4.56h7.26z" />
            <path d="m10 1.81h-5.47a2.72 2.72 0 0 0 -2.72 2.72v5.47a2.72 2.72 0 0 0 2.72 2.72h5.47a2.72 2.72 0 0 0 2.69-2.72v-5.47a2.72 2.72 0 0 0 -2.69-2.72zm.88 8.19a.91.91 0 0 1 -.91.91h-5.44a.91.91 0 0 1 -.91-.91v-4.56h7.26z" />
          </g>
        </svg>
      </>
    ),
    description: (
      <>
        Deploy a full stack NextJS application using our template as a starting
        point. Add your own functionality to customize the application and take
        full advantage of what Vertex has to offer.
      </>
    ),
    callout: [
      {
        text: <>Build It</>,
        url: '/docs/guides/build-your-first-app',
      },
    ],
    cta_links: false,
    classes: 'col col--4',
  },
];
function GetStarted({ title, description, icon, callout, cta_links, classes }) {
  return (
    <div className={classnames('gs-guide', classes, styles.gsGuide)}>
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
                <Link
                  className={classnames('sdk-link non-button-link')}
                  to={link.url}
                >
                  {link.text}
                </Link>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
const sdks = [
  {
    title: <>Vertex CLI</>,
    logos: [
      {
        source: (
          <>
            <svg viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
              <linearGradient
                id="a"
                gradientTransform="matrix(1 0 0 -1 0 95)"
                gradientUnits="userSpaceOnUse"
                x1="20.45"
                x2="73.86"
                y1="18.49"
                y2="75.76"
              >
                <stop offset=".08" stopColor="#09c" />
                <stop offset=".12" stopColor="#009bc4" />
                <stop offset=".18" stopColor="#00a1ad" />
                <stop offset=".26" stopColor="#0a8" />
                <stop offset=".35" stopColor="#00b754" />
                <stop offset=".45" stopColor="#00c713" />
                <stop offset=".48" stopColor="#0c0" />
                <stop offset=".53" stopColor="#39c100" />
                <stop offset=".58" stopColor="#6db600" />
                <stop offset=".63" stopColor="#9aad00" />
                <stop offset=".69" stopColor="#bea600" />
                <stop offset=".74" stopColor="#dba000" />
                <stop offset=".8" stopColor="#ef9c00" />
                <stop offset=".85" stopColor="#fb9a00" />
                <stop offset=".9" stopColor="#f90" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="34.49"
                x2="87.91"
                xlinkHref="#a"
                y1="5.39"
                y2="62.66"
              />
              <linearGradient
                id="c"
                x1="14.21"
                x2="67.62"
                xlinkHref="#a"
                y1="24.31"
                y2="81.57"
              />
              <linearGradient
                id="d"
                x1="-1.97"
                x2="51.45"
                xlinkHref="#a"
                y1="39.39"
                y2="96.66"
              />
              <path
                d="m72.66 15.58h-50.32a6.88 6.88 0 0 0 -6.87 6.81v50.18a6.86 6.86 0 0 0 6.87 6.85h50.32a6.87 6.87 0 0 0 6.87-6.85v-50.18a6.88 6.88 0 0 0 -6.87-6.81zm2.29 57a2.3 2.3 0 0 1 -2.3 2.28h-50.31a2.3 2.3 0 0 1 -2.34-2.29v-36.34h55zm0-40.91h-54.95v-9.28a2.3 2.3 0 0 1 2.3-2.29h50.36a2.31 2.31 0 0 1 2.34 2.29z"
                fill="url(#a)"
              />
              <path
                d="m47.52 68.12h18.29a2.29 2.29 0 0 0 0-4.57h-18.29a2.29 2.29 0 0 0 0 4.57z"
                fill="url(#b)"
              />
              <path
                d="m27.61 67.45a2.28 2.28 0 0 0 3.19 0l13.1-13.05-13.06-13a2.29 2.29 0 0 0 -3.72 2.6 2.38 2.38 0 0 0 .53.52l9.81 9.81-9.81 9.83a2.29 2.29 0 0 0 -.08 3.23z"
                fill="url(#c)"
              />
              <circle cx="25.92" cy="25.71" fill="url(#d)" r="2.91" />
            </svg>
          </>
        ),
      },
    ],
    url: 'https://github.com/Vertexvis/vertex-cli',
  },
  {
    title: <>Web UI Components</>,
    logos: [
      {
        source: (
          <>
            <svg viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m25.14 79.89-4.98-55.81h54.68l-4.98 55.81-22.39 6.2z"
                fill="#e44d26"
              />
              <path
                d="m47.5 81.35 18.09-5.02 4.26-47.69h-22.35z"
                fill="#f16529"
              />
              <path
                d="m47.5 49.34h-9.06l-.63-7h9.69v-6.85h-.02-17.15l.17 1.84 1.68 18.86h15.32z"
                fill="#ebebeb"
              />
              <path
                d="m47.5 67.12-.03.01-7.63-2.06-.48-5.46h-3.71-3.16l.96 10.75 14.02 3.89h.03z"
                fill="#ebebeb"
              />
              <path d="m25.25 8.91h3.47v3.44h3.19v-3.44h3.48v10.41h-3.48v-3.49h-3.18v3.49h-3.48z" />
              <path d="m40 12.36h-3.1v-3.45h9.6v3.45h-3.06v7h-3.44z" />
              <path d="m48 8.91h3.63l2.23 3.66 2.23-3.66h3.62v10.41h-3.43v-5.16l-2.4 3.7h-.06l-2.39-3.7v5.16h-3.43z" />
              <path d="m61.48 8.91h3.52v7h4.89v3.44h-8.41z" />
              <g fill="#fff">
                <path d="m47.48 49.34v6.85h8.42l-.79 8.88-7.63 2.06v7.12l14.03-3.89.1-1.16 1.61-18.02.17-1.84h-1.85z" />
                <path d="m47.48 35.49v4.25 2.58.02h16.51.02l.14-1.54.31-3.47.16-1.84z" />
              </g>
            </svg>
          </>
        ),
      },
    ],
    url: 'https://github.com/Vertexvis/vertex-web-sdk',
  },
  {
    title: <>React UI Component Bindings</>,
    logos: [
      {
        source: (
          <>
            <svg viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m7.28 47.37c0 6.08 5.93 11.75 15.28 15-1.87 9.4-.33 17 4.79 19.93s13.1.93 20.54-5.57c7.26 6.24 14.59 8.7 19.7 5.74s6.86-11.14 4.94-20.84c9.74-3.22 15.19-8 15.19-14.21 0-5.93-5.94-11.06-15.17-14.24 2.07-10.1.32-17.49-5-20.57-5.14-3-12.55-.38-19.91 6-7.66-6.8-15-8.88-20.33-5.79-5.14 3-6.6 10.69-4.73 20.26-9.06 3.13-15.3 8.38-15.3 14.29z"
                fill="#fff"
              />
              <path
                d="m70.52 36.32c-.76-.26-1.53-.5-2.3-.72.13-.52.24-1 .35-1.57 1.74-8.45.61-15.26-3.28-17.5-3.73-2.15-9.82.09-16 5.45-.61.53-1.2 1.07-1.78 1.63l-1.18-1.09c-6.45-5.73-12.92-8.14-16.8-5.9s-4.83 8.56-3.26 16.57c.15.79.33 1.58.53 2.36-.92.26-1.8.54-2.65.84-7.56 2.63-12.39 6.77-12.39 11s5.24 8.92 13.08 11.61c.64.22 1.28.42 1.93.61-.21.84-.39 1.69-.56 2.55-1.49 7.84-.32 14.12 3.39 16.26s10.27-.06 16.54-5.54c.5-.44 1-.89 1.49-1.38.63.61 1.27 1.2 1.93 1.77 6.07 5.22 12.07 7.33 15.78 5.18s5.08-8.93 3.46-17.1c-.12-.62-.27-1.26-.43-1.91l1.33-.44c8.19-2.71 13.52-7.1 13.52-11.59 0-4.3-5-8.46-12.7-11.12z"
                fill="#53c1de"
              />
              <path
                d="m68.74 56.13-1.2.38a69.88 69.88 0 0 0 -3.62-9 71.27 71.27 0 0 0 3.48-8.92c.73.21 1.44.43 2.12.67 6.62 2.28 10.65 5.64 10.65 8.23 0 2.77-4.36 6.35-11.43 8.69zm-2.93 5.87a26 26 0 0 1 .34 9.43c-.43 2.29-1.28 3.82-2.34 4.43-2.25 1.31-7.07-.39-12.26-4.86-.59-.51-1.19-1.06-1.79-1.63a72.84 72.84 0 0 0 6-7.61 72.38 72.38 0 0 0 9.68-1.49c.15.59.28 1.16.39 1.73zm-29.68 13.59c-2.2.77-4 .8-5 .19-2.25-1.3-3.19-6.32-1.91-13.05.15-.8.33-1.59.52-2.37a73 73 0 0 0 9.63 1.39 75.93 75.93 0 0 0 6.13 7.58c-.44.43-.89.84-1.36 1.25a26 26 0 0 1 -8 5zm-10.3-19.47a25.81 25.81 0 0 1 -8.33-4.43c-1.78-1.52-2.67-3-2.67-4.25 0-2.6 3.88-5.92 10.35-8.17q1.21-.42 2.46-.78a72.05 72.05 0 0 0 3.48 9 73.06 73.06 0 0 0 -3.53 9.15c-.59-.14-1.18-.32-1.76-.52zm3.45-23.52c-1.34-6.86-.45-12 1.8-13.33s7.67.59 13.24 5.53c.36.32.72.65 1.07 1a74.62 74.62 0 0 0 -6.08 7.53 74.52 74.52 0 0 0 -9.54 1.48c-.18-.73-.34-1.46-.49-2.2zm30.82 7.61c-.7-1.2-1.42-2.4-2.17-3.57 2.28.29 4.46.67 6.51 1.14a65.24 65.24 0 0 1 -2.28 6.15c-.66-1.25-1.35-2.49-2.06-3.72zm-12.57-12.21c1.41 1.53 2.82 3.23 4.21 5.08-2.82-.14-5.63-.14-8.45 0 1.39-1.83 2.81-3.53 4.24-5.07zm-12.64 12.23c-.71 1.22-1.38 2.45-2 3.7-.89-2.11-1.65-4.18-2.27-6.18 2-.46 4.21-.83 6.48-1.12q-1.16 1.79-2.21 3.6zm2.25 18.24a62.49 62.49 0 0 1 -6.58-1.06c.63-2 1.4-4.15 2.31-6.3.65 1.24 1.32 2.48 2 3.69s1.49 2.47 2.27 3.67zm10.48 8.66c-1.45-1.56-2.89-3.29-4.3-5.14 1.37 0 2.76.08 4.18.08s2.89 0 4.31-.1a64.47 64.47 0 0 1 -4.19 5.16zm14.56-16.13a63.23 63.23 0 0 1 2.4 6.28 67.22 67.22 0 0 1 -6.66 1.14c.75-1.2 1.49-2.41 2.19-3.64s1.41-2.51 2.07-3.78zm-4.71 2.26c-1.08 1.88-2.23 3.74-3.47 5.53-2.12.15-4.31.23-6.54.23s-4.35-.02-6.46-.21c-1.23-1.8-2.4-3.65-3.49-5.54s-2.11-3.8-3-5.75c.94-2 2-3.88 3-5.76 1.1-1.88 2.26-3.76 3.49-5.52 2.13-.16 4.31-.24 6.51-.24s4.39.08 6.52.24q1.81 2.7 3.44 5.5c1.09 1.88 2.11 3.79 3.08 5.73q-1.44 3-3.07 5.79zm6.29-34.09c2.4 1.38 3.33 7 1.82 14.24-.09.48-.2 1-.32 1.43a71 71 0 0 0 -9.55-1.51 71.11 71.11 0 0 0 -6-7.54c.54-.52 1.08-1 1.64-1.51 5.28-4.59 10.21-6.4 12.45-5.11z"
                fill="#fff"
              />
              <path
                d="m47.5 41.12a6.38 6.38 0 1 1 -6.38 6.38 6.38 6.38 0 0 1 6.38-6.38"
                fill="#53c1de"
              />
            </svg>
          </>
        ),
      },
    ],
    url: 'https://github.com/Vertexvis/vertex-web-sdk/tree/master/packages/viewer-react',
  },
  {
    title: <>Node API Client</>,
    logos: [
      {
        source: (
          <>
            <svg viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m47.6 82.55a5.67 5.67 0 0 1 -2.71-.71l-8.56-5.08c-1.29-.71-.64-1-.26-1.1a15.76 15.76 0 0 0 3.87-1.74.58.58 0 0 1 .64.07l6.57 3.92a.81.81 0 0 0 .77 0l25.69-14.91a.74.74 0 0 0 .39-.71v-29.65a.72.72 0 0 0 -.39-.7l-25.69-14.82a.81.81 0 0 0 -.77 0l-25.7 14.82a.8.8 0 0 0 -.38.7v29.69a.82.82 0 0 0 .38.71l7 4.06c3.8 1.93 6.18-.33 6.18-2.58v-29.3a.79.79 0 0 1 .78-.77h3.28a.78.78 0 0 1 .77.77v29.3c0 5.09-2.76 8-7.59 8-1.49 0-2.64 0-5.93-1.61l-6.74-3.81a5.44 5.44 0 0 1 -2.71-4.71v-29.68a5.42 5.42 0 0 1 2.71-4.71l25.69-14.87a5.76 5.76 0 0 1 5.41 0l25.7 14.87a5.43 5.43 0 0 1 2.7 4.7v29.69a5.45 5.45 0 0 1 -2.7 4.71l-25.7 14.9a6.49 6.49 0 0 1 -2.7.58zm7.92-20.41c-11.27 0-13.59-5.15-13.59-9.53a.78.78 0 0 1 .77-.78h3.35a.66.66 0 0 1 .71.65c.52 3.41 2 5.09 8.82 5.09 5.41 0 7.73-1.23 7.73-4.13 0-1.67-.64-2.89-9.08-3.73-7-.71-11.4-2.26-11.4-7.86 0-5.21 4.38-8.31 11.72-8.31 8.25 0 12.3 2.84 12.82 9a1.11 1.11 0 0 1 -.19.58.81.81 0 0 1 -.52.26h-3.35a.77.77 0 0 1 -.71-.58c-.77-3.54-2.77-4.7-8.05-4.7-5.92 0-6.63 2.06-6.63 3.6 0 1.87.84 2.45 8.82 3.48s11.66 2.51 11.66 8-4.7 8.89-12.88 8.89z"
                fill="#539e43"
              />
            </svg>
          </>
        ),
      },
    ],
    url: 'https://github.com/Vertexvis/vertex-api-client-node',
  },
  {
    title: <>Xamarin UI Components</>,
    logos: [
      {
        source: (
          <>
            <svg viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m32.15 15.21a5.77 5.77 0 0 0 -4.87 2.79l-15.35 26.69a5.81 5.81 0 0 0 0 5.63l15.35 26.68a5.78 5.78 0 0 0 4.87 2.82h30.7a5.78 5.78 0 0 0 4.87-2.82l15.35-26.68a5.81 5.81 0 0 0 0-5.63l-15.35-26.69a5.75 5.75 0 0 0 -4.87-2.81zm.28 15.6h5.42a.71.71 0 0 1 .58.34l9 16a.62.62 0 0 1 .09.26.79.79 0 0 1 .08-.26l9-16a.69.69 0 0 1 .6-.34h5.29a.72.72 0 0 1 .6 1l-8.82 15.69 8.73 15.67a.73.73 0 0 1 -.6 1h-5.25a.7.7 0 0 1 -.6-.37l-9-16a.79.79 0 0 1 -.08-.26.62.62 0 0 1 -.09.26l-9 16a.7.7 0 0 1 -.58.37h-5.24a.72.72 0 0 1 -.6-1l8.76-15.67-8.72-15.68a.72.72 0 0 1 .47-1z"
                fill="#3498db"
              />
            </svg>
          </>
        ),
      },
    ],
    url: 'https://github.com/Vertexvis/xamarin-viewer',
  },
];
function SDK({ title, logos, url }) {
  return (
    <div className={classnames('sdk', styles.jumpDoc)}>
      <div className={classnames(styles.cardContent, 'sdk-card')}>
        {logos.length &&
          logos.map((logo, index) => (
            <span className={classnames(styles.sdkLogo)} key={index}>
              {logo.source}
            </span>
          ))}
        <p>{title}</p>
        <Link className={classnames('sdk-button-link')} to={url}></Link>
      </div>
    </div>
  );
}
const guideCards = [
  {
    title: <>Getting Started</>,
    cta_links: [
      {
        text: <>Render your first scene</>,
        url: '/docs/guides/render-your-first-scene',
      },
      {
        text: <>Import data with CLI</>,
        url: '/docs/guides/import-data',
      },
      {
        text: <>Build your first application</>,
        url: '/docs/guides/build-your-first-app',
      },
    ],
  },
  {
    title: <>API Advanced Steps</>,
    cta_links: [
      {
        text: <>Postman quick start</>,
        url: '/docs/guides/postman-quick-start',
      },
      {
        text: <>Authentication</>,
        url: '/docs/guides/authentication',
      },
      {
        text: <>Import data (API)</>,
        url: '/docs/guides/import-data-with-api',
      },
      {
        text: <>Import metadata</>,
        url: '/docs/guides/import-metadata',
      },
      {
        text: <>Render static scenes</>,
        url: '/docs/guides/render-static-scenes',
      },
    ],
  },

  {
    title: <>Reference</>,
    cta_links: [
      {
        text: <>Install Web UI Components</>,
        url: '/docs/guides/install-sdk',
      },
      {
        text: <>Browser compatibility</>,
        url: '/docs/guides/browser-compatibility',
      },
      {
        text: <>Supported file formats</>,
        url: '/docs/guides/supported-file-formats',
      },
      {
        text: <>Platform architecture</>,
        url: '/docs/guides/platform-architecture',
      },
      {
        text: <>Transformation matrices</>,
        url: '/docs/guides/transformation-matrices',
      },
      {
        text: <>UI Component examples</>,
        url: 'https://github.com/Vertexvis/vertex-web-sdk/tree/master/examples',
      },
      {
        text: <>Glossary</>,
        url: '/docs/guides/glossary',
      },
    ],
  },
];

function GuideCard({ title, cta_links }) {
  return (
    <div className={classnames('col', styles.guideCard)}>
      <div className={classnames(styles.guideCardContent)}>
        <h2>{title}</h2>
        <div className={classnames(styles.cardLinks)}>
          {cta_links.length &&
            cta_links.map((link, index) => (
              <p key={index}>
                <Link
                  className={classnames('gc-link non-button-link')}
                  to={link.url}
                >
                  {link.text}
                </Link>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

const sampleApps = [
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
    width: 'col--6',
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
        <div className={classnames('header')}>
          <img src={imageSrc} alt="" />
        </div>
        <div className={classnames('content')}>
          <h2>{title}</h2>
          <div className={classnames('intro')}>
            <span>{description}</span>
          </div>
          <Link to={url} className={classnames('target')}></Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Vertex Developer Portal`}
      description="Vertex platform APIs and SDKs unlock 3D product data to fuel fast and easy collaboration. Collaborate on complex designs with anyone, anytime, and from any device."
    >
      <header
        className={classnames(
          'hero hero--primary home-hero',
          styles.heroBanner
        )}
      >
        <div className={classnames('container')}>
          <div className={classnames('row')}>
            <div className={classnames('col col--8 col--offset-2')}>
              <div className={classnames('home-hero-content')}>
                <h1>{siteConfig.title}</h1>
                <p className={classnames('lead-in')}>{siteConfig.tagline}</p>
                <img
                  src="/img/tablet-preview.png"
                  alt="Platform Preview"
                  className={classnames('preview-hero')}
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          className="angled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#FFF" points="0,100 100,0 100,100"></polygon>
        </svg>
      </header>
      <main>
        <div className={classnames(styles.gettingStartedSection)}>
          {gettingStarted && gettingStarted.length && (
            <section className={classnames('getting-started')}>
              <div className={classnames('container')}>
                <div className={classnames('row')}>
                  <div className={classnames('col col--12')}>
                    <h2 className={classnames('secondary')}>
                      Start building your application with our Getting Started
                      guides
                    </h2>
                  </div>
                  {gettingStarted.map((props, idx) => (
                    <GetStarted key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
        <div className={classnames(styles.logoCallout, 'logo-callout')}>
          <div className={classnames('container')}>
            <div className={classnames('row')}>
              <div className={classnames('col col--9')}>
                <h2 className={classnames(styles.logoMark, styles.awsMark)}>
                  Ready to add 3D experiences to your applications and
                  workflows? Subscribe to the Vertex 3D Visualization Platform
                  through the AWS Marketplace:{' '}
                  <Link to={'https://aws.amazon.com/marketplace/pp/B08PP264Z1'}>
                    free for the first 100 rendering sessions!
                  </Link>
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
                    Sign Up Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames(styles.sdkLogosSection)}>
          {sdks && sdks.length && (
            <section className={classnames('getting-started-sdks')}>
              <div className={classnames('container')}>
                <div className={classnames('row')}>
                  <div className={classnames('col col--12')}>
                    <h2 className={classnames('secondary')}>
                      SDKs &amp; Tools
                    </h2>
                    <p>
                      The following tools are offered to simplify and accelerate
                      the development of applications leveraging the Vertex
                      platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className={classnames('container', 'sdk-logos')}>
                <div className={classnames('row')}>
                  {sdks.map((props, idx) => (
                    <SDK key={idx} {...props} />
                  ))}
                </div>
              </div>
              <div className={classnames('container')}>
                <div className={classnames('row')}>
                  <div className={classnames('col', styles.sdkFooter)}>
                    <Link
                      className={classnames('non-button-link')}
                      to={'/docs/sdks-and-tools'}
                    >
                      More SDKs &amp; Tools
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
        {guideCards && guideCards.length && (
          <div className={classnames(styles.guideCardSection)}>
            <div className={classnames('container')}>
              <div className={classnames('row')}>
                <div className={classnames('col col--12')}>
                  <h2 className={classnames('secondary')}>Guides</h2>
                </div>
                {guideCards.map((props, idx) => (
                  <GuideCard key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        )}
        {sampleApps && sampleApps.length && (
          <div
            className={classnames(styles.sampleAppsSection, styles.mainGray)}
          >
            <div className={classnames('container')}>
              <div className={classnames('row')}>
                <div
                  className={classnames(
                    'col',
                    'col--12',
                    styles.sampleAppsSectionHeader
                  )}
                >
                  <h2 className={classnames('secondary')}>Examples</h2>
                  <p>
                    We built the following example applications to give you
                    ideas about how you can use Vertex.
                  </p>
                </div>
                {sampleApps.map((props, idx) => (
                  <SampleApp key={idx} {...props} />
                ))}
                <div className={classnames('col', 'col--12')}>
                  <p>
                    <Link
                      to={'/examples'}
                      className={classnames('non-button-link')}
                    >
                      More Examples
                    </Link>
                  </p>
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
                <h2>Build Powerful Apps&nbsp;Fast</h2>
                <p>
                  Ready to add 3D experiences to your applications and
                  workflows? Subscribe for <strong>free</strong> to the Vertex
                  3D Visualization Platform through the AWS Marketplace.
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
                </Link>
                <img
                  src="/img/Powered-By_logo-horiz_RGB_WHT Copy.png"
                  alt="Powered by AWS"
                  className={classnames('logo-aws')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
