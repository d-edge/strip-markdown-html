const fs = require('fs');
const path = require('path');
const core = require('@actions/core');
const io = require('@actions/io');
const remark = require('remark');
const strip = require('remark-strip-html');

try {
  const inputPath = core.getInput('input-path');
  const outputPath = core.getInput('output-path');
  const encoding = core.getInput('encoding');

  const inputText = fs.readFileSync(inputPath, encoding);

  remark()
    .use(strip)
    .process(inputText, (err, outputText) =>
      {
        if (err) throw err;
        io.mkdirP(path.dirname(outputPath));
        fs.writeFileSync(outputPath, outputText, encoding);
      });
} catch (error) {
  core.setFailed(error.message);
}