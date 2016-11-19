var execSync = require("child_process").execSync;

execSync("git config --global push.default simple");
execSync("git config --global user.email \"noreply@travis-ci.org\"");
execSync("git config --global user.name \"Travis Pipeline\"");
execSync("git clone https://$GH_TOKEN@github.com/spywhere/pipeline-test-step-2a.git");
execSync("touch $(date +%Y%m%d%H%M%S)", {
    cwd: "./pipeline-test-step-2a"
});
execSync("git add .", {
    cwd: "./pipeline-test-step-2a"
});
execSync("git commit -m \"add $(date +%Y%m%d%H%M%S) file\"", {
    cwd: "./pipeline-test-step-2a"
});
execSync("git push origin", {
    cwd: "./pipeline-test-step-2a"
});
