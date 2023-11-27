<div align="center">
    <h2>electron-devtools-vendor</h2>
    <img alt="MIT" src="https://img.shields.io/github/license/BlackHole1/electron-devtools-vendor?color=9cf&style=flat-square">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/BlackHole1/electron-devtools-vendor?color=9cf&style=flat-square">
    <a href="https://www.npmjs.com/package/electron-devtools-vendor">
        <img alt="Npm version" src="https://img.shields.io/npm/v/electron-devtools-vendor?color=9cf&style=flat-square">
    </a>
</div>

### Feature

#### unrecognized manifest key warning

when using this library, you will not see the following warning:

```txt
Unrecognized manifest key 'browser_action'.
Unrecognized manifest key 'minimum_chrome_version'.
Unrecognized manifest key 'short_name'.
Unrecognized manifest key 'update_url'.
Permission 'activeTab' is unknown or URL pattern is malformed.
Cannot load extension with file or directory name _metadata. Filenames starting with "_" are reserved for use by the system.
```

#### namespace with current repo

it will not download the crx to a directory on the current computer, but will contain the source code of the plugin directly in the _node_modules_

> Don't worry about the size of your project, as you should only use it in a development environment, and even if you need to use it in a formal environment, we have `tree snaking` to help.

#### network

because the plugin source code is in `node_modules`, it will have a greater success rate of downloading.

### Install

```shell
$ yarn add electron-devtools-vendor -D
// or
$ npm install electron-devtools-vendor -D
// or
$ pnpm add electron-devtools-vendor -D
```

### Usage

```typescript
const { session } = require("electron");

if (process.env.NODE_ENV === "development") {
    const { REACT_DEVELOPER_TOOLS } = require("electron-devtools-vendor");
    session.defaultSession.loadExtension(REACT_DEVELOPER_TOOLS, {
        allowFileAccess: true,
    });
}
```

### Extension List

| name                   | import name                                                   | hash                                                                           |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| REACT_DEVELOPER_TOOLS  | [react-developer-tools](./extensions/react-developer-tools)   | [fmkadmapgofadopljbjfkapdkoienihi](./crx/fmkadmapgofadopljbjfkapdkoienihi.crx) |
| EMBER_INSPECTOR        | [ember-inspector](./extensions/ember-inspector)               | [bmdblncegkenkacieihfhpjfppoconhi](./crx/bmdblncegkenkacieihfhpjfppoconhi.crx) |
| VUEJS_DEVTOOLS         | [vuejs-devtools](./extensions/vuejs-devtools)                 | [nhdogjmejiglipccpnnnanhbledajbpd](./crx/nhdogjmejiglipccpnnnanhbledajbpd.crx) |
| REDUX_DEVTOOLS         | [redux-devtools](./extensions/redux-devtools)                 | [lmhkpmbekcpmknklioeibfkpmmfibljd](./crx/lmhkpmbekcpmknklioeibfkpmmfibljd.crx) |
| APOLLO_DEVELOPER_TOOLS | [apollo-developer-tools](./extensions/apollo-developer-tools) | [jdkknkkbebbapilgoeccciglkfbmbnfm](./crx/jdkknkkbebbapilgoeccciglkfbmbnfm.crx) |
| MOBX_DEVTOOLS          | [mobx-devtools](./extensions/mobx-devtools)                   | [pfgnfdagidkfgccljigdamigbcnndkod](./crx/pfgnfdagidkfgccljigdamigbcnndkod.crx) |
| JQUERY_DEBUGGER        | [jquery-debugger](./extensions/jquery-debugger)               | [dbhhnnnpaeobfddmlalhnehgclcmjimi](./crx/dbhhnnnpaeobfddmlalhnehgclcmjimi/crx) |
| BACKBONE_DEBUGGER      | [backbone-debugger](./extensions/backbone-debugger)           | [bhljhndlimiafopmmhjlgfpnnchjjbhd](./crx/bhljhndlimiafopmmhjlgfpnnchjjbhd.crx) |

### Add New Extension

```shell
# this is example
$ yarn run add fmkadmapgofadopljbjfkapdkoienihi --name react-devtools
```

### Other

Thanks to [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer) for the inspiration, it was great but there were a few issues that forced me to develop this project, details can be found at: [electron-devtools-installer#200](https://github.com/MarshallOfSound/electron-devtools-installer/issues/200)
