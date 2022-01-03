// import * as fs from 'fs/promises';
import * as fs from "fs";

const data = "This is some data";
fs.writeFile("file1.txt", data, () => console.log("file created!"));
