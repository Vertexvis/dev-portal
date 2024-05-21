import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

// Simple link to new documentation. We could do it automatically, but it's more involved,
// https://github.com/single-spa/single-spa.js.org/blob/46b46c97e0dee70b2c65c2c41484422fe399e6eb/website/src/plugins/docusaurus-plugin-redirects/src/index.js
const Api = ({ version }) => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`API reference ${version} | ${siteConfig.title}`}
      description={`Vertex's platform API specification ${version}`}
    >
      <div style={{ marginTop: `5rem`, textAlign: 'center' }}>
        <p>
          Our 1.0 API Reference has{' '}
          <a href="https://docs.vertex3d.com/">moved here</a>.
        </p>
      </div>
    </Layout>
  );
};

export default Api;
