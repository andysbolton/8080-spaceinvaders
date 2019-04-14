"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Uint = /** @class */ (function () {
    function Uint(max, n) {
        if (n === void 0) { n = 0; }
        this.max = max;
        this.num = n & this.max;
    }
    Uint.prototype.toString = function () {
        return this.num.toString();
    };
    Uint.prototype.val = function () {
        return this.num;
    };
    Object.defineProperty(Uint.prototype, "isZero", {
        get: function () {
            return this.num === 0;
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.incr = function (n) {
        var val = (this.num + n) & this.max;
        this.num = val;
        return val;
    };
    Uint.prototype.decr = function (n) {
        var val = (this.num - n) & this.max;
        this.num = val;
        return val;
    };
    Object.defineProperty(Uint.prototype, "hex", {
        get: function () {
            return this.num.toString(16);
        },
        enumerable: true,
        configurable: true
    });
    Uint.prototype.checkCarry = function (val) {
        return val < 0 || val > this.max ? 1 : 0;
    };
    return Uint;
}());
exports.default = Uint;
//# sourceMappingURL=Uint.js.map