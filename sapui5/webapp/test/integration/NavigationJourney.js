/*global QUnit*/

sap.ui.define([
    "logaligroup/sapui5/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"
], function (mockserver,opaQunit) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

        //Initialize mock server
        mockserver.init();  

		// Arrangements
		Given.iStartMyUIComponent({
            componentConfig:{
                name: "logaligroup.sapui5"
            }
        });
        //Actions
        When.onTheAppPage.iSayHelloDialogButton();

		// Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();

		//Cleanup
		Then.iTeardownMyApp();
	});
});
