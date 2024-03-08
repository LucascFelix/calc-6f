import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc6',
  templateUrl: './form-calc6.component.html',
  styleUrl: './form-calc6.component.css'
})
export class FormCalc6Component {

  // Imput de Dados
  num1: number = 0;
  num2: number = 0;
  
  // Operadores Aritméticos
  
  sum: number = 0;
  subtraction: number = 0;
  multiplication: number = 0;
  division: number = 0;
  exponentiation: number = 0;
  radication: number = 0;
  
  // Saida

  resultado: number = 0;

  // Métodos para Cálcular as operações

  calcularSum(){
    this.resultado = this.num1 + this.num2;
  }

  calcularSubtraction(){
    this.resultado = this.num1 - this.num2;
  }

  calcularMultiplication(){
    this.resultado = this.num1 * this.num2;
  }

  calcularDivision(){
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
  } else {
      // Tratamento de divisão por zero
      this.resultado = NaN;
  }
  }
  calcularExponentiation() {
    this.resultado = Math.pow(this.num1, this.num2);
}

calcularRadicacao() {
    this.resultado = Math.pow(this.num1, 1 / this.num2);
}

onClickSum(){
  this.resultado = this.num1 + this.num2;
}
 onClickSubtraction(){
  this.resultado = this.num1 - this.num2;
 }

 onClickMultiplication(){
  this.resultado = this.num1 * this.num2;
 }

 onClickDivision(){
  if (this.num2 !== 0) {
    this.resultado = this.num1 / this.num2;
} else {
    // Tratamento de divisão por zero
    this.resultado = NaN;
}
 }
 
    onClickExponentiation(){
    this.resultado = Math.pow(this.num1, this.num2);
  }
}
