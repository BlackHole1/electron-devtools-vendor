/**
 * The reasons for doing so can be found here:
 *  https://github.com/MarshallOfSound/electron-devtools-installer/pull/177
 *  https://github.com/MarshallOfSound/electron-devtools-installer/issues/200
 *  https://github.com/electron/electron/pull/29695
 */
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");
const rimraf = require("rimraf");

const extensionsFolderPath = path.join(__dirname, "..", "extensions");

const extensionsList = fs.readdirSync(extensionsFolderPath);

for (const dirname of extensionsList) {
    const extensionPath = path.join(extensionsFolderPath, dirname);

    removeMetaDate(extensionPath);
    removeUnSupportManifest(extensionPath);
}

gitAddStash();

function removeMetaDate(extensionPath) {
    const metaDatePath = path.join(extensionPath, "_metadata");

    if (fs.existsSync(metaDatePath)) {
        rimraf.sync(metaDatePath);
    }
}

function removeUnSupportManifest(extensionPath) {
    const manifestPath = path.join(extensionPath, "manifest.json");

    const manifestContent = JSON.parse(
        fs.readFileSync(manifestPath, {
            encoding: "utf8",
        }),
    );

    const removeFields = [
        "minimum_chrome_version",
        "browser_action",
        "update_url",
        "homepage_url",
        "page_action",
        "short_name",
        "commands",
        "author",
    ];

    for (const field of removeFields) {
        delete manifestContent[field];
    }

    if ("permissions" in manifestContent) {
        manifestContent["permissions"] = ["storage", "<all_urls>"];
    }

    fs.writeFileSync(manifestPath, JSON.stringify(manifestContent, null, 2));
}

function gitAddStash() {
    return execSync("git add extensions", {
        cwd: path.join(__dirname, ".."),
        encoding: "utf8",
        env: process.env,
    });
}
