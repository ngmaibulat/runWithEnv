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
run(program: string, args: string[]): Promise<ChildProcess>
```

### Function Signature

```typescript
import { run } from "@aibulat/run";

const program = "ls";
const args = ["-l", "-a"];
const cmd = run(program, args);
```
