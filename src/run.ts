#!/usr/bin/env node

import { run } from "./lib.js";

if (process.argv.length < 3) {
    console.error("Please provide command to run");
    process.exit(1);
}

const program = process.argv[2];
const args = process.argv.slice(3);

const cmd = run(program, args);

// cmd.stdout.pipe(process.stdout);

// process.stdin.resume();
// process.stdin.pipe(cmd.stdin);

// cmd.stdout.on("data", (data) => {
//     console.log(`stdout: ${data}`);
// });

// cmd.stderr.on("data", (data) => {
//     console.error(`stderr: ${data}`);
// });

// cmd.on("close", (code) => {
//     console.log(`child process exited with code ${code}`);
// });
