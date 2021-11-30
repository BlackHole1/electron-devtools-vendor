const path = require("path");

const extensionPath = name => path.join(__dirname, "extensions", name);

module.exports.REACT_DEVELOPER_TOOLS = extensionPath("react-developer-tools");
module.exports.EMBER_INSPECTOR = extensionPath("ember-inspector");
module.exports.VUEJS_DEVTOOLS = extensionPath("vuejs-devtools");
