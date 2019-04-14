"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var Uint_1 = __importDefault(require("./Uint"));
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
        return {
            val: new Uint16(val & this.max),
            carry: this.checkCarry(val),
        };
    };
    Uint16.prototype.sub = function (n) {
        var val;
        if (typeof n === 'number') {
            val = this.num - n;
        }
        else {
            val = this.num - n.val();
        }
        return {
            val: new Uint16(val & this.max),
            carry: this.checkCarry(val),
        };
    };
    return Uint16;
}(Uint_1.default));
exports.default = Uint16;
//# sourceMappingURL=Uint16.js.map