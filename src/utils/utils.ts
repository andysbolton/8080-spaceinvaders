import Uint8 from '../models/Uint8';
import Uint16 from '../models/Uint16';

export default class {
  static concat = (most: Uint8, least: Uint8): Uint16 => {
    return new Uint16((most.val() << 8) | least.val());
  }

  static split = (n: Uint16) => {
    const high = n.val() >> 8;
    const low = n.val() & 0xff;
    return {
      high: new Uint8(high),
      low: new Uint8(low)
    };
  };
};


