const ForgeAPIEndpoint = '/api/aps/oauth/token';
let viewer;
let fileName;

async function getAccessToken() {
  try {
    const response = await fetch(ForgeAPIEndpoint);
    const data = await response.json();
    return { accessToken: data.access_token, expiresIn: data.expires_in };
  } catch (error) {
    throw new Error('Error fetching access token: ' + error.message);
  }
}

function initializeViewer(urn, name) {
  const options = {
    env: 'AutodeskProduction',
    getAccessToken: getAccessToken,
  };

  fileName = name;

  Autodesk.Viewing.Initializer(options, () => {
    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('preview'));
    viewer.start();
    const documentId = 'urn:' + urn;
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
  });
}

function dispatchCustomEvents() {
  const ViewerInstance = new CustomEvent('viewerinstance', { detail: { viewer: viewer } });
  document.dispatchEvent(ViewerInstance);

  const LoadExtensionEvent = new CustomEvent('loadextension', {
    detail: {
      extension: 'XLSExtension',
      viewer: viewer,
    },
  });
  document.dispatchEvent(LoadExtensionEvent);

  const UnloadExtensionEvent = new CustomEvent('unloadextension', {
    detail: {
      extension: 'XLSExtension',
      viewer: viewer,
    },
  });
  document.dispatchEvent(UnloadExtensionEvent);
}

async function onDocumentLoadSuccess(doc) {
  try {
    const viewables = doc.getRoot().getDefaultGeometry();
    await viewer.loadDocumentNode(doc, viewables);
    dispatchCustomEvents();
  } catch (error) {
    console.error('Error loading document:', error.message);
  }
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}
