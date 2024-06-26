const path = require("path");

const extensionPath = name => path.join(__dirname, "extensions", name);

module.exports.REACT_DEVELOPER_TOOLS = extensionPath("react-developer-tools");
module.exports.EMBER_INSPECTOR = extensionPath("ember-inspector");
module.exports.VUEJS_DEVTOOLS = extensionPath("vuejs-devtools");
module.exports.VUEJS3_DEVTOOLS = extensionPath("vuejs3-devtools");
module.exports.REDUX_DEVTOOLS = extensionPath("redux-devtools");
module.exports.APOLLO_DEVELOPER_TOOLS = extensionPath("apollo-developer-tools");
module.exports.MOBX_DEVTOOLS = extensionPath("mobx-devtools");
module.exports.CYCLEJS_DEVTOOL = extensionPath("cyclejs-devtool");
module.exports.ANGULARJS_BATARANG = extensionPath("angularjs-batarang");
module.exports.JQUERY_DEBUGGER = extensionPath("jquery-debugger");
module.exports.BACKBONE_DEBUGGER = extensionPath("backbone-debugger");
