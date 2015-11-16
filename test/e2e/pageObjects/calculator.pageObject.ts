export class CalculatorPageObject {
    public firstOperand = element.all(by.tagName('input')).get(0);
    public secondOperand = element.all(by.tagName('input')).get(1);
    public result = element(by.css('.result'));

    /////

    add(a: any, b: any) {
        // this doesn't work in ts
        // this.firstOperand.clear().sendKeys();

        this.firstOperand.clear();
        this.firstOperand.sendKeys(a);

        this.secondOperand.clear();
        this.secondOperand.sendKeys(b);
    }
}
