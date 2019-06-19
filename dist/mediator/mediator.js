var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    Mediator.prototype.registerIn = function (colleague) {
        this.in = colleague;
    };
    Mediator.prototype.registerOut = function (colleague) {
        this.out = colleague;
    };
    Mediator.prototype.sendOut = function (port, val) {
        if (!this.in) {
            throw new Error('`in` is not initialized');
        }
        this.in.receive(port, val);
    };
    Mediator.prototype.sendIn = function (port, val) {
        if (!this.out) {
            throw new Error('`out` is not initialized');
        }
        this.out.receive(port, val);
    };
    return Mediator;
}());
export { Mediator };
//# sourceMappingURL=Mediator.js.map