import Uint8 from '../models/Uint8';
import Uint16 from '../models/Uint16';
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.concat = function (most, least) {
        return new Uint16((most.val() << 8) | least.val());
    };
    default_1.split = function (n) {
        var high = n.val() >> 8;
        var low = n.val() & 0xff;
        return {
            high: new Uint8(high),
            low: new Uint8(low)
        };
    };
    return default_1;
}());
export default default_1;
;
//# sourceMappingURL=utils.js.map