const fs = require("fs");
const path = require("path");
const file1 = "files/file1.txt";
const file2 = "files/file2.txt";
const o = (add) => {
  return new Promise((resolve, reject) => {
    fs.readFile(add, "utf8", function (error, work) {
      if (error) {
        console.log("request Rejected");
        reject(error);
      } else {
        console.log(work);
        resolve(work);
      }
    });
  });
};

let e = "";
let r = "";
e = o(file1).then(() => {
  r = o(file2);
});
// fs.writeFile("files/file3.txt", e + r, { flag: append }, () => {});
// return;
fs.appendFile("files/file3.txt", e + r, (err) => {
  if (err) throw err;
  console.log(`The ${e} ${r} was appended to file!`);
});
