import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private baseUrl : string = 'http://localhost:3000/';

  public input : string = '0';
  public result : string = '0';
  public isNewNumber : boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  clear(): void {
    this.input = '0';
    this.result = '0';
    this.isNewNumber = false;
  }

  saveToMemory(): void {
    const newNumber : Object = {
      number: this.input
    }

    this.http.post<{ message: string, number: string }>(this.baseUrl + 'writefile', newNumber)
    .subscribe();
  }

  getFromMemory(): void {
    this.http.get<{message: string, number: string }>(this.baseUrl + 'readfile')
    .subscribe((final) => {
      this.input = final.number;
    });
  }

  pressNumber(number: any): void {
    if (this.isNewNumber) {
      this.input = '0';
    }

    if (!(this.input.includes('.') && number == '.')) {
      if (this.input != '0' ||
        (this.input == '0' && number == '.')) {
          this.input = this.input + number;
      } else {
        this.input = number;
      }
    }

    this.isNewNumber = false;
  }

  pressOperator(operator: string): void {
    let operators = ['+', '-', '*', '/'];

    if (this.result != '0') {
      this.getAnswer();
    }

    if (!(operators.some(el => this.result.includes(el)))) {
      this.result = this.input + operator;
      this.isNewNumber = true;
    }
  }

  getAnswer(): void {
    this.input = parseFloat(eval(this.result + this.input).toFixed(5)).toString();
    this.result = '0';
    this.isNewNumber = true;
  }
}
