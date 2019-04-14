const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const options = {
  uri: 'http://www.emulator101.com/reference/8080-by-opcode.html',
  transform(body) {
    return cheerio.load(body);
  },
};

const saveFile = (content) => {
  const data = new Uint8Array(Buffer.from(content));
  fs.writeFile('opcodes.csv', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

const parseData = ($) => {
  const result = [];

  $('tbody').children('tr').each((i, tr) => {
    const tds = $(tr).children('td');
    if (tds.length) {
      const hex = $(tds.get(0)).text().trim();
      const opCode = $(tds.get(1)).text().trim();
      const bytes = Number($(tds.get(2)).text().trim());
      const flags = $(tds.get(3)).text().trim();
      result.push(`${hex},"${opCode}",${bytes},"${flags}"\n`);
    }
  });

  saveFile(result.join(''));
};

rp(options)
  .then((data) => {
    parseData(data);
  })
  .catch((err) => {
    console.log(err);
  });
