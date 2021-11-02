sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"walkthroughproject/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("walkthroughproject.Component", {

		metadata : {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
			   "viewName": "walkthroughproject.view.MainView",
			   "type": "XML",
			   /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
			   "id": "app"
			}
		 },

		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				recipient : {
				   name : "World",
				   test: ":)"
				}
			 };
			 var oModel = new JSONModel(oData);
			 this.setModel(oModel);
	
			 // set i18n model
			 var i18nModel = new ResourceModel({
				bundleName: "walkthroughproject.i18n.i18n"
			 });
			 this.setModel(i18nModel, "i18n");
			
			 // enable routing
			//this.getRouter().initialize();

			// set the device model
			//this.setModel(models.createDeviceModel(), "device");
		}
	});
});
