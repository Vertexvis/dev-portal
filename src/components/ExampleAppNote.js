import Link from '@docusaurus/Link';
import React from 'react';

export function ExampleAppNote() {
  return (
    <>
      The following instructions assume:
      <ul>
        <li>
          You have built your first application following{' '}
          <Link href="https://console.vertexvis.com/getting-started">
            our guide
          </Link>
          , or have built a similar application.
        </li>
        <li>
          You are familiar with the raycaster tool and hit results for{' '}
          <Link href="https://developer.vertex3d.com/docs/guides/render-your-first-scene#interact-with-the-scene">
            interacting with the scene
          </Link>
          .
        </li>
      </ul>
    </>
  );
}
