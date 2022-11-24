import child_process from "node:child_process";
import * as dotenv from "dotenv";
dotenv.config();

// console.log(process.env);
// console.log(process.argv);
// console.log(process.argv.slice(2));

if (process.argv.length < 3) {
    console.error("Please provide command to run");
    process.exit(1);
}

const program = process.argv[2];
const args = process.argv.slice(3);
const spawn = child_process.spawn;

const cmd = spawn(program, args, { stdio: "inherit" });

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
