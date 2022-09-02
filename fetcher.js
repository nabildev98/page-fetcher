const request = require("request");
const fs = require("fs");

const domain = process.argv[2];
const path = process.argv[3];

request(domain, (error, response, body) => {
  if (error) {
    console.log("Error!:", error);
  }
  fs.writeFile(`${path}`, body, function (error) {
    if (error) {
      console.log("Error!:", error);
    } else {
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`
      );
    }
  });
});
