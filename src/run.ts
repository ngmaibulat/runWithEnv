#!/usr/bin/env node

import { run } from "./lib.js";

if (process.argv.length < 3) {
    console.error("Please provide command to run");
    process.exit(1);
}

const program = process.argv[2];
const args = process.argv.slice(3);

const cmd = run(program, args);
