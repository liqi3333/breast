const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));
const distHtml = path.join(root, 'dist-html');
const desktopSrc = path.join(root, 'index.html');
const mobileSrc = path.join(root, 'mobile.html');
const desktopOutput = path.join(distHtml, `Breast-TNM-Tool-${pkg.version}.html`);
const mobileOutput = path.join(distHtml, `Breast-TNM-Tool-mobile-${pkg.version}.html`);

fs.mkdirSync(distHtml, { recursive: true });
fs.copyFileSync(desktopSrc, desktopOutput);
fs.copyFileSync(mobileSrc, mobileOutput);

console.log(desktopOutput);
console.log(mobileOutput);
