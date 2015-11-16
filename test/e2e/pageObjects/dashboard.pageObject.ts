export class DashboardPageObject {
    public name = element(by.tagName('input'));
    public hiButton = element(by.tagName('button'));
    public greeting = element(by.tagName('div'));

    /////

    sayHi(name: string) {
        this.name.clear();
        this.name.sendKeys(name);
        this.hiButton.click();
    }
}
