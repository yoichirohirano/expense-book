import { execSync } from "child_process";
// import { readFileSync } from "fs";
// import * as path from "path";

// set project
execSync(`firebase use yh-expense-book`, {
  maxBuffer: 1024 * 1024,
  stdio: "inherit",
});

// const env = readFileSync(path.resolve(__dirname, "../.env"), {
//   encoding: "utf-8",
// });
// const lines = env.toString().split(/\n/g);
// lines.forEach((line) => {
//   if (!line.length) return;
//   // exclude front-end variable
//   if (/REACT_/.test(line)) return;
//   execSync(`firebase functions:config:set yh-expense-book.${line}`, {
//     maxBuffer: 1024 * 1024,
//     stdio: "inherit",
//   });
// });
