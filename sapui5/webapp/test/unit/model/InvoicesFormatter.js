/*global QUnit*/

sap.ui.define([
	"logaligroup/sapui5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
], function (InvoicesFormatter,ResourceModel) {
	"use strict";

	QUnit.module("Invoice Status", {
        beforeEach: function(){
            this._oResourceModel = new ResourceModel ({
                bundleUrl  : sap.ui.require.toUrl("logaligroup/sapui5") + "/i18n/i18n.properties"
            });
        },
        afterEach : function (){
            this._oResourceModel.destroy();
        }
    });

	QUnit.test("I should test the Invoice Status", function (assert) {
        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStub = {
            getModel : oModel
        };

        let oControllerStub = {
            getView : this.stub().returns(oViewStub)
        };

        let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);

        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"),"New", "The invoice status for A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"),"In Progress", "The invoice status for B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"),"Done", "The invoice status for C is correct");
	});

});