import React from 'react';

export function SignUpNote() {
  return (
    <>
      The following instructions assume:
      <ul>
        <li>
          You created a free developer account by{' '}
          <a href="https://aws.amazon.com/marketplace/pp/B08PP264Z1?stl=true">
            visiting our listing on the AWS Marketplace
          </a>
          .
        </li>
        <li>
          You created credentials in the{' '}
          <a href="https://console.vertexvis.com/applications">
            Vertex Console
          </a>{' '}
          and have your Vertex client ID and secret.
        </li>
      </ul>
    </>
  );
}
