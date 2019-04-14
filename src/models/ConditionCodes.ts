// @flow
import Uint8 from './Uint8';

export default class ConditionCodes {
  z: Uint8 = new Uint8();

  s: Uint8 = new Uint8();

  p: Uint8 = new Uint8();

  cy: Uint8 = new Uint8();

  ac: Uint8 = new Uint8();

  pad: Uint8 = new Uint8();

  getPsw(): Uint8 {
    const val =
      this.s.val() +
      this.z.val() +
      '0' +
      this.ac.val() +
      '0' +
      this.p.val() +
      '1' +
      this.cy.val();
    return new Uint8(parseInt(val, 10));
  }
}
