import { onViewerConfigured, configureViewer } from '../helpers.js';

const toggle = document.querySelector('#toggle');
const itemName = 'item-name';

onViewerConfigured().then(main);

async function main(viewer) {
  configureViewer(viewer);

  const newScene = await viewer.newScene();
  newScene
    .from('urn:vertexvis:eedc:file:file-id')
    .execute()
    .then((scene) => viewer.load(scene));

  let isHidden = false;
  toggle.addEventListener('click', async () => {
    isHidden = !isHidden;

    const scene = await viewer.scene();
    if (isHidden) {
      scene.hide((s) => s.withMetadata('name', itemName)).execute();
    } else {
      scene.show((s) => s.withMetadata('name', itemName)).execute();
    }
  });
}
