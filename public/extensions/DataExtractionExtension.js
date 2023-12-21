class DataExtractionExtension extends Autodesk.Viewing.Extension {
  constructor(viewer, options) {
    super(viewer, options);
    this.viewer = viewer;
    this.options = options;
    this.panel = null;
  }

  load() {
    // Create a UI button to trigger data extraction
    const extractButton = new Autodesk.Viewing.UI.Button('extract-data-button');
    extractButton.icon.style.backgroundImage = 'url(./path-to-icon.png)';
    extractButton.setToolTip('Extract Data');
    extractButton.onClick = () => this.extractData();

    // Add the button to the viewer toolbar
    this.viewer.toolbar.addControl(extractButton);

    return true;
  }

  unload() {
    // Remove the UI button when unloading the extension
    this.viewer.toolbar.removeControl('extract-data-button');
    return true;
  }

  extractData() {
    // Get the current selection
    const selection = this.viewer.getSelection();

    if (selection.length > 0) {
      const extractedData = [];

      // Iterate through selected elements and extract properties
      selection.forEach((dbId) => {
        this.viewer.getProperties(dbId, (props) => {
          // Process properties and add to extractedData array
          extractedData.push({
            dbId: dbId,
            properties: props.properties
          });

          // If all selected elements are processed
          if (extractedData.length === selection.length) {
            this.displayExtractedData(extractedData);
          }
        });
      });
    }
  }

  displayExtractedData(data) {
    // Display the extracted data in a custom UI panel or console log
    console.log(data);
  }
}
