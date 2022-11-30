#! /usr/bin/env node
const program = require("commander").program;
const list = require('./commands/list')
const add = require('./commands/add');
const markDone = require('./commands/markDone')
program
    .command('list')
    .description("List all the TODO tasks")
    .action(list)

program
    .command('add <task>')
    .description("Add a new task")
    .action(add)

program
    .command('mark-done')
    .description("mark the tasks")
    .option('-t,--tasks <tasks..>','the tasks to mark done if not specified')
    .action(markDone)

program.parse();