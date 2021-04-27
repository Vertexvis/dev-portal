import { onViewerConfigured, configureViewer } from '../helpers.js';

onViewerConfigured().then(main);

async function main(viewer) {
  const demoConfig = await configureViewer(viewer);
  const sceneBuilder = await viewer.newScene();
  const newScene = await sceneBuilder
    .from(`urn:vertexvis:eedc:file:${demoConfig.fileId}`)
    // Hide everything in the scene except for matching part
    .showOnly((s) => s.withMetadata('PartID', '15975'))
    // Add another item to the scene
    .show((s) => s.withMetadata('Description', 'Elevated Rear Spoiler'))
    .execute();

  await viewer.load(newScene);
}
