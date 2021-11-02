sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("walkthroughproject.controller.MainView", {
		onInit : function () {
			// set data model on view
			var oData = {
			   recipient : {
				  name : "World",
				  test : ":)"
			   }
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "walkthroughproject.i18n.i18n"
			 });
			 this.getView().setModel(i18nModel, "i18n");
		 },
		onShowHello : function () {
		  // read msg from i18n model
		  var oBundle = this.getView().getModel("i18n").getResourceBundle();
		  var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		  var sRecipient2 = this.getView().getModel().getProperty("/recipient/test");
		  //Entre las celdas separados por comas se pasan los parametros para los placeholders
		  //NUNCA CONCATENAR TEXTOS 
		  var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient2]);
		  // show message
		  MessageToast.show(sMsg);
	   }
	});
 });