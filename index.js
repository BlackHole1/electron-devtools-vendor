const path = require("path");

const extensionPath = name => path.join(__dirname, "extensions", name);

module.exports.REACT_DEVTOOLS = extensionPath("react-devtools");
module.exports.EMBER_INSPECTOR = extensionPath("ember-inspector");
