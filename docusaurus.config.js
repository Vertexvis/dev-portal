const { resolve } = require('path');

module.exports = {
  title: '3D Visualization Engine',
  tagline:
    "Easily integrate 3D product data into your business applications using Vertex's distributed cloud rendering system.",
  url: 'https://developer.vertex3d.com',
  baseUrl: '/',
  favicon: 'img/favicon-512x512.png',
  organizationName: 'Vertexvis',
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-TTWM3VN',
      },
    ],
    resolve(__dirname, 'vertex-plugin'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Note, these are only created for the production build
        redirects: [
          {
            from: ['/docs/guides', '/docs/guides/getting-started'],
            to: '/docs/guides/render-your-first-scene',
            from: ['/docs/support'],
            to: '/support',
          },
        ],
      },
    ],
  ],
  projectName: 'dev-portal',
  themes: [],
  themeConfig: {
    algolia: {
      appId: 'F6A45IVQLY',
      apiKey: 'd82e0f5853b36e7095e470c130146f24',
      indexName: 'vertexvis_developer',
    },
    colorMode: {
      disableSwitch: true, // Disable for now
    },
    prism: {
      additionalLanguages: ['csharp', 'yaml', 'powershell'],
      theme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/examples/visual-analytics.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Vertex Developers Logo',
        src: 'img/vertex-dev.svg',
      },
      items: [
        {
          to: 'docs/guides/render-your-first-scene',
          activeBasePath: 'docs/guides/render-your-first-scene',
          label: 'Guides',
          position: 'right',
        },
        {
          to: 'examples',
          activeBasePath: 'examples',
          label: 'Examples',
          position: 'right',
        },
        {
          to: 'docs/sdks-and-tools',
          activeBasePath: 'docs/sdks-and-tools',
          label: 'SDKs & Tools',
          position: 'right',
        },
        {
          href: 'https://docs.vertex3d.com/',
          label: 'API Reference',
          position: 'right',
        },
        {
          to: 'support',
          activeBasePath: 'support',
          label: 'Support',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'https://account.vertexvis.com/signin',
          label: 'Sign In',
          className: 'sign-in non-button-link',
          position: 'right',
        },
        {
          to: 'https://account.vertexvis.com/signup',
          className: 'sign-up button button--primary',
          label: 'Sign Up',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Vertex',
        src: 'img/vertex-logo-rev.svg',
        href: 'https://vertex3d.com/',
      },
      links: [
        {
          title: 'Developer',
          items: [
            {
              label: 'Guides',
              to: 'docs/guides/render-your-first-scene',
            },
            {
              label: 'Examples',
              to: 'examples',
            },
            {
              label: 'SDKs & Tools',
              to: 'docs/sdks-and-tools',
            },
            {
              label: 'API Reference',
              to: 'https://docs.vertex3d.com/',
            },
            {
              label: 'Support',
              to: 'support',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Vertex 3D Platform',
              to: 'https://vertex3d.com/products/vertex-3d-platform',
            },
            {
              label: 'Request a Demo',
              to: 'https://vertex3d.com/demo',
            },
            {
              label: 'Webinars & Events',
              to: 'https://vertex3d.com/resources/webinars-events',
            }
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              href: 'https://vertex3d.com/company/about-us',
            },
            {
              label: 'Contact Sales',
              href: 'https://vertex3d.com/company/contact-us',
            },
            {
              label: 'Blog',
              href: 'https://vertex3d.com/resources/blog',
            },
            {
              label: 'Careers',
              href: 'https://vertex3d.com/company/careers',
            },
          ],
        },
      ],
      copyright: `© Copyright ${new Date().getFullYear()} Vertex Software, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Vertexvis/dev-portal/tree/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0',
              path: '',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
