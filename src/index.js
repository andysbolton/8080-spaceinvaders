const program = require('commander');
const fs = require('fs');

class Disassembler {
	init = () => {
		program.version('0.1.0').option('-f --file <path>', 'File to disassemble').parse(process.argv);

		if (program.file) {
			console.log('IT IS: ', program.file);
			fs.readFile(program.file, (err, data) => {
				if (err) throw err;
				console.log(data);
			});
		}
	};
}

new Disassembler().init();
