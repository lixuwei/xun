/*
 * File: app/controller/Main.js
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

Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [
        'MyViewport'
    ],

    refs: [
        {
            ref: 'viewport',
            selector: 'viewport'
        }
    ],

    showMainView: function() {
        navPanel = Ext.create('MyApp.view.NavPanel', {flex: 1});
        west_container = this.getViewport().down('container[region=west]'); 
        west_container.add(navPanel);
        mainTabPanel = Ext.create('MyApp.view.MainTabPanel', {flex: 1,region : 'center'});
        //center_container = this.getViewport().down('container[region=center]');
        //center_container.add(mainTabPanel);
        this.getViewport().add(mainTabPanel);

        this.getController('MyApp.controller.Charge').initView();
    }

});
