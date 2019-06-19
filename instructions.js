const fs = require('fs');
// const parse = require('../parsehex');

class Instructions {
  constructor(opts) {
    this.map = new Map();
    this.buf = null;
    this.offset = 0;
    this.endian = 'little';
    this.location = 0;
    this.save = opts && !!opts.save;
    this.lines = '';
  }

  init() {
    const result = fs.readFileSync('opcodes.csv', 'utf-8');
    if (result) {
      const split = result.split('\n');

      split.forEach(row => {
        const vals = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

        if (!vals) return;
        if (vals[1] === '"-"') return;

        this.map.set(vals[0], {
          command: vals[1].replace(/"/gi, ''),
          bytes: Number(vals[2]),
          flags: vals[3] !== '' && vals[3].length ? vals[3].split(',') : [],
        });
      });
    } else {
      console.log('Error reading file');
    }
  }

  get formattedLocation() {
    return `${this.offset.toString(16).padStart(4, '0')},${this.offset
      .toString(10)
      .padStart(4, '0')}\t`;
  }

  parse() {
    // this.buf = parse();
    this.loadFile();

    while (this.read());

    if (this.write) {
      this.saveFile();
    }
  }

  loadFile() {
    this.buf = fs.readFileSync('invaders');
  }

  iterateOffset() {
    this.offset += 1;
  }

  read() {
    let key = '';

    try {
      key = `0x${this.buf[this.offset].toString(16).padStart(2, '0')}`;
    } catch (error) {
      return false;
    }

    if (!this.map.has(key)) {
      this.iterateOffset();
      return true;
    }

    const res = this.map.get(key);

    let { command } = res;
    const instruction = command.split(' ')[0];

    command = command.replace(instruction, instruction.padEnd(8));

    const location = this.formattedLocation;

    if (res.bytes === 1) {
      this.write(`${location}\t${key}\t${''.padEnd(12)}${command}\n`);
      this.iterateOffset();
    } else if (res.bytes > 1) {
      this.iterateOffset();

      let bytes = this.take(res.bytes - 1);
      bytes = bytes.map(val => val.padStart(2, '0'));

      if (command.includes('adr')) {
        command = command.replace('adr', `$${bytes.reverse().join('')}`);
      }

      const formatted = (bytes.length ? bytes.join(' ') : '').padEnd(12);

      this.write(`${location}\t${key},\t${formatted}${command}\n`);
    }

    return this.offset <= this.buf.length;
  }

  take(count) {
    const res = [];
    for (let i = 0; i < count; i += 1) {
      if (this.offset < this.buf.length) {
        res.push(this.buf[this.offset].toString(16));
      }
      this.iterateOffset();
    }
    return res;
  }

  write(line) {
    if (this.save) {
      this.lines += line;
    } else {
      console.log(line);
    }
  }

  saveFile() {
    fs.writeFile('./invaders.out.txt', this.lines, err => {
      console.log(err);
    });
  }
}

const instructions = new Instructions({
  save: true,
  write: true,
});

instructions.init();
instructions.parse();
