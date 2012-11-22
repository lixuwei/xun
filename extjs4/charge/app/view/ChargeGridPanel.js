/*
 * File: app/view/ChargeGridPanel.js
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

Ext.define('MyApp.view.ChargeGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chargeGridPanel',

    height: 250,
    width: 400,
    title: 'My Grid Panel',
    store: 'Charge',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'id',
                    text: '编号',
                    format: '0'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'remark',
                    text: '备注'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'date',
                    text: '日期',
                    format: 'Y-m-d H:i:s'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'amount',
                    text: '金额'
                }
            ],
            viewConfig: {

            },
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 400,
                    afterPageText: '共 {0}页',
                    beforePageText: '当前',
                    displayInfo: true,
                    displayMsg: '{0} - {1} 共 {2}条',
                    emptyMsg: '暂无数据',
                    firstText: '首页',
                    lastText: '尾页',
                    nextText: '下一页',
                    prevText: '上一页',
                    refreshText: '刷新',
                    store: 'Charge'
                }
            ]
        });

        me.callParent(arguments);
    }

});