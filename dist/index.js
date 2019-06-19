import { Painter } from './painter/painter';
import { Emulator } from './emulator/emulator';
import { Mediator } from './mediator/Mediator';
var Main = /** @class */ (function () {
    function Main() {
        var mediator = new Mediator();
        this.emulator = new Emulator({ mediator: mediator, web: true, debug: true });
        var painter = new Painter(mediator);
        this.start();
    }
    Main.prototype.start = function () {
        this.emulator.init();
    };
    return Main;
}());
new Main();
//# sourceMappingURL=index.js.map