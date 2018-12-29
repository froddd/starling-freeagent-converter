#!/usr/bin/env node

const program = require('commander');
const parser = require('./src/parser');

program
  .arguments('<file>')
  .action(file => {
    parser.parse(file);
  })
  .parse(process.argv);

if (!program.args[0]) {
  // eslint-disable-next-line no-console
  console.error('Error: missing file argument');
  program.outputHelp();
  process.exit(1);
}
