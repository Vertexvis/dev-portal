---
id: load-model
title: Loading models in the Viewer component
sidebar_label: Loading models
---

import { CodeExamples, Example, Viewer } from '@site/src/components/CodeExamples';

This guide walks you through the process of creating a scene using
Vertex's UI Components and APIs.

To view a model imported into Vertex, you must first create a scene to load into the viewer. Scenes can either be created through the UI Components or through our RESTful API.

You can find the example JS code for this guide in our [Web UI Component
Examples](https://github.com/Vertexvis/vertex-web-sdk/tree/master/examples/loading-models) repo.

## Referencing a model

When creating a scene, you'll first need to provide a reference to the file or
snapshot that you want to load. These references are expressed as URNs in the
following formats:

- `urn:vertexvis:eedc:file:{vertex-id}`: References a model by a Vertex
  file ID.

  The ID of a file can be found in the URL of the Vertex application when you open a
  model. For example, if the URL to your file is
  `https://app.vertexvis.com/file/2c2410ee-6ab9-45ee-a80b-255f2e20160f`, then
  `2c2410ee-6ab9-45ee-a80b-255f2e20160f` is the file ID.

- `urn:vertexvis:eedc:file?externalId={external-id}`: References a model by an
  external ID that was assigned by you when uploading the model. This approach
  is used to map files in your system with files in Vertex, and can be more
  convenient when uploading a model.
- `urn:vertexvis:eedc:scenestate:{vertex-id}`. References a model by a scene
  state, and can be used to load snapshots that were created in our
  application.

  The ID of a scene state can be found by inspecting the network traffic of the
  Vertex application. When opening a model, search for a call to
  `https://rest-api.prod.vertexvis.io/rest/api/model_snapshot_versions`. The
  snapshot ID will be included in the returned JSON at
  `items[].snapshotVersion.sceneState.id`.

## Creating a scene

Creating a scene with the UI Components involves using a `SceneBuilder`. The
`SceneBuilder` describes instructions for how to build the scene. You can
create an instance of the builder from the viewer in your target platform and
include helper methods to indicate the items to include in the
scene and what material colors they should have.

When you're done setting up the scene, call the builder's `execute()` method.
This instructs Vertex to build the scene, and when it's finished, return a
reference to your new scene. You can then pass this reference to the viewer to
visualize your model.

<CodeExamples>
<Example lang="js">

```js
window.addEventListener('DOMContentLoaded', () => {
  main();
});

async function main() {
  const viewer = document.querySelector('#viewer');
  const newScene = await newScene();

  const scene = await newScene
    .from('urn:vertexvis:eedc:file?externalId=my-file')
    .execute();

  await viewer.load(scene);
}
```

</Example>

<Example lang="xamarin">

```csharp
using Vertexvis.Viewer.Common;
using Xamarin.Forms;

namespace Example
{
    public class ExampleViewer : ContentView
    {
        public ExampleViewer()
        {
            InitializeComponent();
            Content = new Viewer();
            loadModel();
        }

        private async Task LoadModel() {
            SceneBuilder newScene = await viewer.newScene();
            string scene = await newScene
                .From(Resource.FileByExternalId("my-file"))
                .Execute();
            await viewer.Load(scene);
        }
    }
}
```

</Example>

<Viewer src="/examples/load-model/create-scene.html"/>

</CodeExamples>

## Configuring a new scene

Sometimes you'll want to specify what's included in your initial scene. For
example, you might want to hide all items except for a specific part, or specify
that certain parts have a material color. These operations are additive, and can
be combined to express a complex set of expressions.

Use the scene builder's selector interface to select items on which you want to perform an operation. You can select items by their ID or by metadata assigned to items in the CAD model.

<!-- See our [selector
docs][selectors] for the full API on selectors.-->

<CodeExamples>
<Example lang="js">

```js
window.addEventListener('DOMContentLoaded', () => {
  main();
});

async function main() {
  const viewer = document.querySelector('#viewer');
  const newScene = await newScene();

  const scene = await newScene
    .from('urn:vertexvis:eedc:file?externalId=my-file')
    // Hide everything in the scene except for a single part
    .showOnly((s) => s.withMetadata('name', 'some-metadata-value'))
    // Add another item to the scene
    .show((s) => s.withId('some-part-id'))
    // Apply a material color to an item.
    .highlight('#0000ff', (s) => s.withId('some-part-id'))
    .execute();

  await viewer.load(scene);
}
```

</Example>
<Example lang="xamarin">

```csharp
using Vertexvis.Viewer.Common;
using Xamarin.Forms;

namespace Example
{
    public class ExampleViewer : ContentView
    {
        public ExampleViewer()
        {
            InitializeComponent();
            Content = new Viewer();
            loadModel();
        }

        private async Task LoadModel() {
            SceneBuilder newScene = await viewer.newScene();
            string scene = await newScene
                .From(Resource.FileByExternalId("my-file"))
                // Hide everything in the scene except for a single part
                .ShowOnly(s => s.WithMetadata("name", "some-metadata-value"))
                // Add another item to the scene
                .Show(s => s.WithPartId("some-part-id"))
                // Apply a material color to an item.
                .Highlight(new HexColor("#0000ff"), s => s.withId("some-part-id"))
                .Execute();

            await viewer.Load(scene);
        }
    }
}
```

</Example>

<Viewer src="/examples/load-model/configure-scene.html"/>

</CodeExamples>

## Summary

In this guide, we explored how to load a model into the viewer using a reference
URN, and how to configure the initial state of the scene using selectors. In the
next guide, we'll [learn how to perform operations][./scene-operations.md] on a scene
loaded by the viewer, and how we can use these operations to create user
interactions.
