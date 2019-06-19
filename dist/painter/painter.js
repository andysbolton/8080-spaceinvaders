import ByteArray from '../emulator/models/ByteArray';
var Painter = /** @class */ (function () {
    function Painter(mediator) {
        this.memory = ByteArray.create();
        this.unimplementedInstruction = function (port, val) {
            throw new Error("Unimplemented code: port " + port + " with value " + val);
        };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext && this.canvas.getContext('2d');
        this.mediator = mediator;
    }
    Painter.prototype.send = function (port, val) { };
    Painter.prototype.receive = function (port, val) {
        this.write(port, val);
    };
    Painter.prototype.write = function (port, val) {
        switch (port) {
            case 2: // shift register result offset (bits 0,1,2)
                console.log('yep');
                // this.unimplementedInstruction(port, val);
                break;
            case 3: //sound related
                this.unimplementedInstruction(port, val);
                break;
            case 4: // fill shift register
                this.unimplementedInstruction(port, val);
                break;
            case 5: // sound related
                this.unimplementedInstruction(port, val);
                break;
            case 6: // debug port
                this.unimplementedInstruction(port, val);
                break;
            default:
                break;
        }
    };
    return Painter;
}());
export { Painter };
//# sourceMappingURL=painter.js.map