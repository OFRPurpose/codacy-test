const { execSync } = require("child_process");
execSync("sleep 30", { timeout: 40000 });
module.exports = [{ rules: { "no-var": "warn" } }];
