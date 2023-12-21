import { SensorListExtension } from './extensions/SensorListExtension.js';
import { SensorDetailExtension } from './extensions/SensorDetailExtension.js';
import { SensorSpritesExtension } from './extensions/SensorSpritesExtension.js';
import { SensorHeatmapsExtension } from './extensions/SensorHeatmapsExtension.js';
import { XLSExtension } from './extensions/XLSExtension/contents/main.js';

export const SensorListExtensionID = 'IoT.SensorList';
export const SensorDetailExtensionID = 'IoT.SensorDetail';
export const SensorSpritesExtensionID = 'IoT.SensorSprites';
export const SensorHeatmapsExtensionID = 'IoT.SensorHeatmaps';
export const XLSExtensionID = "XLSE.Extension" ;

Autodesk.Viewing.theExtensionManager.registerExtension(SensorListExtensionID, SensorListExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorDetailExtensionID, SensorDetailExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorSpritesExtensionID, SensorSpritesExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorHeatmapsExtensionID, SensorHeatmapsExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(XLSExtensionID, XLSExtension);

async function getAccessToken(callback) {
    try {
        const resp = await fetch('/auth/token');
        if (!resp.ok) {
            throw new Error(await resp.text());
        }
        const { access_token, expires_in } = await resp.json();
        callback(access_token, expires_in);
    } catch (err) {
        alert('Không thể lấy mã thông báo truy cập (access token).Xem bảng điều khiển (console) để biết thêm chi tiết.');
        console.error(err);
    }
}

export function initViewer(container, extensions) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Initializer({ getAccessToken }, function () {
            const viewer = new Autodesk.Viewing.GuiViewer3D(container, { extensions });
            viewer.start();
            resolve(viewer);
        });
    });
}

export function loadModel(viewer, urn, guid) {
    return new Promise(function (resolve, reject) {
        function onDocumentLoadSuccess(doc) {
            const viewable = guid ? doc.getRoot().findByGuid(guid) : doc.getRoot().getDefaultGeometry();

            // Dispatch custom events
            var ViewerInstance = new CustomEvent("viewerinstance", { detail: { viewer: viewer } });
            document.dispatchEvent(ViewerInstance);

            var LoadExtensionEvent = new CustomEvent("loadextension", {
                detail: {
                    extension: "XLSE.Extension",
                    viewer: viewer
                }
            });
            document.dispatchEvent(LoadExtensionEvent);
            var UnloadExtensionEvent = new CustomEvent("unloadextension", {
                detail: {
                  extension: "XLSE.Extension",
                  viewer: viewer
               }
           });
   document.dispatchEvent(UnloadExtensionEvent);

            // Resolve the promise after handling events
            viewer.loadDocumentNode(doc, viewable).then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        }

        function onDocumentLoadFailure(code, message, errors) {
            reject({ code, message, errors });
        }

        Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);
    });
}

export function adjustPanelStyle(panel, { left, right, top, bottom, width, height }) {
    const style = panel.container.style;
    style.setProperty('left', left ? left : 'unset');
    style.setProperty('right', right ? right : 'unset');
    style.setProperty('top', top ? top : 'unset');
    style.setProperty('bottom', bottom ? bottom : 'unset');
    style.setProperty('width', width ? width : 'unset');
    style.setProperty('height', height ? height : 'unset');
}
