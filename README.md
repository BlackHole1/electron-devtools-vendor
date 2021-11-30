# electron-devtools-vendor

## Install

```shell
$ yarn add electron-devtools-vendor -D
// or
$ npm install electron-devtools-vendor -D
```

## Usage

```typescript
const { session } = require("electron");

if (process.env.NODE_ENV === "development") {
    const { REACT_DEVTOOLS } = require("electron-devtools-vendor");
    session.loadExtension(REACT_DEVTOOLS, {
        allowFileAccess: true,
    });
}
```

## Extension List

| name                   | import name                                                   | hash                                                                           |
| ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| REACT_DEVELOPER_TOOLS  | [react-developer-tools](./extensions/react-developer-tools)   | [fmkadmapgofadopljbjfkapdkoienihi](./crx/fmkadmapgofadopljbjfkapdkoienihi.crx) |
| EMBER_INSPECTOR        | [ember-inspector](./extensions/ember-inspector)               | [bmdblncegkenkacieihfhpjfppoconhi](./crx/bmdblncegkenkacieihfhpjfppoconhi.crx) |
| VUEJS_DEVTOOLS         | [vuejs-devtools](./extensions/vuejs-devtools)                 | [nhdogjmejiglipccpnnnanhbledajbpd](./crx/nhdogjmejiglipccpnnnanhbledajbpd.crx) |
| VUEJS3_DEVTOOLS        | [vuejs3-devtools](./extensions/vuejs3-devtools)               | [ljjemllljcmogpfapbkkighbhhppjdbg](./crx/ljjemllljcmogpfapbkkighbhhppjdbg.crx) |
| REDUX_DEVTOOLS         | [redux-devtools](./extensions/redux-devtools)                 | [lmhkpmbekcpmknklioeibfkpmmfibljd](./crx/lmhkpmbekcpmknklioeibfkpmmfibljd.crx) |
| APOLLO_DEVELOPER_TOOLS | [apollo-developer-tools](./extensions/apollo-developer-tools) | [jdkknkkbebbapilgoeccciglkfbmbnfm](./crx/jdkknkkbebbapilgoeccciglkfbmbnfm.crx) |
| MOBX_DEVTOOLS          | [mobx-devtools](./extensions/mobx-devtools)                   | [pfgnfdagidkfgccljigdamigbcnndkod](./crx/pfgnfdagidkfgccljigdamigbcnndkod.crx) |
| CYCLEJS_DEVTOOL        | [cyclejs-devtool](./extensions/cyclejs-devtool)               | [dfgplfmhhmdekalbpejekgfegkonjpfp](./crx/dfgplfmhhmdekalbpejekgfegkonjpfp.crx) |
| ANGULARJS_BATARANG     | [angularjs-batarang](./extensions/angularjs-batarang)         | [ighdmehidhipcmcojjgiloacoafjmpfk](./crx/ighdmehidhipcmcojjgiloacoafjmpfk.crx) |
| JQUERY_DEBUGGER        | [jquery-debugger](./extensions/jquery-debugger)               | [dbhhnnnpaeobfddmlalhnehgclcmjimi](./crx/dbhhnnnpaeobfddmlalhnehgclcmjimi/crx) |

## Add New Extension

```shell
# this is example
$ yarn run add fmkadmapgofadopljbjfkapdkoienihi --name react-devtools
```
