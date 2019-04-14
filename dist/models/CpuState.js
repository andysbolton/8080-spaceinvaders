"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Uint8_1 = __importDefault(require("./Uint8"));
var Uint16_1 = __importDefault(require("./Uint16"));
var ConditionCodes_1 = __importDefault(require("./ConditionCodes"));
var utils_1 = __importDefault(require("../utils/utils"));
var ByteArray_1 = __importDefault(require("./ByteArray"));
var CpuState = /** @class */ (function () {
    function CpuState() {
        this.a = new Uint8_1.default();
        this.b = new Uint8_1.default();
        this.c = new Uint8_1.default();
        this.d = new Uint8_1.default();
        this.e = new Uint8_1.default();
        this.h = new Uint8_1.default();
        this.l = new Uint8_1.default();
        this.sp = new Uint16_1.default();
        this.pc = new Uint16_1.default();
        this.memory = ByteArray_1.default.create();
        this.cc = new ConditionCodes_1.default();
        this.intEnable = new Uint8_1.default();
    }
    Object.defineProperty(CpuState.prototype, "bc", {
        get: function () {
            return utils_1.default.concat(this.b, this.c);
        },
        set: function (bytes) {
            var _a = utils_1.default.split(bytes), high = _a.high, low = _a.low;
            this.b = high;
            this.c = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "de", {
        get: function () {
            return utils_1.default.concat(this.d, this.e);
        },
        set: function (bytes) {
            var _a = utils_1.default.split(bytes), high = _a.high, low = _a.low;
            this.d = high;
            this.e = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "hl", {
        get: function () {
            return utils_1.default.concat(this.h, this.l);
        },
        set: function (bytes) {
            var _a = utils_1.default.split(bytes), high = _a.high, low = _a.low;
            this.h = high;
            this.l = low;
        },
        enumerable: true,
        configurable: true
    });
    return CpuState;
}());
exports.default = CpuState;
//# sourceMappingURL=CpuState.js.map