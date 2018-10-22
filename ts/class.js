"use strict";
// class Product {
//   private title: string;
//   private price: number;
//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   get Title(): string {
//     return this.title;
//   }
//   set Title(value: string) {
//     this.title = value;
//   }
// }
// let p11 = new Product("iphone", 2000);
// console.log(p11.price);
var Product = /** @class */ (function () {
    function Product(title, price) {
        this.title = title;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "Title", {
        get: function () {
            return this.title;
        },
        set: function (value) {
            this.title = value;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var p11 = new Product("iphone", 2000);
var OnlineProduct = /** @class */ (function (_super) {
    __extends(OnlineProduct, _super);
    function OnlineProduct(title, price, deliveryMode) {
        var _this = _super.call(this, title, price) || this;
        _this.title = title;
        _this.price = price;
        _this.deliveryMode = deliveryMode;
        return _this;
    }
    return OnlineProduct;
}(Product));
