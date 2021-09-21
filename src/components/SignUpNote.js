import React from 'react';

export function SignUpNote() {
  return (
    <>
      The following instructions assume:
      <ul>
        <li>
          You{' '}
          <a href="https://account.vertexvis.com/signup">
            created a free developer account
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
