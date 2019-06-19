// @flow
import Uint8 from './Uint8';
import Uint16 from './Uint16';
import ConditionCodes from './ConditionCodes';
import utils from '../utils/utils';
import ByteArray from './ByteArray';
var CpuState = /** @class */ (function () {
    function CpuState() {
        this.a = new Uint8();
        this.b = new Uint8();
        this.c = new Uint8();
        this.d = new Uint8();
        this.e = new Uint8();
        this.h = new Uint8();
        this.l = new Uint8();
        this.sp = new Uint16();
        this.pc = new Uint16();
        this.memory = ByteArray.create();
        this.cc = new ConditionCodes();
        this.intEnable = new Uint8();
    }
    Object.defineProperty(CpuState.prototype, "bc", {
        get: function () {
            return utils.concat(this.b, this.c);
        },
        set: function (bytes) {
            var _a = utils.split(bytes), high = _a.high, low = _a.low;
            this.b = high;
            this.c = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "de", {
        get: function () {
            return utils.concat(this.d, this.e);
        },
        set: function (bytes) {
            var _a = utils.split(bytes), high = _a.high, low = _a.low;
            this.d = high;
            this.e = low;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CpuState.prototype, "hl", {
        get: function () {
            return utils.concat(this.h, this.l);
        },
        set: function (bytes) {
            var _a = utils.split(bytes), high = _a.high, low = _a.low;
            this.h = high;
            this.l = low;
        },
        enumerable: true,
        configurable: true
    });
    return CpuState;
}());
export default CpuState;
//# sourceMappingURL=CpuState.js.map