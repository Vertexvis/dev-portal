---
id: sdk-web-getting-started
title: Getting started with Web UI Components
---

import { CodeExamples, Example, Viewer } from '@site/src/components/CodeExamples';

## Installation

Before you can start using the Web UI Components, you will need application credentials and an access token. You should also import data into the platform for use with the viewer.

For more information, see [Authentication](../guides/authentication) and [Importing Data](../guides/importing-data).

### Script tag

The easiest way to pull the viewer component into your project is to include the viewer in a `<script>` tag of your HTML.

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.x/dist/viewer/viewer.css"
    />
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.x/dist/viewer/viewer.esm.js"
    ></script>
    <script
      nomodule
      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.x/dist/viewer.js"
    ></script>
  </head>
</html>
```

## Loading a model in the viewer

HELLO WORLD. The first thing you should try out when getting started with the Web UI Components is the viewer component, which can be embedded within web applications and other environments with browser engine capabilities.

To try it out, create a simple HTML file using the viewer library. This provides an interactive 3D view of models that have been imported into the platform. Models must be imported into the platform beforehand, and can be loaded by `fileId`, `externalId`, or `sceneStateId`. See the [Importing Data](../guides/importing-data) guide for
help importing your data.

Here's a simple example of loading a model:

<CodeExamples>
<Example lang="html">

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.2-5/dist/viewer/viewer.css"
    />
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.2-5/dist/viewer/viewer.esm.js"
    ></script>
    <script
      nomodule
      src="https://cdn.jsdelivr.net/npm/@vertexvis/viewer@0.3.2-5/dist/viewer.js"
    ></script>

    <script>
      window.addEventListener('DOMContentLoaded', () => {
        main();
      });

      function main() {
        const viewer = document.querySelector('#viewer');
        viewer.addEventListener('pick', (event) => {
          console.log('picked parts', event.details.hitResults);
        });
      }
    </script>
  </head>
  <body>
    <vertex-viewer
      id="viewer"
      credentials-client-id="client-id"
      credentials-token="token"
      model="urn:vertexvis:eedc:scenestate:123"
    >
      <vertex-viewer-toolbar data-viewer="viewer"></vertex-viewer-toolbar>
    </vertex-viewer>
  </body>
</html>
```

</Example>

<Viewer src="/examples/getting-started/viewer.html"/>

</CodeExamples>

## More examples

After you've loaded a model into the basic viewer, you can begin to explore the additional capabilities of the
viewer components combined with the Vertex platform APIs.

Check out [UI Component Examples](https://github.com/Vertexvis/vertex-web-sdk/tree/master/examples) on GitHub for more complex examples.
