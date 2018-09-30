#!/usr/bin/env node
const parser = require('./src/parser');
const program = require('commander');

program
  .arguments('<file>')
  .action(file => {
    parser.parse(file);
  })
  .parse(process.argv);

if (!program.args[0]) {
  console.error('Error: missing file argument');
  program.outputHelp();
  process.exit(1);
}
