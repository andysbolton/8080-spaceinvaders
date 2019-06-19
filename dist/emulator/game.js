import Emulator from './emulator';
var app = new Emulator({
    debug: true,
});
try {
    app.run();
}
catch (error) {
    console.log(app.instructionNumber);
    console.log(error);
}
//# sourceMappingURL=game.js.map