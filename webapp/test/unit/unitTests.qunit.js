/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		//"walkthrough_project/test/unit/AllTests"
		"walkthrough_project/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});
