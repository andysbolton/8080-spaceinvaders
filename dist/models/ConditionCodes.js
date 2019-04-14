"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
var Uint8_1 = __importDefault(require("./Uint8"));
var ConditionCodes = /** @class */ (function () {
    function ConditionCodes() {
        this.z = new Uint8_1.default();
        this.s = new Uint8_1.default();
        this.p = new Uint8_1.default();
        this.cy = new Uint8_1.default();
        this.ac = new Uint8_1.default();
        this.pad = new Uint8_1.default();
    }
    ConditionCodes.prototype.getPsw = function () {
        var val = this.s.val() +
            this.z.val() +
            '0' +
            this.ac.val() +
            '0' +
            this.p.val() +
            '1' +
            this.cy.val();
        return new Uint8_1.default(parseInt(val, 10));
    };
    return ConditionCodes;
}());
exports.default = ConditionCodes;
//# sourceMappingURL=ConditionCodes.js.map