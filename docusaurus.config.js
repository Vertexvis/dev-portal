const { resolve } = require('path');

module.exports = {
  title: '3D Visualization Engine',
  tagline:
    "Easily integrate 3D product data into your business applications using Vertex's distributed cloud rendering system.",
  url: 'https://developer.vertexvis.com',
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
      apiKey: '91f9078180760ed3f03125341bf3e686',
      indexName: 'vertexvis_developer',
    },
    colorMode: {
      disableSwitch: true, // Disable for now
    },
    prism: {
      additionalLanguages: ['csharp', 'yaml', 'powershell'],
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Vertex Developers Logo',
        src: 'img/vertex-devportal-rev.svg',
      },
      items: [
        {
          to: 'docs/guides/render-your-first-scene',
          activeBasePath: 'docs/guides/render-your-first-scene',
          label: 'Guides',
          position: 'right',
        },
        {
          to: 'samples',
          activeBasePath: 'samples',
          label: 'Samples',
          position: 'right',
        },
        {
          to: 'docs/sdks-and-tools',
          activeBasePath: 'docs/sdks-and-tools',
          label: 'SDKs & Tools',
          position: 'right',
        },
        {
          href: 'https://docs.vertexvis.com/',
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
          to:
            'https://account.vertexvis.com/signin',
          label: 'Sign In',
          className: 'sign-in non-button-link',
          position: 'right',
        },
        {
          to: 'https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true',
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
        href: 'https://vertexvis.com/',
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
	          label: 'Samples',
	          to: 'samples',
	        },
            {
              label: 'SDKs & Tools',
              to: 'docs/sdks-and-tools',
            },
            {
              label: 'API Reference',
              to: 'https://docs.vertexvis.com/',
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
              to: 'https://vertexvis.com/products/vertex-digital-twin-platform',
            },
            {
              label: 'Request a Demo',
              to: 'https://vertexvis.com/demo',
            },
            {
              label: 'Webinars & Events',
              to: 'https://vertexvis.com/resources/webinars-events',
            },
            {
              label: 'Pricing',
              to:
                'https://vertexvis.com/pricing/3d-platform',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About',
              href: 'https://vertexvis.com/company/about-us',
            },
            {
              label: 'Contact Sales',
              href: 'https://vertexvis.com/company/contact-us',
            },
            {
              label: 'Blog',
              href: 'https://vertexvis.com/resources/blog',
            },
            {
              label: 'Careers',
              href: 'https://vertexvis.com/company/careers',
            },
          ],
        },
      ],
      copyright: `© Copyright ${new Date().getFullYear()} Vertex Software LLC.`,
    },
    sidebarCollapsible: false,
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
