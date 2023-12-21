const XLSExtensionID = "XLSE.Extension";
export class XLSExtension extends Autodesk.Viewing.Extension {
  constructor(viewer, options) {
    super(viewer, options);
    this._group = null;
    this._button = null;
  }

  load() {
    console.log(`${XLSExtensionID} extension loaded.`);
    return true;
  }

  unload() {
    // Clean up UI elements if they were added
    if (this._group) {
      this._group.removeControl(this._button);
      if (this._group.getNumberOfControls() === 0) {
        this.viewer.toolbar.removeControl(this._group);
      }
    }
    console.log(`${XLSExtensionID} has been unloaded`);
    return true;
  }

  onToolbarCreated(toolbar) {
    // Create a button
    this._button = new Autodesk.Viewing.UI.Button('toolbarXLS');
    this._button.onClick = () => {
      // Replace 'your_file_name_here.xlsx' with the actual filename you want to use.
      const fileName = 'properties.xlsx';

      // Assuming ApsXLS.downloadXLSX is a valid function, call it here.
      ApsXLS.downloadXLSX(fileName.replace(/\./g, '') + ".xlsx", statusCallback);
    };
    this._button.addClass('toolbarXLSButton');
    this._button.setToolTip('Export to .XLSX');

    // Create a control group
    this._group = new Autodesk.Viewing.UI.ControlGroup('myAppGroup1');
    this._group.addControl(this._button);

    // Add the control group to the toolbar
    toolbar.addControl(this._group);
  }
}

// Define the statusCallback function before the XLSExtension class
function statusCallback(completed, message) {
  // Make sure you have included jQuery and notify library.
  $.notify(message, { className: "info", position: "bottom right" });
  $('#downloadExcel').prop("disabled", !completed);
}

// Register the extension
Autodesk.Viewing.theExtensionManager.registerExtension(XLSExtensionID, XLSExtension);
