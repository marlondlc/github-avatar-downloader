var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    // ...

    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
        headers: {
            'User-Agent': 'request',
            'Authorization': 'Authorization'
        }
    };

}

getRepoContributors("jquery", "jquery", function (err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});




