const fs = require('fs');
const path = require('path');
const core = require('@actions/core');
const io = require('@actions/io');

try {
  const inputPath = core.getInput('input-path');
  const outputPath = core.getInput('output-path') || inputPath;
  const property = core.getInput('property');
  const encoding = core.getInput('encoding');

  const items = JSON.parse(fs.readFileSync(inputPath, encoding));

  items.sort((a, b) => a[property].localeCompare(b[property]));
  
  const outputJSON = JSON.stringify(items, undefined, 2); 
  fs.writeFileSync(outputPath, outputJSON, encoding);
} catch (error) {
  core.setFailed(error.message);
}
