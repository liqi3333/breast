const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const screenshotDir = path.join(rootDir, 'assets', 'screenshots');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function saveCapture(win, filename) {
  const image = await win.webContents.capturePage();
  fs.writeFileSync(path.join(screenshotDir, filename), image.toPNG());
}

async function run() {
  fs.mkdirSync(screenshotDir, { recursive: true });

  const win = new BrowserWindow({
    width: 1440,
    height: 1180,
    backgroundColor: '#f5f9fc',
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  await win.loadFile(path.join(rootDir, 'index.html'));
  await wait(1200);
  await saveCapture(win, 'overview.png');

  await win.webContents.executeJavaScript(`
    const header = document.getElementById('collapseHeader');
    if (header) header.click();
    const panel = document.getElementById('managementPanel');
    if (panel) panel.scrollIntoView({ block: 'start', behavior: 'instant' });
  `);
  await wait(800);
  await saveCapture(win, 'treatment-plan.png');

  await win.close();
  app.quit();
}

app.disableHardwareAcceleration();
app.whenReady().then(run).catch(err => {
  console.error(err);
  app.exit(1);
});
