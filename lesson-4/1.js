"use strict";

let number = -125;
let obj = {};

function numberInObject() {
  if (Number.isInteger(number) && number <= 999 && number >= 0) {
  } else {
    return "число не подходит";
  }
}

numberInObject();
