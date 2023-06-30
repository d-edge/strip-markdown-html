const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const core = require('@actions/core');
const io = require('@actions/io');
const {remark} = require('remark');
const strip = require('remark-strip-html');

try {
  const inputPath = core.getInput('input-path');
  const outputPath = core.getInput('output-path') || inputPath;
  const encoding = core.getInput('encoding');

  const inputText = fs.readFileSync(inputPath, encoding);

  remark()
    .use(strip)
    .process(inputText, async (err, outputFile) =>
      {
        if (err) throw err;
        await io.mkdirP(path.dirname(outputPath));
        const outputText = String(outputFile).trim();
        await fsp.writeFile(outputPath, outputText, encoding);
      });
} catch (error) {
  core.setFailed(error);
}
