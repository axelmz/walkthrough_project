sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "walkthroughproject.view.MainView"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});