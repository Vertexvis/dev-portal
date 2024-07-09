import Link from '@docusaurus/Link';
import React from 'react';

export function ConnectSyncNote() {
  return (
    <>
      The following instructions assume:
      <ul>
        <li>
          You have imported your data using{' '}
          <Link href="https://developer.vertex3d.com/docs/guides/import-data-with-api">
            our APIs
          </Link>
          .
        </li>
        <li>
          You are familiar the concept of{' '}
          <Link href="https://developer.vertex3d.com/docs/guides/render-static-scenes">
            Scenes and Scene items
          </Link>
          .
        </li>
      </ul>
    </>
  );
}
