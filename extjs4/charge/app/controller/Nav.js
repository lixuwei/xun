/*
 * File: app/controller/Nav.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Nav', {
    extend: 'Ext.app.Controller',

    panelInfo: {
        chargeGridPanel: {
            id: 'chargeGrid',
            panelClass: 'MyApp.view.ChargeGridPanel'
        }
    },
    views: [
        'NavPanel'
    ],

    refs: [
        {
            ref: 'viewport',
            selector: 'viewport'
        }
    ],

    onPanelRender: function(abstractcomponent, options) {
        panel = abstractcomponent;
        panel.body.on('click', Ext.emptyFn, null, {
            delegate : 'a',
            preventDefault : true
        });
        panel.body.on('mousedown', function(e, target) {
            e.stopEvent();
            var panelInfo = this.panelInfo.chargeGridPanel;
            this.getViewport().down('mainTabPanel').addOrShowTab(panelInfo.id, panelInfo.panelClass, panelInfo.panelClassParams);
        }, this, {
            delegate : 'a'
        });
    },

    init: function(application) {
        this.control({
            "navPanel": {
                render: this.onPanelRender
            }
        });
    }

});