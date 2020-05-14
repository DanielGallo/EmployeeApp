Ext.define('EmployeeApp.util.Format', {
    singleton: true,
    
    intlCurrency: function(country, value) {
        var currencySymbol = '$';

        switch (country.toLowerCase()) {
            case 'england':
                currencySymbol = '£';
                break;

            case 'france':
            case 'italy':
                currencySymbol = '€';
                break;

            case 'japan':
                currencySymbol = '¥';
                break;

            case 'canada':
                currencySymbol = 'C$';
                break;

            case 'switzerland':
                currencySymbol = 'CHF';
                break;
        }

        return Ext.util.Format.number(value, currencySymbol + '0,000');
    }                 
});