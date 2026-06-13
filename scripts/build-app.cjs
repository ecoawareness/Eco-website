// Precompiles the EcoAwareness app's JSX (app/js/*.jsx) into plain browser JS
// (app/js/*.js) using @babel/preset-react, so production never ships
// Babel-in-the-browser. Re-run after editing any app/js/*.jsx file:
//   node scripts/build-app.cjs
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'app', 'js');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'));

let count = 0;
for (const file of files) {
  const src = fs.readFileSync(path.join(dir, file), 'utf8');
  const { code } = babel.transformSync(src, {
    filename: file,
    configFile: false,
    babelrc: false,
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    compact: false,
    comments: false,
  });
  const out = file.replace(/\.jsx$/, '.js');
  fs.writeFileSync(path.join(dir, out), code, 'utf8');
  count++;
}
console.log(`Compiled ${count} JSX files -> JS in app/js/`);
