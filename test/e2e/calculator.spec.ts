import {CalculatorPageObject} from './pageObjects/calculator.pageObject';

describe('Calculator Page', function() {

    var calculator = new CalculatorPageObject();

    beforeEach(function() {
        browser.get('#/calculator');
    });

    it('should add positive numbers', function() {
        calculator.add(1, 2);
        expect(calculator.result.getText()).toEqual('3');

        calculator.add(2, 2);
        expect(calculator.result.getText()).toEqual('4');
    });

    it('should add negative numbers', function() {
        calculator.add(-1, 4);
        expect(calculator.result.getText()).toEqual('3');

        calculator.add('2', '-2');
        expect(calculator.result.getText()).toEqual('0');
    });
});
