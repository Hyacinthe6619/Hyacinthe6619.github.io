const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/Hyacinthe6619/Hyacinthe6619.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
