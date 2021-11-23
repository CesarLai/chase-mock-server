#!/usr/bin/env node

import path from 'path'
import chalk from 'chalk'
import yargs from 'yargs'

const USAGE = `
  Usage: cl-mock [options]
`

const args = yargs
  .usage(USAGE)
  .command('create', 'create mock module')
  .alias('h', 'help')
  .alias('v', 'version')
  .help().argv
