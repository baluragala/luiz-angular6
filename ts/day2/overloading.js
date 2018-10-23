"use strict";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.reverse = function (stringOrArray) {
        return typeof stringOrArray === "string"
            ? stringOrArray
                .split("")
                .reverse()
                .join("")
            : stringOrArray.slice().reverse();
    };
    return Utils;
}());
var u = new Utils();
console.log(u.reverse("bala"));
