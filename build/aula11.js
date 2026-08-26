"use strict";
// TYPE ASSERTION E TYPECAST
Object.defineProperty(exports, "__esModule", { value: true });
let numberValue;
let stringValue;
let unknownValue;
unknownValue = 10;
stringValue = "20";
numberValue = stringValue;
// numberValue = <number>unknownValue;
stringValue = unknownValue;
stringValue += 10;
console.log(typeof unknownValue);
console.log(unknownValue);
console.log(typeof numberValue);
console.log(numberValue);
console.log(typeof stringValue);
console.log(stringValue);
let svalue;
let nvalue;
svalue = "11";
// nvalue = svalue // -> o tipo string nao pode ser atribuido ao tipo number
nvalue = svalue;
// TYPECAST
numberValue = Number(stringValue);
console.log(numberValue);
stringValue = numberValue.toString();
console.log(stringValue);
nvalue = Number.parseInt(svalue);
console.log(nvalue);
