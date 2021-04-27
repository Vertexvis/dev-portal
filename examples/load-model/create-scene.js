import { onViewerConfigured, configureViewer } from '../helpers.js';

onViewerConfigured().then(main);

async function main(viewer) {
  const demoConfig = await configureViewer(viewer);
  const newScene = await viewer.newScene();
  newScene
    .from(`urn:vertexvis:eedc:file:${demoConfig.fileId}`)
    .execute()
    .then((scene) => viewer.load(scene));
}
