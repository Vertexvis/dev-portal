import Link from '@docusaurus/Link';
import React from 'react';

export function SignUpNote() {
  return (
    <>
      The following instructions assume:
      <ul>
        <li>
          You{' '}
          <Link href="https://account.vertexvis.com/signup">
            created a free developer account
          </Link>
          .
        </li>
        <li>
          You created credentials in the{' '}
          <Link href="https://console.vertexvis.com/getting-started">
            Vertex Console
          </Link>{' '}
          and have your Vertex client ID and secret.
        </li>
      </ul>
    </>
  );
}
