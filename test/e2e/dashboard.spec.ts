import {DashboardPageObject} from './pageObjects/dashboard.pageObject';

describe('Dashboard page', function() {

    var dashboard: DashboardPageObject = new DashboardPageObject();

    beforeEach(function() {
        browser.get('#/dashboard');
    });

    it('should say hello', function() {
        dashboard.sayHi('yo');
        expect(dashboard.greeting.getText()).toEqual('Yo yo');
    });

});
