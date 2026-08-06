import { onViewerConfigured, configureViewer } from '../helpers.js';

onViewerConfigured().then(main);

async function main(viewer) {
  await configureViewer(viewer);
  const newScene = await viewer.newScene();
  newScene
    .from(`urn:vertexvis:eedc:file:${process.env.VERTEX_FILE_ID}`)
    .execute()
    .then((scene) => viewer.load(scene));
}
