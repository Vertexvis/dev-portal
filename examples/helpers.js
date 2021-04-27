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
  const config = await fetchConfig();
  const token = { clientId: config.clientId, token: config.token };

  if (viewer != null) {
    setCredentials(viewer, token);
  } else {
    console.error(
      'Cannot configure viewer. HTML is probably missing a <vertex-viewer> component.'
    );
  }
  return config;
}

async function fetchConfig() {
  const resp = await fetch(
    'https://rest-api.prod.vertexvis.io/rest/api/demo_config'
  );
  const cfg = await resp.json();
  return { clientId: cfg.clientId, token: cfg.accessToken, fileId: cfg.fileId };
}

function setCredentials(viewer, { clientId, token }) {
  viewer.credentialsClientId = clientId;
  viewer.credentialsToken = token;
}
