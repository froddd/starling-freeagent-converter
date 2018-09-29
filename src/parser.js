const csvParse = require('csv-parse/lib/sync');
const csvStringify = require('csv-stringify/lib/sync');
const fs = require('fs');
const path = require('path');

const starlingHeaders = {
  date: 'Date',
  party: 'Counter Party',
  ref: 'Reference',
  type: 'Type',
  amount: 'Amount (GBP)',
  balance: 'Balance (GBP)'
};

const parse = inputFile => {
  const outputPath = generateFilePath(inputFile);
  const inputData = fs.readFileSync(inputFile, 'utf8');
  const records = csvParse(inputData, {
    columns: true,
    skip_empty_lines: true
  });

  const newRecords = records
    .filter(row => row[starlingHeaders.date])
    .map(row => ({
      date: row[starlingHeaders.date],
      amount: row[starlingHeaders.amount],
      description: row[starlingHeaders.ref]
    }));

  const outputData = csvStringify(newRecords);

  fs.writeFileSync(outputPath, outputData);
  console.log('Generated ' + outputPath);
};

const generateFilePath = inputFile => {
  const basename = path.basename(inputFile, '.csv');
  return inputFile.replace(basename, basename + '-FreeAgent');
};

module.exports = {
  parse,
  generateFilePath
};
