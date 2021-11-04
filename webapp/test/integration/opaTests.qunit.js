/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"walkthroughproject/test/integration/NavigationJourney"
	], function () {
		// @ts-ignore
		QUnit.start();
	});
});