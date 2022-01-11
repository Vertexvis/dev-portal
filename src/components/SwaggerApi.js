import 'swagger-ui-react/swagger-ui.css';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import SwaggerUI from './SwaggerUI';

export default function Api({ version, url }) {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`API reference ${version} | ${siteConfig.title}`}
      description={`Vertex's platform API specification ${version}`}
    >
      <div className="remove-all-styles">
        <SwaggerUI url={url} deepLinking />
      </div>
    </Layout>
  );
}
