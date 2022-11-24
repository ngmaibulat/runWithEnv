export async function run(program: string, args: string[]) {
    const child_process = await import("node:child_process");
    const spawn = child_process.spawn;

    const dotenv = await import("dotenv");
    dotenv.config();

    const cmd = spawn(program, args, { stdio: "inherit" });
    return cmd;
}
