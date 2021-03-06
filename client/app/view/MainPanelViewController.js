/*
 * File: app/view/MainPanelViewController.js
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

Ext.define('EmployeeApp.view.MainPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainpanel',

    requires: [
        'Ext.route.Route',
        'Ext.util.LocalStorage'
    ],

    config: {
        loggedIn: false
    },

    routes: {
        'login': 'handleLoginRoute',
        'logout': 'handleLogoutRoute',
        ':type?': {
            action: 'handleMainRoute',
            conditions: {
                ':type': '(employees)'
            }
        },
        ':type(/:args)?': {
            action: 'handleDataRoute',
            conditions: {
                ':type': '(employee)',
                ':args': '(.*)'
            }
        }
    },

    handleLoginRoute: function() {
        var me = this,
            view = me.getView(),
            loginForm = view.down('loginform');

        view.setActiveItem(0);
        loginForm.show();
    },

    handleLogoutRoute: function() {
        var me = this,
            view = me.getView(),
            logoutButton = view.lookupReference('logout'),
            grid = view.down('employeegrid'),
            storage = Ext.getApplication().storage;

        Ext.Ajax.setDefaultHeaders({'X-Embarcadero-Session-Token': ''});
        storage.removeItem('sessionToken');

        me.setLoggedIn(false);

        view.setActiveItem(0);

        logoutButton.hide();

        grid.destroy();

        me.redirectTo('login');
    },

    handleMainRoute: function(type) {
        var me = this,
            view = me.getView(),
            logoutButton = view.lookupReference('logout'),
            grid, form;

        if (!me.getLoggedIn()) {
            me.redirectTo('login');
        } else {
            view.setActiveItem(1);

            if (type === 'employees') {
                grid = view.down('employeegrid');
                form = view.down('employeeform');

                if (grid && grid.getSelectable) {
                    grid.getSelectable().deselectAll();
                    form.hide();
                }
            }
        }
    },

    handleDataRoute: function(type, args) {
        var me = this,
            view = me.getView(),
            store, grid, form, record;

        if (me.getLoggedIn()) {
            if (type === 'employee') {
                form = view.down('employeeform');
                grid = view.down('employeegrid');

                if (args === 'new') {
                    record = Ext.create('EmployeeApp.model.Employee');
                } else {
                    store = grid.getStore();
                    record = store.getById(args);
                }

                form.getController().loadRecord(record);
            }
        } else {
            me.redirectTo('login');
        }
    },

    loginSuccess: function() {
        var me = this,
            view = me.getView(),
            logoutButton = view.lookupReference('logout');

        me.setLoggedIn(true);

        logoutButton.show();

        me.redirectTo('employees');
    },

    onLogoutClick: function(tool, e, owner, eOpts) {
        var me = this;

        me.redirectTo('logout');
    },

    onPanelInitialize: function(component, eOpts) {
        var me = this,
            view = me.getView(),
            storage = Ext.util.LocalStorage.get('EmployeeDirectory'),
            sessionToken = storage.getItem('sessionToken'),
            loginForm = view.down('loginform');

        if (sessionToken !== null) {
            Ext.Ajax.setDefaultHeaders({'X-Embarcadero-Session-Token': sessionToken});

            loginForm.hide();
            me.loginSuccess();
        }
    }

});