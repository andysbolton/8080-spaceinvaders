var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @flow
import Uint from './Uint';
var Uint16 = /** @class */ (function (_super) {
    __extends(Uint16, _super);
    function Uint16(n) {
        return _super.call(this, 0xffff, n) || this;
    }
    Uint16.prototype.add = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num + n;
        }
        else {
            val = this.num + n.val();
        }
        var ret = new Uint16(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    Uint16.prototype.sub = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num - n;
        }
        else {
            val = this.num - n.val();
        }
        var ret = new Uint16(val & this.max);
        var _a = this.checkCarry(val), carry = _a.carry, auxCarry = _a.auxCarry;
        ret.carry = carry;
        ret.auxCarry = auxCarry;
        return ret;
    };
    return Uint16;
}(Uint));
export default Uint16;
//# sourceMappingURL=Uint16.js.map