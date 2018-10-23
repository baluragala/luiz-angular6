"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var log = function (originalConstructor) {
    function newConstructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
};
var Pet = /** @class */ (function () {
    function Pet(name, age) {
    }
    Pet = __decorate([
        log
    ], Pet);
    return Pet;
}());
new Pet("Azor", 12);
var Screen = /** @class */ (function () {
    function Screen(width, height, orientatiom) {
    }
    Screen = __decorate([
        log
    ], Screen);
    return Screen;
}());
new Screen(1080, 1920, "");
