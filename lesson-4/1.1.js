"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price * 0.75;
};

let product1 = new Product("T-shirt", 100);
product1.make25PercentDiscount();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price * 0.75;
  }
}

let product1 = new Product("T-shirt", 100);
product1.make25PercentDiscount();
