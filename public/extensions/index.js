/// import * as Autodesk from "@types/forge-viewer";

import { SensorListExtension, SensorListExtensionID } from './SensorListExtension.js';
import { SensorDetailExtension, SensorDetailExtensionID } from './SensorDetailExtension.js';
import { SensorSpritesExtension, SensorSpritesExtensionID } from './SensorSpritesExtension.js';
import { SensorHeatmapsExtension, SensorHeatmapsExtensionID } from './SensorHeatmapsExtension.js';
import { XLSExtension , XLSExtensionID } from './XLSExtension/contents/main.js';

Autodesk.Viewing.theExtensionManager.registerExtension(SensorListExtensionID, SensorListExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorDetailExtensionID, SensorDetailExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorSpritesExtensionID, SensorSpritesExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(SensorHeatmapsExtensionID, SensorHeatmapsExtension);
Autodesk.Viewing.theExtensionManager.registerExtension(XLSExtensionID, XLSExtension);

export {
    SensorListExtensionID,
    SensorListExtension,
    SensorDetailExtensionID,
    SensorDetailExtension,
    SensorSpritesExtensionID,
    SensorSpritesExtension,
    SensorHeatmapsExtensionID,
    SensorHeatmapsExtension,
    XLSExtensionID,
    XLSExtension
};