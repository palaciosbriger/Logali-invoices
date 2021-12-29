sap.ui.define([
	"sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
/**
 * 
 * @param {sap.ui.model.json.JSONModel} JSONModel 
 * @param {sap.ui.Device} Device 
 */
function (JSONModel,Device) {
	"use strict";

	return {

		createRecipient: function () {
            const oData = {
                recipient: {
                    name: "World"
                }
            };

            return new JSONModel (oData);
		},
        createDeviceModel: function(){
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay")
            return oModel;
        }

	};
});