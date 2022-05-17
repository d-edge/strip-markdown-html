import fs from "fs";
const fsPromises = fs.promises;

const core = require("@actions/core");
const io = require("@actions/io");
const glob = require("glob");

async function orderFile(path, encoding, property) {
  const content = await fsPromises.readFile(path, encoding);
  const items = JSON.parse(content);
  items.sort((a, b) => a[property].localeCompare(b[property]));
  const data = JSON.stringify(items, undefined, 2);
  fsPromises.writeFile(path, data, encoding);
}

async function orderFiles(files, encoding, property) {
  var orderTasks = files.map((x) => orderFile(x, encoding, property));
  await Promise.all(orderTasks);
}

try {
  const pattern = core.getInput("pattern");
  const property = core.getInput("property");
  const encoding = core.getInput("encoding");

  glob(pattern, (err, files) => {
    if (err) {
      throw err;
    } else {
      orderFiles(files, encoding, property);
    }
  });
} catch (error) {
  core.setFailed(error.message);
}
