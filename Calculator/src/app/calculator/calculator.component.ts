import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input : string = '0';
  result : string = '0';
  isNewNumber : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.input = '0';
    this.result = '0';
  }

  saveToMemory() {

  }

  getFromMemory() {

  }

  pressNumber(number: any) {
    if (this.isNewNumber) {
      this.input = '0';
    }

    if (this.input != '0' ||
        this.input == '0' && number == '.') {
      this.input = this.input + number;
    } else {
      this.input = number;
    }

    this.isNewNumber = false;
  }

  pressOperator(operator: string) {
    if (this.result != '0') {
      this.getAnswer();
    }

    this.result = this.input + operator;
    this.isNewNumber = true;

  }

  getAnswer() {
    this.input = eval(this.result + this.input);
    this.result = '0';
    this.isNewNumber = true;
  }

}

/*
Dupla operátorok
Dupla pontok
*/
