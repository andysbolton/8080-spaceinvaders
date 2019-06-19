"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emulator_1 = __importDefault(require("./emulator"));
var app = new emulator_1.default({
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