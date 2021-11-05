sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/Fragment",
   "sap/ui/core/syncStyleClass"
], function (Controller, MessageToast, Fragment, syncStyleClass) {
   "use strict";
   return Controller.extend("walkthroughproject.controller.HelloPanel", {
      onShowHello: function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sRecipient2 = this.getView().getModel().getProperty("/recipient/test");
         //Entre las celdas separados por comas se pasan los parametros para los placeholders
         //NUNCA CONCATENAR TEXTOS 
         var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient2]);
         // show message
         MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
         // create dialog lazily
         if (!this.pDialog) {
            // @ts-ignore
            this.pDialog = this.loadFragment({
               name: "walkthroughproject.view.HelloDialog"
            }).then(function (oDialog) {
               // forward compact/cozy style into dialog
               syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
               return oDialog;
            }.bind(this));
         }
         this.pDialog.then(function (oDialog) {
            oDialog.open();
         });
      },

      onCloseDialog: function () {
         // note: We don't need to chain to the pDialog promise, since this event-handler
         // is only called from within the loaded dialog itself.
         this.byId("helloDialog").close();
      }
   });
});