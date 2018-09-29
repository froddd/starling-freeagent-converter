const parser = require('./src/parser');

const inputFile = process.argv[2];

if (!inputFile) {
  console.log('Please supply a file');
  process.exit(1);
}

parser.parse(inputFile);
