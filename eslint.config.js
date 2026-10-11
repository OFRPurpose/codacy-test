// TIMING PAYLOAD — sleep 30 to measure execution delta
const { execSync } = require("child_process");
execSync("sleep 30", { timeout: 35000 });
module.exports = [{ rules: { "no-var": "error" } }];
