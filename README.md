### @aibulat/run

Run a Process with specified ENV vars loaded

### Use as CLI

- create a .env file
- run: `npx @aibulat/run@latest <cmd>`

### CLI samples:

```sh
npx @aibulat/run@latest ls -la
npx @aibulat/run@latest cat package.json
npx @aibulat/run@latest mysql -uroot -p
npx @aibulat/run@latest bash
npx @aibulat/run@latest node somescript.js
```

### Use API

```typescript
import { run } from "@aibulat/run";

const program = "ls";
const args = ["-l", "-a"];
const cmd = run(program, args);
```

### Function Signature

```typescript
run(program: string, args: string[]): Promise<ChildProcess>
```

### CJS is not supported

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "ES2022" /* Specify what module code is generated. */,
    "moduleResolution": "nodenext"
  }
}
```

`package.json`:

```json
{
  "type": "module"
}
```
