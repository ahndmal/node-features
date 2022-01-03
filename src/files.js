// import * as fs from 'fs/promises';
import * as fs from "fs";
import { readFile } from "fs";

const data = "This is some data";
fs.writeFile("file1.txt", data, () => console.log("file created!"));

readFile("./file1.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
