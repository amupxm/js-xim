"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xim_1 = __importDefault(require("../xim"));
test('should create two randoms', () => {
    expect(new xim_1.default().generate()).not.toEqual(new xim_1.default().generate());
});
test('if xim be one instance , then should create two randoms too', () => {
    const localXim = new xim_1.default();
    expect(localXim.generate()).not.toEqual(localXim.generate());
});
//# sourceMappingURL=xim.spec.js.map