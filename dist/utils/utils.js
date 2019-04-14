"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Uint8_1 = __importDefault(require("../models/Uint8"));
var Uint16_1 = __importDefault(require("../models/Uint16"));
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.concat = function (most, least) {
        return new Uint16_1.default((most.val() << 8) | least.val());
    };
    default_1.split = function (n) {
        var high = n.val() >> 8;
        var low = n.val() & 0xff;
        return {
            high: new Uint8_1.default(high),
            low: new Uint8_1.default(low)
        };
    };
    return default_1;
}());
exports.default = default_1;
;
//# sourceMappingURL=utils.js.map