var Uint = /** @class */ (function () {
    function Uint(max, n) {
        if (n === void 0) { n = 0; }
        this.carry = 0;
        this.auxCarry = 0;
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
        var carry = val < 0 || val > this.max ? 1 : 0;
        var auxCarry = val < 0 || val > this.max / 2 ? 1 : 0;
        return {
            carry: carry,
            auxCarry: auxCarry,
        };
    };
    return Uint;
}());
export default Uint;
//# sourceMappingURL=Uint.js.map