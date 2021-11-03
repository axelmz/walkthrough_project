sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("walkthroughproject.controller.HelloPanel", {
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