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
var Uint8_1 = __importDefault(require("./Uint8"));
var ByteArray = /** @class */ (function (_super) {
    __extends(ByteArray, _super);
    function ByteArray() {
        var _this = _super.call(this) || this;
        _this.max = 0;
        return _this;
    }
    ByteArray.create = function () {
        return Object.create(ByteArray.prototype);
    };
    ByteArray.prototype.alloc = function (n) {
        this.max = n;
        this.fill(new Uint8_1.default(), n);
    };
    ByteArray.prototype.set = function (n) {
        var _this = this;
        n.forEach(function (val, indx) {
            _this[indx] = new Uint8_1.default(val);
        });
    };
    return ByteArray;
}(Array));
exports.default = ByteArray;
//# sourceMappingURL=ByteArray.js.map