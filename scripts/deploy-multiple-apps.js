const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");

const apps = [
  "01-social-proof-section",
  // Agrega más apps aquí
];

const appsDir = path.join(__dirname, "../apps");
const tempDir = path.join(__dirname, "../gh-pages");

async function buildAndCopyApps() {
  fs.removeSync(tempDir);
  fs.mkdirpSync(tempDir);

  for (const appName of apps) {
    const appPath = path.join(appsDir, appName);
    const distPath = path.join(appPath, "dist");
    const targetPath = path.join(tempDir, "apps", appName);

    console.log(`🛠️ Build: ${appName}`);
    execSync("npm install", { cwd: appPath, stdio: "inherit" });

    execSync("npm run build", { cwd: appPath, stdio: "inherit" });

    fs.mkdirpSync(targetPath);
    fs.copySync(distPath, targetPath);
  }

  console.log("🚀 Deploying to gh-pages...");
  execSync("npx gh-pages -d gh-pages");
}

buildAndCopyApps();
