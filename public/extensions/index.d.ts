// import { SensorListExtension } from './SensorListExtension.js';
// import { SensorDetailExtension } from './SensorDetailExtension.js';
// import { SensorSpritesExtension } from './SensorSpritesExtension.js';
// import { SensorHeatmapsExtension } from './SensorHeatmapsExtension.js';
// import { SensorManagerExtension } from './SensorManagerExtension.js';
// import { XLSExtension } from './XLSExtension/contents/main.js';
// export { HistoricalDataView, SensorID, Sensor, ChannelID, Channel } from './HistoricalDataView.js';
// export { SensorListExtension, SensorDetailExtension, SensorSpritesExtension, SensorHeatmapsExtension, SensorManagerExtension, XLSExtension};
// export declare const AllExtensionIDs: string[];

// Import your extensions and related items
import { SensorListExtension } from './SensorListExtension.js';
import { SensorDetailExtension } from './SensorDetailExtension.js';
import { SensorSpritesExtension } from './SensorSpritesExtension.js';
import { SensorHeatmapsExtension } from './SensorHeatmapsExtension.js';
import { SensorManagerExtension } from './SensorManagerExtension.js';
import { XLSExtension } from './XLSExtension/contents/main.js';

// Export various extensions and related items
export { HistoricalDataView, SensorID, Sensor, ChannelID, Channel } from './HistoricalDataView.js';
export {
    SensorListExtension,
    SensorDetailExtension,
    SensorSpritesExtension,
    SensorHeatmapsExtension,
    SensorManagerExtension,
    XLSExtension
};

// Declare a constant that holds all the extension IDs
export const AllExtensionIDs = [
    'SensorListExtension',
    'SensorDetailExtension',
    'SensorSpritesExtension',
    'SensorHeatmapsExtension',
    'SensorManagerExtension',
    'XLSExtension'
];
