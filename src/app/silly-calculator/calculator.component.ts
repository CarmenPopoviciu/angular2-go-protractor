import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'my-calculator',
  template: `
    <h2>The silly calculator</h2>
    <input [(ng-model)]="firstOperand">
    <span>+</span>
    <input [(ng-model)]="secondOperand">
    <span>=</span>
    <span class="result">{{add(firstOperand, secondOperand)}}</span>
  `,
  directives: [FORM_DIRECTIVES]
})
export class CalculatorComponent {

  add(a: any, b: any) {
    if(a && b) {
      return (parseInt(a) + parseInt(b));
    }
  }
}