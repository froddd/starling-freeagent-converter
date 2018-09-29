const fs = require('fs');
const parser = require('../src/parser');

describe('Starling to FreeAgent CSV parser', () => {
  it('generates a new CSV file', () => {
    if (fs.existsSync('test/mock/freeagent-testFile.csv')) {
      fs.unlinkSync('test/mock/freeagent-testFile.csv');
    }

    parser.parse('test/mock/testFile.csv');
    expect(fs.existsSync('test/mock/freeagent-testFile.csv')).toBe(true);
  });

  it('maps starling CSV fields to FreeAgent', () => {
    parser.parse('test/mock/testFile.csv');
    const contents = fs.readFileSync(
      'test/mock/freeagent-testFile.csv',
      'utf8'
    );
    expect(contents).toEqual('29/09/2018,-18.90,Lunch\n');
  });
});
