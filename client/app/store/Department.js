/*
 * File: app/store/Department.js
 *
 * This file was generated by Sencha Architect version 4.2.8.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.2.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.2.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EmployeeApp.store.Department', {
    extend: 'Ext.data.Store',

    requires: [
        'EmployeeApp.model.Department',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Department',
            autoLoad: false,
            model: 'EmployeeApp.model.Department',
            sorters: {
                property: 'department'
            }
        }, cfg)]);
    }
});