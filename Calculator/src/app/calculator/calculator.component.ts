import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input : String = '140';
  result = new String;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {

  }

  saveToMemory() {

  }

  getFromMemory() {

  }

  pressNumber(number: any) {

  }

  pressOperator(operator: string) {

  }

  getAnswer() {

  }

}
