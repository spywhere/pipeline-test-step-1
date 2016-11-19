let execSync = require("child_process").execSync;

execSync("git config --global push.default simple");
execSync("git config --global user.email \"noreply@travis-ci.org\"");
execSync("git config --global user.name \"Travis Pipeline\"");
execSync("git clone https://$GH_TOKEN@github.com/spywhere/pipeline-test-step-2a.git");
execSync("cd pipeline-test-step-2a");
execSync("touch $(date +%Y%m%d%H%M%S)");
execSync("git add .");
execSync("git commit -m \"add $(date +%Y%m%d%H%M%S) file\"");
execSync("git push origin");
