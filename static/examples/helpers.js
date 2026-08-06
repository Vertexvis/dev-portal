export function onViewerLoaded() {
  return new Promise((resolve, reject) => {
    document.addEventListener('DOMContentLoaded', () => {
      const viewer = document.querySelector('vertex-viewer');

      if (viewer != null) {
        resolve(viewer);
      } else {
        reject(
          new Error(
            'Cannot find viewer. HTML is probably missing a <vertex-viewer> component.'
          )
        );
      }
    });
  });
}

export async function onViewerConfigured() {
  const viewer = await onViewerLoaded();
  await configureViewer(viewer);
  return viewer;
}

export async function configureViewer(viewer) {
  const token = { clientId: process.env.VERTEX_CLIENT_ID, token: process.env.VERTEX_TOKEN };

  if (viewer != null) {
    setCredentials(viewer, token);
  } else {
    console.error(
      'Cannot configure viewer. HTML is probably missing a <vertex-viewer> component.'
    );
  }
  return config;
}

function setCredentials(viewer, { clientId, token }) {
  viewer.credentialsClientId = clientId;
  viewer.credentialsToken = token;
}
