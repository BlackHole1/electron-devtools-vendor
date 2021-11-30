/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 35554:
/***/ (() => {



/***/ }),

/***/ 45842:
/***/ (() => {



/***/ }),

/***/ 32301:
/***/ (() => {



/***/ }),

/***/ 88582:
/***/ (() => {



/***/ }),

/***/ 97154:
/***/ (() => {



/***/ }),

/***/ 93773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35554);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _api__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45842);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _app__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _app__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32301);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _component__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _component__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88582);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _context__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _context__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97154);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _hooks__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _hooks__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26952);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _util__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _util__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








/***/ }),

/***/ 26952:
/***/ (() => {



/***/ }),

/***/ 68496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ HOOK_SETUP),
/* harmony export */   "X": () => (/* binding */ HOOK_PLUGIN_SETTINGS_SET)
/* harmony export */ });
var HOOK_SETUP = 'devtools-plugin:setup';
var HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';


/***/ }),

/***/ 29198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y5": () => (/* binding */ getDevtoolsGlobalHook),
/* harmony export */   "U9": () => (/* binding */ getTarget),
/* harmony export */   "jA": () => (/* binding */ isProxyAvailable)
/* harmony export */ });
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof __webpack_require__.g !== 'undefined'
            ? __webpack_require__.g
            : {};
}
var isProxyAvailable = typeof Proxy === 'function';


/***/ }),

/***/ 57275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupDevtoolsPlugin": () => (/* binding */ setupDevtoolsPlugin)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29198);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68496);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65427);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93773);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(["default","setupDevtoolsPlugin"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _api__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64930);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _plugin__WEBPACK_IMPORTED_MODULE_1__) if(["default","setupDevtoolsPlugin"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _plugin__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    var target = (0,_env__WEBPACK_IMPORTED_MODULE_2__/* .getTarget */ .U9)();
    var hook = (0,_env__WEBPACK_IMPORTED_MODULE_2__/* .getDevtoolsGlobalHook */ .y5)();
    var enableProxy = _env__WEBPACK_IMPORTED_MODULE_2__/* .isProxyAvailable */ .jA && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(_const__WEBPACK_IMPORTED_MODULE_3__/* .HOOK_SETUP */ .q, pluginDescriptor, setupFn);
    }
    else {
        var proxy = enableProxy ? new _proxy__WEBPACK_IMPORTED_MODULE_4__/* .ApiProxy */ .B(pluginDescriptor, hook) : null;
        var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            { setupFn(proxy.proxiedTarget); }
    }
}


/***/ }),

/***/ 64930:
/***/ (() => {



/***/ }),

/***/ 65427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ApiProxy)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68496);

class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        var defaultSettings = {};
        if (plugin.settings) {
            for (var id in plugin.settings) {
                var item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        var localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        var currentSettings = Object.assign({}, defaultSettings);
        try {
            var raw = localStorage.getItem(localSettingsSaveId);
            var data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
        };
        hook.on(_const__WEBPACK_IMPORTED_MODULE_0__/* .HOOK_PLUGIN_SETTINGS_SET */ .X, (pluginId, value) => {
            if (pluginId === this.plugin.id) {
                this.fallbacks.setSettings(value);
            }
        });
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (var item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (var item$1 of this.targetQueue) {
            item$1.resolve(await this.target[item$1.method](...item$1.args));
        }
    }
}


/***/ }),

/***/ 37863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevtoolsPluginApiInstance = exports.DevtoolsApi = void 0;
var shared_utils_1 = __webpack_require__(19746);
var hooks_1 = __webpack_require__(87734);
var pluginOn = [];
class DevtoolsApi {
    constructor(backend, ctx) {
        this.stateEditor = new shared_utils_1.StateEditor();
        this.backend = backend;
        this.ctx = ctx;
        this.bridge = ctx.bridge;
        this.on = new hooks_1.DevtoolsHookable(ctx);
    }
    async callHook(eventType, payload, ctx = this.ctx) {
        payload = await this.on.callHandlers(eventType, payload, ctx);
        for (var on of pluginOn) {
            payload = await on.callHandlers(eventType, payload, ctx);
        }
        return payload;
    }
    async transformCall(callName, ...args) {
        var payload = await this.callHook("transformCall" /* TRANSFORM_CALL */, {
            callName,
            inArgs: args,
            outArgs: args.slice(),
        });
        return payload.outArgs;
    }
    async getAppRecordName(app, defaultName) {
        var payload = await this.callHook("getAppRecordName" /* GET_APP_RECORD_NAME */, {
            app,
            name: null,
        });
        if (payload.name) {
            return payload.name;
        }
        else {
            return `App ${defaultName}`;
        }
    }
    async getAppRootInstance(app) {
        var payload = await this.callHook("getAppRootInstance" /* GET_APP_ROOT_INSTANCE */, {
            app,
            root: null,
        });
        return payload.root;
    }
    async registerApplication(app) {
        await this.callHook("registerApplication" /* REGISTER_APPLICATION */, {
            app,
        });
    }
    async walkComponentTree(instance, maxDepth = -1, filter = null) {
        var payload = await this.callHook("walkComponentTree" /* WALK_COMPONENT_TREE */, {
            componentInstance: instance,
            componentTreeData: null,
            maxDepth,
            filter,
        });
        return payload.componentTreeData;
    }
    async visitComponentTree(instance, treeNode, filter = null, app) {
        var payload = await this.callHook("visitComponentTree" /* VISIT_COMPONENT_TREE */, {
            app,
            componentInstance: instance,
            treeNode,
            filter,
        });
        return payload.treeNode;
    }
    async walkComponentParents(instance) {
        var payload = await this.callHook("walkComponentParents" /* WALK_COMPONENT_PARENTS */, {
            componentInstance: instance,
            parentInstances: [],
        });
        return payload.parentInstances;
    }
    async inspectComponent(instance, app) {
        var payload = await this.callHook("inspectComponent" /* INSPECT_COMPONENT */, {
            app,
            componentInstance: instance,
            instanceData: null,
        });
        return payload.instanceData;
    }
    async getComponentBounds(instance) {
        var payload = await this.callHook("getComponentBounds" /* GET_COMPONENT_BOUNDS */, {
            componentInstance: instance,
            bounds: null,
        });
        return payload.bounds;
    }
    async getComponentName(instance) {
        var payload = await this.callHook("getComponentName" /* GET_COMPONENT_NAME */, {
            componentInstance: instance,
            name: null,
        });
        return payload.name;
    }
    async getComponentInstances(app) {
        var payload = await this.callHook("getComponentInstances" /* GET_COMPONENT_INSTANCES */, {
            app,
            componentInstances: [],
        });
        return payload.componentInstances;
    }
    async getElementComponent(element) {
        var payload = await this.callHook("getElementComponent" /* GET_ELEMENT_COMPONENT */, {
            element,
            componentInstance: null,
        });
        return payload.componentInstance;
    }
    async getComponentRootElements(instance) {
        var payload = await this.callHook("getComponentRootElements" /* GET_COMPONENT_ROOT_ELEMENTS */, {
            componentInstance: instance,
            rootElements: [],
        });
        return payload.rootElements;
    }
    async editComponentState(instance, dotPath, type, state, app) {
        var arrayPath = dotPath.split('.');
        var payload = await this.callHook("editComponentState" /* EDIT_COMPONENT_STATE */, {
            app,
            componentInstance: instance,
            path: arrayPath,
            type,
            state,
            set: (object, path = arrayPath, value = state.value, cb) => this.stateEditor.set(object, path, value, cb || this.stateEditor.createDefaultSetCallback(state)),
        });
        return payload.componentInstance;
    }
    async getComponentDevtoolsOptions(instance) {
        var payload = await this.callHook("getAppDevtoolsOptions" /* GET_COMPONENT_DEVTOOLS_OPTIONS */, {
            componentInstance: instance,
            options: null,
        });
        return payload.options || {};
    }
    async getComponentRenderCode(instance) {
        var payload = await this.callHook("getComponentRenderCode" /* GET_COMPONENT_RENDER_CODE */, {
            componentInstance: instance,
            code: null,
        });
        return {
            code: payload.code,
        };
    }
    async inspectTimelineEvent(eventData, app) {
        var payload = await this.callHook("inspectTimelineEvent" /* INSPECT_TIMELINE_EVENT */, {
            event: eventData.event,
            layerId: eventData.layerId,
            app,
            data: eventData.event.data,
            all: eventData.all,
        });
        return payload.data;
    }
    async clearTimeline() {
        await this.callHook("timelineCleared" /* TIMELINE_CLEARED */, {});
    }
    async getInspectorTree(inspectorId, app, filter) {
        var payload = await this.callHook("getInspectorTree" /* GET_INSPECTOR_TREE */, {
            inspectorId,
            app,
            filter,
            rootNodes: [],
        });
        return payload.rootNodes;
    }
    async getInspectorState(inspectorId, app, nodeId) {
        var payload = await this.callHook("getInspectorState" /* GET_INSPECTOR_STATE */, {
            inspectorId,
            app,
            nodeId,
            state: null,
        });
        return payload.state;
    }
    async editInspectorState(inspectorId, app, nodeId, dotPath, type, state) {
        var arrayPath = dotPath.split('.');
        await this.callHook("editInspectorState" /* EDIT_INSPECTOR_STATE */, {
            inspectorId,
            app,
            nodeId,
            path: arrayPath,
            type,
            state,
            set: (object, path = arrayPath, value = state.value, cb) => this.stateEditor.set(object, path, value, cb || this.stateEditor.createDefaultSetCallback(state)),
        });
    }
}
exports.DevtoolsApi = DevtoolsApi;
class DevtoolsPluginApiInstance {
    constructor(plugin, appRecord, ctx) {
        this.bridge = ctx.bridge;
        this.ctx = ctx;
        this.plugin = plugin;
        this.appRecord = appRecord;
        this.backendApi = appRecord.backend.api;
        this.defaultSettings = shared_utils_1.getPluginDefaultSettings(plugin.descriptor.settings);
        this.on = new hooks_1.DevtoolsHookable(ctx, plugin);
        pluginOn.push(this.on);
    }
    // Plugin API
    async notifyComponentUpdate(instance = null) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.COMPONENTS))
            { return; }
        if (instance) {
            this.ctx.hook.emit(shared_utils_1.HookEvents.COMPONENT_UPDATED, ...await this.backendApi.transformCall(shared_utils_1.HookEvents.COMPONENT_UPDATED, instance));
        }
        else {
            this.ctx.hook.emit(shared_utils_1.HookEvents.COMPONENT_UPDATED);
        }
    }
    addTimelineLayer(options) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.TIMELINE))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.TIMELINE_LAYER_ADDED, options, this.plugin);
        return true;
    }
    addTimelineEvent(options) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.TIMELINE))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.TIMELINE_EVENT_ADDED, options, this.plugin);
        return true;
    }
    addInspector(options) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.CUSTOM_INSPECTOR))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_ADD, options, this.plugin);
        return true;
    }
    sendInspectorTree(inspectorId) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.CUSTOM_INSPECTOR))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SEND_TREE, inspectorId, this.plugin);
        return true;
    }
    sendInspectorState(inspectorId) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.CUSTOM_INSPECTOR))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SEND_STATE, inspectorId, this.plugin);
        return true;
    }
    selectInspectorNode(inspectorId, nodeId) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.CUSTOM_INSPECTOR))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SELECT_NODE, inspectorId, nodeId, this.plugin);
        return true;
    }
    getComponentBounds(instance) {
        return this.backendApi.getComponentBounds(instance);
    }
    getComponentName(instance) {
        return this.backendApi.getComponentName(instance);
    }
    getComponentInstances(app) {
        return this.backendApi.getComponentInstances(app);
    }
    highlightElement(instance) {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.COMPONENTS))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.COMPONENT_HIGHLIGHT, instance.__VUE_DEVTOOLS_UID__, this.plugin);
        return true;
    }
    unhighlightElement() {
        if (!this.enabled || !this.hasPermission(shared_utils_1.PluginPermission.COMPONENTS))
            { return false; }
        this.ctx.hook.emit(shared_utils_1.HookEvents.COMPONENT_UNHIGHLIGHT, this.plugin);
        return true;
    }
    getSettings(pluginId) {
        return shared_utils_1.getPluginSettings(pluginId !== null && pluginId !== void 0 ? pluginId : this.plugin.descriptor.id, this.defaultSettings);
    }
    setSettings(value, pluginId) {
        shared_utils_1.setPluginSettings(pluginId !== null && pluginId !== void 0 ? pluginId : this.plugin.descriptor.id, value);
    }
    get enabled() {
        return shared_utils_1.hasPluginPermission(this.plugin.descriptor.id, shared_utils_1.PluginPermission.ENABLED);
    }
    hasPermission(permission) {
        return shared_utils_1.hasPluginPermission(this.plugin.descriptor.id, permission);
    }
}
exports.DevtoolsPluginApiInstance = DevtoolsPluginApiInstance;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 33337:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=app-record.js.map

/***/ }),

/***/ 25266:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBackendContext = void 0;
function createBackendContext(options) {
    return {
        bridge: options.bridge,
        hook: options.hook,
        backends: [],
        appRecords: [],
        currentTab: null,
        currentAppRecord: null,
        currentInspectedComponentId: null,
        plugins: [],
        currentPlugin: null,
        timelineLayers: [],
        nextTimelineEventId: 0,
        timelineEventMap: new Map(),
        perfUniqueGroupId: 0,
        customInspectors: [],
        timelineMarkers: [],
    };
}
exports.createBackendContext = createBackendContext;
//# sourceMappingURL=backend-context.js.map

/***/ }),

/***/ 65822:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBackend = exports.defineBackend = exports.BuiltinBackendFeature = void 0;
var api_1 = __webpack_require__(37863);
var BuiltinBackendFeature;
(function (BuiltinBackendFeature) {
    /**
     * @deprecated
     */
    BuiltinBackendFeature["FLUSH"] = "flush";
})(BuiltinBackendFeature = exports.BuiltinBackendFeature || (exports.BuiltinBackendFeature = {}));
function defineBackend(options) {
    return options;
}
exports.defineBackend = defineBackend;
function createBackend(options, ctx) {
    var backend = {
        options,
        api: null,
    };
    backend.api = new api_1.DevtoolsApi(backend, ctx);
    options.setup(backend.api);
    return backend;
}
exports.createBackend = createBackend;
//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 46808:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/* eslint-disable @typescript-eslint/ban-types */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=global-hook.js.map

/***/ }),

/***/ 87734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevtoolsHookable = void 0;
var shared_utils_1 = __webpack_require__(19746);
class DevtoolsHookable {
    constructor(ctx, plugin = null) {
        this.handlers = {};
        this.ctx = ctx;
        this.plugin = plugin;
    }
    hook(eventType, handler, pluginPermision = null) {
        var handlers = (this.handlers[eventType] = this.handlers[eventType] || []);
        if (this.plugin) {
            var originalHandler = handler;
            handler = (...args) => {
                // Plugin permission
                if (!shared_utils_1.hasPluginPermission(this.plugin.descriptor.id, shared_utils_1.PluginPermission.ENABLED) ||
                    (pluginPermision && !shared_utils_1.hasPluginPermission(this.plugin.descriptor.id, pluginPermision)))
                    { return; }
                // App scope
                if (!this.plugin.descriptor.disableAppScope &&
                    this.ctx.currentAppRecord.options.app !== this.plugin.descriptor.app)
                    { return; }
                // Plugin scope
                if (!this.plugin.descriptor.disablePluginScope &&
                    args[0].pluginId != null && args[0].pluginId !== this.plugin.descriptor.id)
                    { return; }
                return originalHandler(...args);
            };
        }
        handlers.push({
            handler,
            plugin: this.ctx.currentPlugin,
        });
    }
    async callHandlers(eventType, payload, ctx) {
        if (this.handlers[eventType]) {
            var handlers = this.handlers[eventType];
            for (var i = 0; i < handlers.length; i++) {
                var { handler, plugin } = handlers[i];
                try {
                    await handler(payload, ctx);
                }
                catch (e) {
                    console.error(`An error occurred in hook ${eventType}${plugin ? ` registered by plugin ${plugin.descriptor.id}` : ''}`);
                    console.error(e);
                }
            }
        }
        return payload;
    }
    transformCall(handler) {
        this.hook("transformCall" /* TRANSFORM_CALL */, handler);
    }
    getAppRecordName(handler) {
        this.hook("getAppRecordName" /* GET_APP_RECORD_NAME */, handler);
    }
    getAppRootInstance(handler) {
        this.hook("getAppRootInstance" /* GET_APP_ROOT_INSTANCE */, handler);
    }
    registerApplication(handler) {
        this.hook("registerApplication" /* REGISTER_APPLICATION */, handler);
    }
    walkComponentTree(handler) {
        this.hook("walkComponentTree" /* WALK_COMPONENT_TREE */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    visitComponentTree(handler) {
        this.hook("visitComponentTree" /* VISIT_COMPONENT_TREE */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    walkComponentParents(handler) {
        this.hook("walkComponentParents" /* WALK_COMPONENT_PARENTS */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    inspectComponent(handler) {
        this.hook("inspectComponent" /* INSPECT_COMPONENT */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentBounds(handler) {
        this.hook("getComponentBounds" /* GET_COMPONENT_BOUNDS */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentName(handler) {
        this.hook("getComponentName" /* GET_COMPONENT_NAME */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentInstances(handler) {
        this.hook("getComponentInstances" /* GET_COMPONENT_INSTANCES */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getElementComponent(handler) {
        this.hook("getElementComponent" /* GET_ELEMENT_COMPONENT */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentRootElements(handler) {
        this.hook("getComponentRootElements" /* GET_COMPONENT_ROOT_ELEMENTS */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    editComponentState(handler) {
        this.hook("editComponentState" /* EDIT_COMPONENT_STATE */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentDevtoolsOptions(handler) {
        this.hook("getAppDevtoolsOptions" /* GET_COMPONENT_DEVTOOLS_OPTIONS */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    getComponentRenderCode(handler) {
        this.hook("getComponentRenderCode" /* GET_COMPONENT_RENDER_CODE */, handler, shared_utils_1.PluginPermission.COMPONENTS);
    }
    inspectTimelineEvent(handler) {
        this.hook("inspectTimelineEvent" /* INSPECT_TIMELINE_EVENT */, handler, shared_utils_1.PluginPermission.TIMELINE);
    }
    timelineCleared(handler) {
        this.hook("timelineCleared" /* TIMELINE_CLEARED */, handler, shared_utils_1.PluginPermission.TIMELINE);
    }
    getInspectorTree(handler) {
        this.hook("getInspectorTree" /* GET_INSPECTOR_TREE */, handler, shared_utils_1.PluginPermission.CUSTOM_INSPECTOR);
    }
    getInspectorState(handler) {
        this.hook("getInspectorState" /* GET_INSPECTOR_STATE */, handler, shared_utils_1.PluginPermission.CUSTOM_INSPECTOR);
    }
    editInspectorState(handler) {
        this.hook("editInspectorState" /* EDIT_INSPECTOR_STATE */, handler, shared_utils_1.PluginPermission.CUSTOM_INSPECTOR);
    }
    setPluginSettings(handler) {
        this.hook("setPluginSettings" /* SET_PLUGIN_SETTINGS */, handler);
    }
}
exports.DevtoolsHookable = DevtoolsHookable;
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ 98421:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) { k2 = k; }
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) { k2 = k; }
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) { if (p !== "default" && !exports.hasOwnProperty(p)) { __createBinding(exports, m, p); } }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(37863), exports);
__exportStar(__webpack_require__(33337), exports);
__exportStar(__webpack_require__(65822), exports);
__exportStar(__webpack_require__(25266), exports);
__exportStar(__webpack_require__(46808), exports);
__exportStar(__webpack_require__(87734), exports);
__exportStar(__webpack_require__(65457), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 65457:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ 61137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._legacy_getAndRegisterApps = exports.removeApp = exports.sendApps = exports.waitForAppsRegistration = exports.getAppRecord = exports.getAppRecordId = exports.mapAppRecord = exports.selectApp = exports.registerApp = void 0;
var shared_utils_1 = __webpack_require__(19746);
var speakingurl_1 = __importDefault(__webpack_require__(97500));
var queue_1 = __webpack_require__(44951);
var scan_1 = __webpack_require__(57206);
var timeline_1 = __webpack_require__(77053);
var backend_1 = __webpack_require__(53154);
var jobs = new queue_1.JobQueue();
var recordId = 0;
var appRecordPromises = new Map();
async function registerApp(options, ctx) {
    return jobs.queue(() => registerAppJob(options, ctx));
}
exports.registerApp = registerApp;
async function registerAppJob(options, ctx) {
    // Dedupe
    if (ctx.appRecords.find(a => a.options === options)) {
        return;
    }
    // Find correct backend
    var baseFrameworkVersion = parseInt(options.version.substr(0, options.version.indexOf('.')));
    for (var i = 0; i < backend_1.availableBackends.length; i++) {
        var backendOptions = backend_1.availableBackends[i];
        if (backendOptions.frameworkVersion === baseFrameworkVersion) {
            // Enable backend if it's not enabled
            var backend = backend_1.getBackend(backendOptions, ctx);
            await createAppRecord(options, backend, ctx);
            break;
        }
    }
}
async function createAppRecord(options, backend, ctx) {
    var _a;
    var rootInstance = await backend.api.getAppRootInstance(options.app);
    if (rootInstance) {
        recordId++;
        var name = await backend.api.getAppRecordName(options.app, recordId.toString());
        var id = getAppRecordId(options.app, speakingurl_1.default(name));
        var [el] = await backend.api.getComponentRootElements(rootInstance);
        var record = {
            id,
            name,
            options,
            backend,
            lastInspectedComponentId: null,
            instanceMap: new Map(),
            rootInstance,
            perfGroupIds: new Map(),
            iframe: document !== el.ownerDocument ? el.ownerDocument.location.pathname : null,
            meta: (_a = options.meta) !== null && _a !== void 0 ? _a : {},
        };
        options.app.__VUE_DEVTOOLS_APP_RECORD__ = record;
        var rootId = `${record.id}:root`;
        record.instanceMap.set(rootId, record.rootInstance);
        record.rootInstance.__VUE_DEVTOOLS_UID__ = rootId;
        // Timeline
        timeline_1.addBuiltinLayers(record, ctx);
        ctx.appRecords.push(record);
        if (backend.options.setupApp) {
            backend.options.setupApp(backend.api, record);
        }
        await backend.api.registerApplication(options.app);
        var isAppHidden = !!(await record.backend.api.getComponentDevtoolsOptions(record.rootInstance)).hide;
        if (!isAppHidden) {
            ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_APP_ADD, {
                appRecord: mapAppRecord(record),
            });
        }
        if (appRecordPromises.has(options.app)) {
            for (var r of appRecordPromises.get(options.app)) {
                await r(record);
            }
        }
        // Auto select first app
        if (ctx.currentAppRecord == null && !isAppHidden) {
            await selectApp(record, ctx);
        }
    }
    else {
        console.warn('[Vue devtools] No root instance found for app, it might have been unmounted', options.app);
    }
}
async function selectApp(record, ctx) {
    ctx.currentAppRecord = record;
    ctx.currentInspectedComponentId = record.lastInspectedComponentId;
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_APP_SELECTED, {
        id: record.id,
        lastInspectedComponentId: record.lastInspectedComponentId,
    });
}
exports.selectApp = selectApp;
function mapAppRecord(record) {
    return {
        id: record.id,
        name: record.name,
        version: record.options.version,
        iframe: record.iframe,
    };
}
exports.mapAppRecord = mapAppRecord;
var appIds = new Set();
function getAppRecordId(app, defaultId) {
    if (app.__VUE_DEVTOOLS_APP_RECORD_ID__ != null) {
        return app.__VUE_DEVTOOLS_APP_RECORD_ID__;
    }
    var id = defaultId !== null && defaultId !== void 0 ? defaultId : (recordId++).toString();
    if (defaultId && appIds.has(id)) {
        var count = 1;
        while (appIds.has(`${defaultId}:${count}`)) {
            count++;
        }
        id = `${defaultId}_${count}`;
    }
    appIds.add(id);
    app.__VUE_DEVTOOLS_APP_RECORD_ID__ = id;
    return id;
}
exports.getAppRecordId = getAppRecordId;
async function getAppRecord(app, ctx) {
    var record = ctx.appRecords.find(ar => ar.options.app === app);
    if (record) {
        return record;
    }
    return new Promise((resolve, reject) => {
        var timedOut = false;
        var timer = setTimeout(() => {
            timedOut = true;
            reject(new Error(`Timed out getting app record for app ${app}`));
        }, 2000);
        var resolvers = appRecordPromises.get(app);
        if (!resolvers) {
            resolvers = [];
            appRecordPromises.set(app, resolvers);
        }
        resolvers.push((record) => {
            if (!timedOut) {
                clearTimeout(timer);
                resolve(record);
            }
        });
    });
}
exports.getAppRecord = getAppRecord;
function waitForAppsRegistration() {
    return jobs.queue(async () => { });
}
exports.waitForAppsRegistration = waitForAppsRegistration;
async function sendApps(ctx) {
    var appRecords = [];
    for (var appRecord of ctx.appRecords) {
        if (!(await appRecord.backend.api.getComponentDevtoolsOptions(appRecord.rootInstance)).hide) {
            appRecords.push(appRecord);
        }
    }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_APP_LIST, {
        apps: appRecords.map(mapAppRecord),
    });
}
exports.sendApps = sendApps;
async function removeApp(app, ctx) {
    try {
        var appRecord = await getAppRecord(app, ctx);
        if (appRecord) {
            appIds.delete(appRecord.id);
            var index = ctx.appRecords.indexOf(appRecord);
            if (index !== -1)
                { ctx.appRecords.splice(index, 1); }
            timeline_1.removeLayersForApp(app, ctx);
            ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_APP_REMOVE, { id: appRecord.id });
        }
    }
    catch (e) {
        if (shared_utils_1.SharedData.debugInfo) {
            console.error(e);
        }
    }
}
exports.removeApp = removeApp;
// eslint-disable-next-line camelcase
async function _legacy_getAndRegisterApps(Vue, ctx) {
    var apps = scan_1.scan();
    apps.forEach(app => {
        registerApp({
            app,
            types: {},
            version: Vue.version,
            meta: {
                Vue,
            },
        }, ctx);
    });
}
exports._legacy_getAndRegisterApps = _legacy_getAndRegisterApps;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 53154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBackend = exports.availableBackends = void 0;
var app_backend_api_1 = __webpack_require__(98421);
var app_backend_vue1_1 = __webpack_require__(32035);
var app_backend_vue2_1 = __webpack_require__(9687);
var app_backend_vue3_1 = __webpack_require__(57126);
var perf_1 = __webpack_require__(56633);
exports.availableBackends = [
    app_backend_vue1_1.backend,
    app_backend_vue2_1.backend,
    app_backend_vue3_1.backend,
];
var enabledBackends = new Map();
function getBackend(backendOptions, ctx) {
    var backend;
    if (!enabledBackends.has(backendOptions)) {
        // Create backend
        backend = app_backend_api_1.createBackend(backendOptions, ctx);
        perf_1.handleAddPerformanceTag(backend, ctx);
        enabledBackends.set(backendOptions, backend);
        ctx.backends.push(backend);
    }
    else {
        backend = enabledBackends.get(backendOptions);
    }
    return backend;
}
exports.getBackend = getBackend;
//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 87922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var shared_utils_1 = __webpack_require__(19746);
var highlighter_1 = __webpack_require__(37048);
class ComponentPicker {
    constructor(ctx) {
        this.ctx = ctx;
        this.bindMethods();
    }
    /**
     * Adds event listeners for mouseover and mouseup
     */
    startSelecting() {
        if (!shared_utils_1.isBrowser)
            { return; }
        window.addEventListener('mouseover', this.elementMouseOver, true);
        window.addEventListener('click', this.elementClicked, true);
        window.addEventListener('mouseout', this.cancelEvent, true);
        window.addEventListener('mouseenter', this.cancelEvent, true);
        window.addEventListener('mouseleave', this.cancelEvent, true);
        window.addEventListener('mousedown', this.cancelEvent, true);
        window.addEventListener('mouseup', this.cancelEvent, true);
    }
    /**
     * Removes event listeners
     */
    stopSelecting() {
        if (!shared_utils_1.isBrowser)
            { return; }
        window.removeEventListener('mouseover', this.elementMouseOver, true);
        window.removeEventListener('click', this.elementClicked, true);
        window.removeEventListener('mouseout', this.cancelEvent, true);
        window.removeEventListener('mouseenter', this.cancelEvent, true);
        window.removeEventListener('mouseleave', this.cancelEvent, true);
        window.removeEventListener('mousedown', this.cancelEvent, true);
        window.removeEventListener('mouseup', this.cancelEvent, true);
        highlighter_1.unHighlight();
    }
    /**
     * Highlights a component on element mouse over
     */
    async elementMouseOver(e) {
        this.cancelEvent(e);
        var el = e.target;
        if (el) {
            await this.selectElementComponent(el);
        }
        highlighter_1.unHighlight();
        if (this.selectedInstance) {
            highlighter_1.highlight(this.selectedInstance, this.selectedBackend, this.ctx);
        }
    }
    async selectElementComponent(el) {
        for (var backend of this.ctx.backends) {
            var instance = await backend.api.getElementComponent(el);
            if (instance) {
                this.selectedInstance = instance;
                this.selectedBackend = backend;
                return;
            }
        }
        this.selectedInstance = null;
        this.selectedBackend = null;
    }
    /**
     * Selects an instance in the component view
     */
    async elementClicked(e) {
        this.cancelEvent(e);
        if (this.selectedInstance && this.selectedBackend) {
            var parentInstances = await this.selectedBackend.api.walkComponentParents(this.selectedInstance);
            this.ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_PICK, { id: this.selectedInstance.__VUE_DEVTOOLS_UID__, parentIds: parentInstances.map(i => i.__VUE_DEVTOOLS_UID__) });
        }
        else {
            this.ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_PICK_CANCELED, null);
        }
        this.stopSelecting();
    }
    /**
     * Cancel a mouse event
     */
    cancelEvent(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
    }
    /**
     * Bind class methods to the class scope to avoid rebind for event listeners
     */
    bindMethods() {
        this.startSelecting = this.startSelecting.bind(this);
        this.stopSelecting = this.stopSelecting.bind(this);
        this.elementMouseOver = this.elementMouseOver.bind(this);
        this.elementClicked = this.elementClicked.bind(this);
    }
}
exports.default = ComponentPicker;
//# sourceMappingURL=component-pick.js.map

/***/ }),

/***/ 59372:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getComponentInstance = exports.getComponentId = exports.editComponentState = exports.sendEmptyComponentData = exports.markSelectedInstance = exports.sendSelectedComponentData = exports.sendComponentTreeData = void 0;
var shared_utils_1 = __webpack_require__(19746);
var app_backend_api_1 = __webpack_require__(98421);
var app_1 = __webpack_require__(61137);
var MAX_$VM = 10;
var $vmQueue = [];
async function sendComponentTreeData(appRecord, instanceId, filter = '', maxDepth = null, ctx) {
    if (!instanceId || appRecord !== ctx.currentAppRecord)
        { return; }
    // Flush will send all components in the tree
    // So we skip individiual tree updates
    if (instanceId !== '_root' &&
        ctx.currentAppRecord.backend.options.features.includes(app_backend_api_1.BuiltinBackendFeature.FLUSH)) {
        return;
    }
    var instance = getComponentInstance(appRecord, instanceId, ctx);
    if (!instance) {
        ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_TREE, {
            instanceId,
            treeData: null,
            notFound: true,
        });
    }
    else {
        if (filter)
            { filter = filter.toLowerCase(); }
        if (maxDepth == null) {
            maxDepth = instance === ctx.currentAppRecord.rootInstance ? 2 : 1;
        }
        var payload = {
            instanceId,
            treeData: shared_utils_1.stringify(await appRecord.backend.api.walkComponentTree(instance, maxDepth, filter)),
        };
        ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_TREE, payload);
    }
}
exports.sendComponentTreeData = sendComponentTreeData;
async function sendSelectedComponentData(appRecord, instanceId, ctx) {
    if (!instanceId || appRecord !== ctx.currentAppRecord)
        { return; }
    var instance = getComponentInstance(appRecord, instanceId, ctx);
    if (!instance) {
        sendEmptyComponentData(instanceId, ctx);
    }
    else {
        // Expose instance on window
        if (typeof window !== 'undefined') {
            var win = window;
            win.$vm = instance;
            // $vm0, $vm1, $vm2, ...
            if ($vmQueue[0] !== instance) {
                if ($vmQueue.length >= MAX_$VM) {
                    $vmQueue.pop();
                }
                for (var i = $vmQueue.length; i > 0; i--) {
                    win[`$vm${i}`] = $vmQueue[i] = $vmQueue[i - 1];
                }
                win.$vm0 = $vmQueue[0] = instance;
            }
        }
        if (shared_utils_1.SharedData.debugInfo) {
            // eslint-disable-next-line no-console
            console.log('[DEBUG] inspect', instance);
        }
        var parentInstances = await appRecord.backend.api.walkComponentParents(instance);
        var payload = {
            instanceId,
            data: shared_utils_1.stringify(await appRecord.backend.api.inspectComponent(instance, ctx.currentAppRecord.options.app)),
            parentIds: parentInstances.map(i => i.__VUE_DEVTOOLS_UID__),
        };
        ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_SELECTED_DATA, payload);
        markSelectedInstance(instanceId, ctx);
    }
}
exports.sendSelectedComponentData = sendSelectedComponentData;
function markSelectedInstance(instanceId, ctx) {
    ctx.currentInspectedComponentId = instanceId;
    ctx.currentAppRecord.lastInspectedComponentId = instanceId;
}
exports.markSelectedInstance = markSelectedInstance;
function sendEmptyComponentData(instanceId, ctx) {
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_SELECTED_DATA, {
        instanceId,
        data: null,
    });
}
exports.sendEmptyComponentData = sendEmptyComponentData;
async function editComponentState(instanceId, dotPath, type, state, ctx) {
    if (!instanceId)
        { return; }
    var instance = getComponentInstance(ctx.currentAppRecord, instanceId, ctx);
    if (instance) {
        if ('value' in state && state.value != null) {
            state.value = shared_utils_1.parse(state.value, true);
        }
        await ctx.currentAppRecord.backend.api.editComponentState(instance, dotPath, type, state, ctx.currentAppRecord.options.app);
        await sendSelectedComponentData(ctx.currentAppRecord, instanceId, ctx);
    }
}
exports.editComponentState = editComponentState;
async function getComponentId(app, uid, instance, ctx) {
    try {
        var appRecord = await app_1.getAppRecord(app, ctx);
        if (!appRecord)
            { return null; }
        var isRoot = appRecord.rootInstance === instance;
        return `${appRecord.id}:${isRoot ? 'root' : uid}`;
    }
    catch (e) {
        if (shared_utils_1.SharedData.debugInfo) {
            console.error(e);
        }
        return null;
    }
}
exports.getComponentId = getComponentId;
function getComponentInstance(appRecord, instanceId, ctx) {
    if (instanceId === '_root') {
        instanceId = `${appRecord.id}:root`;
    }
    var instance = appRecord.instanceMap.get(instanceId);
    if (!instance && shared_utils_1.SharedData.debugInfo) {
        console.warn(`Instance uid=${instanceId} not found`);
    }
    return instance;
}
exports.getComponentInstance = getComponentInstance;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ 93858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hook = void 0;
var shared_utils_1 = __webpack_require__(19746);
// hook should have been injected before this executes.
exports.hook = shared_utils_1.target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
//# sourceMappingURL=global-hook.js.map

/***/ }),

/***/ 37048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unHighlight = exports.highlight = void 0;
var shared_utils_1 = __webpack_require__(19746);
var queue_1 = __webpack_require__(44951);
var overlay;
var overlayContent;
var currentInstance;
function createOverlay() {
    if (overlay || !shared_utils_1.isBrowser)
        { return; }
    overlay = document.createElement('div');
    overlay.style.backgroundColor = 'rgba(65, 184, 131, 0.35)';
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '99999999999998';
    overlay.style.pointerEvents = 'none';
    overlay.style.borderRadius = '3px';
    overlayContent = document.createElement('div');
    overlayContent.style.position = 'fixed';
    overlayContent.style.zIndex = '99999999999999';
    overlayContent.style.pointerEvents = 'none';
    overlayContent.style.backgroundColor = 'white';
    overlayContent.style.fontFamily = 'monospace';
    overlayContent.style.fontSize = '11px';
    overlayContent.style.padding = '4px 8px';
    overlayContent.style.borderRadius = '3px';
    overlayContent.style.color = '#333';
    overlayContent.style.textAlign = 'center';
    overlayContent.style.border = 'rgba(65, 184, 131, 0.5) 1px solid';
    overlayContent.style.backgroundClip = 'padding-box';
}
// Use a job queue to preserve highlight/unhighlight calls order
// This prevents "sticky" highlights that are not removed because highlight is async
var jobQueue = new queue_1.JobQueue();
async function highlight(instance, backend, ctx) {
    await jobQueue.queue(async () => {
        if (!instance)
            { return; }
        var bounds = await backend.api.getComponentBounds(instance);
        if (bounds) {
            createOverlay();
            // Name
            var name = (await backend.api.getComponentName(instance)) || 'Anonymous';
            var pre = document.createElement('span');
            pre.style.opacity = '0.6';
            pre.innerText = '<';
            var text = document.createElement('span');
            text.style.fontWeight = 'bold';
            text.style.color = '#09ab56';
            text.innerText = name;
            var post = document.createElement('span');
            post.style.opacity = '0.6';
            post.innerText = '>';
            // Size
            var size = document.createElement('span');
            size.style.opacity = '0.5';
            size.style.marginLeft = '6px';
            size.appendChild(document.createTextNode((Math.round(bounds.width * 100) / 100).toString()));
            var multiply = document.createElement('span');
            multiply.style.marginLeft = multiply.style.marginRight = '2px';
            multiply.innerText = '×';
            size.appendChild(multiply);
            size.appendChild(document.createTextNode((Math.round(bounds.height * 100) / 100).toString()));
            currentInstance = instance;
            await showOverlay(bounds, [pre, text, post, size]);
        }
        startUpdateTimer(backend, ctx);
    });
}
exports.highlight = highlight;
async function unHighlight() {
    await jobQueue.queue(async () => {
        var _a, _b;
        (_a = overlay === null || overlay === void 0 ? void 0 : overlay.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(overlay);
        (_b = overlayContent === null || overlayContent === void 0 ? void 0 : overlayContent.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(overlayContent);
        currentInstance = null;
        stopUpdateTimer();
    });
}
exports.unHighlight = unHighlight;
function showOverlay(bounds, children = null) {
    if (!shared_utils_1.isBrowser || !children.length)
        { return; }
    positionOverlay(bounds);
    document.body.appendChild(overlay);
    overlayContent.innerHTML = '';
    children.forEach(child => overlayContent.appendChild(child));
    document.body.appendChild(overlayContent);
    positionOverlayContent(bounds);
}
function positionOverlay(ref) {
    var width = ref.width; if ( width === void 0 ) width = 0;
    var height = ref.height; if ( height === void 0 ) height = 0;
    var top = ref.top; if ( top === void 0 ) top = 0;
    var left = ref.left; if ( left === void 0 ) left = 0;

    overlay.style.width = Math.round(width) + 'px';
    overlay.style.height = Math.round(height) + 'px';
    overlay.style.left = Math.round(left) + 'px';
    overlay.style.top = Math.round(top) + 'px';
}
function positionOverlayContent(ref) {
    var height = ref.height; if ( height === void 0 ) height = 0;
    var top = ref.top; if ( top === void 0 ) top = 0;
    var left = ref.left; if ( left === void 0 ) left = 0;

    // Content position (prevents overflow)
    var contentWidth = overlayContent.offsetWidth;
    var contentHeight = overlayContent.offsetHeight;
    var contentLeft = left;
    if (contentLeft < 0) {
        contentLeft = 0;
    }
    else if (contentLeft + contentWidth > window.innerWidth) {
        contentLeft = window.innerWidth - contentWidth;
    }
    var contentTop = top - contentHeight - 2;
    if (contentTop < 0) {
        contentTop = top + height + 2;
    }
    if (contentTop < 0) {
        contentTop = 0;
    }
    else if (contentTop + contentHeight > window.innerHeight) {
        contentTop = window.innerHeight - contentHeight;
    }
    overlayContent.style.left = ~~contentLeft + 'px';
    overlayContent.style.top = ~~contentTop + 'px';
}
async function updateOverlay(backend, ctx) {
    if (currentInstance) {
        var bounds = await backend.api.getComponentBounds(currentInstance);
        if (bounds) {
            var sizeEl = overlayContent.children.item(3);
            var widthEl = sizeEl.childNodes[0];
            widthEl.textContent = (Math.round(bounds.width * 100) / 100).toString();
            var heightEl = sizeEl.childNodes[2];
            heightEl.textContent = (Math.round(bounds.height * 100) / 100).toString();
            positionOverlay(bounds);
            positionOverlayContent(bounds);
        }
    }
}
var updateTimer;
function startUpdateTimer(backend, ctx) {
    stopUpdateTimer();
    updateTimer = setInterval(() => {
        jobQueue.queue(async () => {
            await updateOverlay(backend, ctx);
        });
    }, 1000 / 30); // 30fps
}
function stopUpdateTimer() {
    clearInterval(updateTimer);
}
//# sourceMappingURL=highlighter.js.map

/***/ }),

/***/ 48178:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initBackend = void 0;
var app_backend_api_1 = __webpack_require__(98421);
var shared_utils_1 = __webpack_require__(19746);
var debounce_1 = __importDefault(__webpack_require__(54073));
var global_hook_1 = __webpack_require__(93858);
var subscriptions_1 = __webpack_require__(44470);
var highlighter_1 = __webpack_require__(37048);
var timeline_1 = __webpack_require__(77053);
var component_pick_1 = __importDefault(__webpack_require__(87922));
var component_1 = __webpack_require__(59372);
var plugin_1 = __webpack_require__(93614);
var app_1 = __webpack_require__(61137);
var inspector_1 = __webpack_require__(44887);
var timeline_screenshot_1 = __webpack_require__(27748);
var perf_1 = __webpack_require__(56633);
var page_config_1 = __webpack_require__(47388);
var timeline_marker_1 = __webpack_require__(19583);
var ctx = (_a = shared_utils_1.target.__vdevtools_ctx) !== null && _a !== void 0 ? _a : null;
var connected = (_b = shared_utils_1.target.__vdevtools_connected) !== null && _b !== void 0 ? _b : false;
async function initBackend(bridge) {
    await shared_utils_1.initSharedData({
        bridge,
        persist: false,
    });
    page_config_1.initOnPageConfig();
    if (!connected) {
        // connected = false
        ctx = shared_utils_1.target.__vdevtools_ctx = app_backend_api_1.createBackendContext({
            bridge,
            hook: global_hook_1.hook,
        });
        if (global_hook_1.hook.Vue) {
            connect();
            app_1._legacy_getAndRegisterApps(global_hook_1.hook.Vue, ctx);
        }
        else {
            global_hook_1.hook.once(shared_utils_1.HookEvents.INIT, (Vue) => {
                app_1._legacy_getAndRegisterApps(Vue, ctx);
            });
        }
        global_hook_1.hook.on(shared_utils_1.HookEvents.APP_ADD, async (app) => {
            await app_1.registerApp(app, ctx);
            // Will init connect
            global_hook_1.hook.emit(shared_utils_1.HookEvents.INIT);
        });
        // Add apps that already sent init
        if (global_hook_1.hook.apps.length) {
            global_hook_1.hook.apps.forEach(app => {
                app_1.registerApp(app, ctx);
                connect();
            });
        }
    }
    else {
        ctx.bridge = bridge;
        connectBridge();
    }
}
exports.initBackend = initBackend;
async function connect() {
    if (connected) {
        return;
    }
    connected = shared_utils_1.target.__vdevtools_connected = true;
    await app_1.waitForAppsRegistration();
    connectBridge();
    ctx.currentTab = shared_utils_1.BuiltinTabs.COMPONENTS;
    // Apps
    global_hook_1.hook.on(shared_utils_1.HookEvents.APP_UNMOUNT, app => {
        app_1.removeApp(app, ctx);
    });
    // Components
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_UPDATED, async (app, uid, parentUid, component) => {
        try {
            var id;
            var appRecord;
            if (app && uid != null) {
                id = await component_1.getComponentId(app, uid, component, ctx);
                appRecord = await app_1.getAppRecord(app, ctx);
            }
            else {
                id = ctx.currentInspectedComponentId;
                appRecord = ctx.currentAppRecord;
            }
            // Update component inspector
            if (id && subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.SELECTED_COMPONENT_DATA, sub => sub.payload.instanceId === id)) {
                component_1.sendSelectedComponentData(appRecord, id, ctx);
            }
            // Update tree (tags)
            if (subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.COMPONENT_TREE, sub => sub.payload.instanceId === id)) {
                component_1.sendComponentTreeData(appRecord, id, appRecord.componentFilter, 0, ctx);
            }
        }
        catch (e) {
            if (shared_utils_1.SharedData.debugInfo) {
                console.error(e);
            }
        }
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_ADDED, async (app, uid, parentUid, component) => {
        try {
            var id = await component_1.getComponentId(app, uid, component, ctx);
            var appRecord = await app_1.getAppRecord(app, ctx);
            if (component) {
                if (component.__VUE_DEVTOOLS_UID__ == null) {
                    component.__VUE_DEVTOOLS_UID__ = id;
                }
                if (!appRecord.instanceMap.has(id)) {
                    appRecord.instanceMap.set(id, component);
                }
            }
            if (parentUid != null) {
                var parentInstances = await appRecord.backend.api.walkComponentParents(component);
                if (parentInstances.length) {
                    var parentId = await component_1.getComponentId(app, parentUid, parentInstances[0], ctx);
                    if (subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.COMPONENT_TREE, sub => sub.payload.instanceId === parentId)) {
                        requestAnimationFrame(() => {
                            component_1.sendComponentTreeData(appRecord, parentId, appRecord.componentFilter, null, ctx);
                        });
                    }
                }
            }
            if (ctx.currentInspectedComponentId === id) {
                component_1.sendSelectedComponentData(appRecord, id, ctx);
            }
        }
        catch (e) {
            if (shared_utils_1.SharedData.debugInfo) {
                console.error(e);
            }
        }
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_REMOVED, async (app, uid, parentUid, component) => {
        try {
            var appRecord = await app_1.getAppRecord(app, ctx);
            if (parentUid != null) {
                var parentInstances = await appRecord.backend.api.walkComponentParents(component);
                if (parentInstances.length) {
                    var parentId = await component_1.getComponentId(app, parentUid, parentInstances[0], ctx);
                    if (subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.COMPONENT_TREE, sub => sub.payload.instanceId === parentId)) {
                        requestAnimationFrame(async () => {
                            try {
                                component_1.sendComponentTreeData(await app_1.getAppRecord(app, ctx), parentId, appRecord.componentFilter, null, ctx);
                            }
                            catch (e) {
                                if (shared_utils_1.SharedData.debugInfo) {
                                    console.error(e);
                                }
                            }
                        });
                    }
                }
            }
            var id = await component_1.getComponentId(app, uid, component, ctx);
            if (subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.SELECTED_COMPONENT_DATA, sub => sub.payload.instanceId === id)) {
                component_1.sendEmptyComponentData(id, ctx);
            }
            appRecord.instanceMap.delete(id);
        }
        catch (e) {
            if (shared_utils_1.SharedData.debugInfo) {
                console.error(e);
            }
        }
    });
    // Component perf
    global_hook_1.hook.on(shared_utils_1.HookEvents.PERFORMANCE_START, (app, uid, vm, type, time) => {
        perf_1.performanceMarkStart(app, uid, vm, type, time, ctx);
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.PERFORMANCE_END, (app, uid, vm, type, time) => {
        perf_1.performanceMarkEnd(app, uid, vm, type, time, ctx);
    });
    // Highlighter
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_HIGHLIGHT, instanceId => {
        highlighter_1.highlight(ctx.currentAppRecord.instanceMap.get(instanceId), ctx.currentAppRecord.backend, ctx);
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_UNHIGHLIGHT, () => {
        highlighter_1.unHighlight();
    });
    // Timeline
    timeline_1.setupTimeline(ctx);
    global_hook_1.hook.on(shared_utils_1.HookEvents.TIMELINE_LAYER_ADDED, async (options, plugin) => {
        var appRecord = await app_1.getAppRecord(plugin.descriptor.app, ctx);
        ctx.timelineLayers.push(Object.assign({}, options,
            {appRecord,
            plugin,
            events: []}));
        ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_LAYER_ADD, {});
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.TIMELINE_EVENT_ADDED, async (options, plugin) => {
        await timeline_1.addTimelineEvent(options, plugin.descriptor.app, ctx);
    });
    // Custom inspectors
    global_hook_1.hook.on(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_ADD, async (options, plugin) => {
        var appRecord = await app_1.getAppRecord(plugin.descriptor.app, ctx);
        ctx.customInspectors.push(Object.assign({}, options,
            {appRecord,
            plugin,
            treeFilter: '',
            selectedNodeId: null}));
        ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_CUSTOM_INSPECTOR_ADD, {});
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SEND_TREE, (inspectorId, plugin) => {
        var inspector = inspector_1.getInspector(inspectorId, plugin.descriptor.app, ctx);
        if (inspector) {
            inspector_1.sendInspectorTree(inspector, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SEND_STATE, (inspectorId, plugin) => {
        var inspector = inspector_1.getInspector(inspectorId, plugin.descriptor.app, ctx);
        if (inspector) {
            inspector_1.sendInspectorState(inspector, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.CUSTOM_INSPECTOR_SELECT_NODE, async (inspectorId, nodeId, plugin) => {
        var inspector = inspector_1.getInspector(inspectorId, plugin.descriptor.app, ctx);
        if (inspector) {
            await inspector_1.selectInspectorNode(inspector, nodeId, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    // Plugins
    plugin_1.addPreviouslyRegisteredPlugins(ctx);
    plugin_1.addQueuedPlugins(ctx);
    global_hook_1.hook.on(shared_utils_1.HookEvents.SETUP_DEVTOOLS_PLUGIN, async (pluginDescriptor, setupFn) => {
        await plugin_1.addPlugin({ pluginDescriptor, setupFn }, ctx);
    });
    shared_utils_1.target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ = true;
    // Legacy flush
    var handleFlush = debounce_1.default(() => {
        var _a;
        if ((_a = ctx.currentAppRecord) === null || _a === void 0 ? void 0 : _a.backend.options.features.includes(app_backend_api_1.BuiltinBackendFeature.FLUSH)) {
            component_1.sendComponentTreeData(ctx.currentAppRecord, '_root', ctx.currentAppRecord.componentFilter, null, ctx);
            if (ctx.currentInspectedComponentId) {
                component_1.sendSelectedComponentData(ctx.currentAppRecord, ctx.currentInspectedComponentId, ctx);
            }
        }
    }, 500);
    global_hook_1.hook.off(shared_utils_1.HookEvents.FLUSH);
    global_hook_1.hook.on(shared_utils_1.HookEvents.FLUSH, handleFlush);
    // Connect done
    timeline_marker_1.addTimelineMarker({
        id: 'vue-devtools-init-backend',
        time: Date.now(),
        label: 'Vue Devtools connected',
        color: 0x41B883,
        all: true,
    }, ctx);
}
function connectBridge() {
    // Subscriptions
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_SUBSCRIBE, (ref) => {
        var type = ref.type;
        var payload = ref.payload;

        subscriptions_1.subscribe(type, payload);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_UNSUBSCRIBE, (ref) => {
        var type = ref.type;
        var payload = ref.payload;

        subscriptions_1.unsubscribe(type, payload);
    });
    // Tabs
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TAB_SWITCH, async (tab) => {
        ctx.currentTab = tab;
        await highlighter_1.unHighlight();
    });
    // Apps
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_APP_LIST, () => {
        app_1.sendApps(ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_APP_SELECT, async (id) => {
        if (id == null)
            { return; }
        var record = ctx.appRecords.find(r => r.id === id);
        if (record) {
            await app_1.selectApp(record, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`App with id ${id} not found`);
        }
    });
    // Components
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_TREE, (ref) => {
        var instanceId = ref.instanceId;
        var filter = ref.filter;

        ctx.currentAppRecord.componentFilter = filter;
        component_1.sendComponentTreeData(ctx.currentAppRecord, instanceId, filter, null, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_SELECTED_DATA, (instanceId) => {
        component_1.sendSelectedComponentData(ctx.currentAppRecord, instanceId, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_EDIT_STATE, (ref) => {
        var instanceId = ref.instanceId;
        var dotPath = ref.dotPath;
        var type = ref.type;
        var value = ref.value;
        var newKey = ref.newKey;
        var remove = ref.remove;

        component_1.editComponentState(instanceId, dotPath, type, { value, newKey, remove }, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_INSPECT_DOM, async (ref) => {
        var instanceId = ref.instanceId;

        var instance = component_1.getComponentInstance(ctx.currentAppRecord, instanceId, ctx);
        if (instance) {
            var [el] = await ctx.currentAppRecord.backend.api.getComponentRootElements(instance);
            if (el) {
                // @ts-ignore
                window.__VUE_DEVTOOLS_INSPECT_TARGET__ = el;
                ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_INSPECT_DOM, null);
            }
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_SCROLL_TO, async (ref) => {
        var instanceId = ref.instanceId;

        var instance = component_1.getComponentInstance(ctx.currentAppRecord, instanceId, ctx);
        if (instance) {
            var [el] = await ctx.currentAppRecord.backend.api.getComponentRootElements(instance);
            if (el) {
                if (typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                }
                else {
                    // Handle nodes that don't implement scrollIntoView
                    var bounds = await ctx.currentAppRecord.backend.api.getComponentBounds(instance);
                    var scrollTarget = document.createElement('div');
                    scrollTarget.style.position = 'absolute';
                    scrollTarget.style.width = `${bounds.width}px`;
                    scrollTarget.style.height = `${bounds.height}px`;
                    scrollTarget.style.top = `${bounds.top}px`;
                    scrollTarget.style.left = `${bounds.left}px`;
                    document.body.appendChild(scrollTarget);
                    scrollTarget.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                    setTimeout(() => {
                        document.body.removeChild(scrollTarget);
                    }, 2000);
                }
                highlighter_1.highlight(instance, ctx.currentAppRecord.backend, ctx);
                setTimeout(() => {
                    highlighter_1.unHighlight();
                }, 2000);
            }
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_RENDER_CODE, async (ref) => {
        var instanceId = ref.instanceId;

        var instance = component_1.getComponentInstance(ctx.currentAppRecord, instanceId, ctx);
        if (instance) {
            var { code } = await ctx.currentAppRecord.backend.api.getComponentRenderCode(instance);
            ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_COMPONENT_RENDER_CODE, {
                instanceId,
                code,
            });
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_STATE_ACTION, async (ref) => {
        var value = ref.value;
        var actionIndex = ref.actionIndex;

        var rawAction = value._custom.actions[actionIndex];
        var action = shared_utils_1.revive(rawAction === null || rawAction === void 0 ? void 0 : rawAction.action);
        if (action) {
            try {
                await action();
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            console.warn(`Couldn't revive action ${actionIndex} from`, value);
        }
    });
    // Highlighter
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_MOUSE_OVER, instanceId => {
        highlighter_1.highlight(ctx.currentAppRecord.instanceMap.get(instanceId), ctx.currentAppRecord.backend, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_MOUSE_OUT, () => {
        highlighter_1.unHighlight();
    });
    // Component picker
    var componentPicker = new component_pick_1.default(ctx);
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_PICK, () => {
        componentPicker.startSelecting();
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_COMPONENT_PICK_CANCELED, () => {
        componentPicker.stopSelecting();
    });
    // Timeline
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_LAYER_LIST, () => {
        timeline_1.sendTimelineLayers(ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_SHOW_SCREENSHOT, (ref) => {
        var screenshot = ref.screenshot;

        timeline_screenshot_1.showScreenshot(screenshot, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_CLEAR, async () => {
        await timeline_1.clearTimeline(ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_EVENT_DATA, async (ref) => {
        var id = ref.id;

        await timeline_1.sendTimelineEventData(id, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_LAYER_LOAD_EVENTS, (ref) => {
        var appId = ref.appId;
        var layerId = ref.layerId;

        timeline_1.sendTimelineLayerEvents(appId, layerId, ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_TIMELINE_LOAD_MARKERS, async () => {
        await timeline_marker_1.sendTimelineMarkers(ctx);
    });
    // Custom inspectors
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_INSPECTOR_LIST, () => {
        inspector_1.sendCustomInspectors(ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_INSPECTOR_TREE, async (ref) => {
        var inspectorId = ref.inspectorId;
        var appId = ref.appId;
        var treeFilter = ref.treeFilter;

        var inspector = await inspector_1.getInspectorWithAppId(inspectorId, appId, ctx);
        if (inspector) {
            inspector.treeFilter = treeFilter;
            inspector_1.sendInspectorTree(inspector, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_INSPECTOR_STATE, async (ref) => {
        var inspectorId = ref.inspectorId;
        var appId = ref.appId;
        var nodeId = ref.nodeId;

        var inspector = await inspector_1.getInspectorWithAppId(inspectorId, appId, ctx);
        if (inspector) {
            inspector.selectedNodeId = nodeId;
            inspector_1.sendInspectorState(inspector, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_INSPECTOR_EDIT_STATE, async (ref) => {
        var inspectorId = ref.inspectorId;
        var appId = ref.appId;
        var nodeId = ref.nodeId;
        var path = ref.path;
        var type = ref.type;
        var payload = ref.payload;

        var inspector = await inspector_1.getInspectorWithAppId(inspectorId, appId, ctx);
        if (inspector) {
            await inspector_1.editInspectorState(inspector, nodeId, path, type, payload, ctx);
            inspector.selectedNodeId = nodeId;
            await inspector_1.sendInspectorState(inspector, ctx);
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_CUSTOM_INSPECTOR_ACTION, async (ref) => {
        var inspectorId = ref.inspectorId;
        var appId = ref.appId;
        var actionIndex = ref.actionIndex;

        var inspector = await inspector_1.getInspectorWithAppId(inspectorId, appId, ctx);
        if (inspector) {
            var action = inspector.actions[actionIndex];
            try {
                await action.action();
            }
            catch (e) {
                if (shared_utils_1.SharedData.debugInfo) {
                    console.error(e);
                }
            }
        }
        else if (shared_utils_1.SharedData.debugInfo) {
            console.warn(`Inspector ${inspectorId} not found`);
        }
    });
    // Misc
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_LOG, (payload) => {
        var value = payload.value;
        if (payload.serialized) {
            value = shared_utils_1.parse(value, payload.revive);
        }
        else if (payload.revive) {
            value = shared_utils_1.revive(value);
        }
        // eslint-disable-next-line no-console
        console[payload.level](value);
    });
    // Plugins
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_DEVTOOLS_PLUGIN_LIST, async () => {
        await plugin_1.sendPluginList(ctx);
    });
    ctx.bridge.on(shared_utils_1.BridgeEvents.TO_BACK_DEVTOOLS_PLUGIN_SETTING_UPDATED, (ref) => {
        var pluginId = ref.pluginId;
        var key = ref.key;
        var newValue = ref.newValue;
        var oldValue = ref.oldValue;

        var settings = shared_utils_1.getPluginSettings(pluginId);
        ctx.hook.emit(shared_utils_1.HookEvents.PLUGIN_SETTINGS_SET, pluginId, settings);
        ctx.currentAppRecord.backend.api.callHook("setPluginSettings" /* SET_PLUGIN_SETTINGS */, {
            app: ctx.currentAppRecord.options.app,
            pluginId,
            key,
            newValue,
            oldValue,
            settings,
        });
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 44887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectInspectorNode = exports.sendCustomInspectors = exports.editInspectorState = exports.sendInspectorState = exports.sendInspectorTree = exports.getInspectorWithAppId = exports.getInspector = void 0;
var shared_utils_1 = __webpack_require__(19746);
function getInspector(inspectorId, app, ctx) {
    return ctx.customInspectors.find(i => i.id === inspectorId && i.appRecord.options.app === app);
}
exports.getInspector = getInspector;
async function getInspectorWithAppId(inspectorId, appId, ctx) {
    for (var i of ctx.customInspectors) {
        if (i.id === inspectorId && i.appRecord.id === appId) {
            return i;
        }
    }
    return null;
}
exports.getInspectorWithAppId = getInspectorWithAppId;
async function sendInspectorTree(inspector, ctx) {
    var rootNodes = await inspector.appRecord.backend.api.getInspectorTree(inspector.id, inspector.appRecord.options.app, inspector.treeFilter);
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_CUSTOM_INSPECTOR_TREE, {
        appId: inspector.appRecord.id,
        inspectorId: inspector.id,
        rootNodes,
    });
}
exports.sendInspectorTree = sendInspectorTree;
async function sendInspectorState(inspector, ctx) {
    var state = inspector.selectedNodeId ? await inspector.appRecord.backend.api.getInspectorState(inspector.id, inspector.appRecord.options.app, inspector.selectedNodeId) : null;
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_CUSTOM_INSPECTOR_STATE, {
        appId: inspector.appRecord.id,
        inspectorId: inspector.id,
        state: shared_utils_1.stringify(state),
    });
}
exports.sendInspectorState = sendInspectorState;
async function editInspectorState(inspector, nodeId, dotPath, type, state, ctx) {
    await inspector.appRecord.backend.api.editInspectorState(inspector.id, inspector.appRecord.options.app, nodeId, dotPath, type, Object.assign({}, state,
        {value: state.value != null ? shared_utils_1.parse(state.value, true) : state.value}));
}
exports.editInspectorState = editInspectorState;
async function sendCustomInspectors(ctx) {
    var _a;
    var inspectors = [];
    for (var i of ctx.customInspectors) {
        inspectors.push({
            id: i.id,
            appId: i.appRecord.id,
            pluginId: i.plugin.descriptor.id,
            label: i.label,
            icon: i.icon,
            treeFilterPlaceholder: i.treeFilterPlaceholder,
            stateFilterPlaceholder: i.stateFilterPlaceholder,
            noSelectionText: i.noSelectionText,
            actions: (_a = i.actions) === null || _a === void 0 ? void 0 : _a.map(a => ({
                icon: a.icon,
                tooltip: a.tooltip,
            })),
        });
    }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_CUSTOM_INSPECTOR_LIST, {
        inspectors,
    });
}
exports.sendCustomInspectors = sendCustomInspectors;
async function selectInspectorNode(inspector, nodeId, ctx) {
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_CUSTOM_INSPECTOR_SELECT_NODE, {
        appId: inspector.appRecord.id,
        inspectorId: inspector.id,
        nodeId,
    });
}
exports.selectInspectorNode = selectInspectorNode;
//# sourceMappingURL=inspector.js.map

/***/ }),

/***/ 57206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scan = void 0;
var shared_utils_1 = __webpack_require__(19746);
var rootInstances = [];
/**
 * Scan the page for root level Vue instances.
 */
function scan() {
    rootInstances.length = 0;
    var inFragment = false;
    var currentFragment = null;
    // eslint-disable-next-line no-inner-declarations
    function processInstance(instance) {
        if (instance) {
            if (rootInstances.indexOf(instance.$root) === -1) {
                instance = instance.$root;
            }
            if (instance._isFragment) {
                inFragment = true;
                currentFragment = instance;
            }
            // respect Vue.config.devtools option
            var baseVue = instance.constructor;
            while (baseVue.super) {
                baseVue = baseVue.super;
            }
            if (baseVue.config && baseVue.config.devtools) {
                rootInstances.push(instance);
            }
            return true;
        }
    }
    if (shared_utils_1.isBrowser) {
        var walkDocument = document => {
            walk(document, function (node) {
                if (inFragment) {
                    if (node === currentFragment._fragmentEnd) {
                        inFragment = false;
                        currentFragment = null;
                    }
                    return true;
                }
                var instance = node.__vue__;
                return processInstance(instance);
            });
        };
        walkDocument(document);
        var iframes = document.querySelectorAll('iframe');
        for (var iframe of iframes) {
            try {
                walkDocument(iframe.contentDocument);
            }
            catch (e) {
                // Ignore
            }
        }
    }
    else {
        if (Array.isArray(shared_utils_1.target.__VUE_ROOT_INSTANCES__)) {
            shared_utils_1.target.__VUE_ROOT_INSTANCES__.map(processInstance);
        }
    }
    return rootInstances;
}
exports.scan = scan;
/**
 * DOM walk helper
 *
 * @param {NodeList} nodes
 * @param {Function} fn
 */
function walk(node, fn) {
    if (node.childNodes) {
        for (var i = 0, l = node.childNodes.length; i < l; i++) {
            var child = node.childNodes[i];
            var stop = fn(child);
            if (!stop) {
                walk(child, fn);
            }
        }
    }
    // also walk shadow DOM
    if (node.shadowRoot) {
        walk(node.shadowRoot, fn);
    }
}
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 47388:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initOnPageConfig = exports.getPageConfig = void 0;
var shared_utils_1 = __webpack_require__(19746);
var config = {};
function getPageConfig() {
    return config;
}
exports.getPageConfig = getPageConfig;
function initOnPageConfig() {
    // User project devtools config
    if (Object.hasOwnProperty.call(shared_utils_1.target, 'VUE_DEVTOOLS_CONFIG')) {
        config = shared_utils_1.SharedData.pageConfig = shared_utils_1.target.VUE_DEVTOOLS_CONFIG;
        // Open in editor
        if (Object.hasOwnProperty.call(config, 'openInEditorHost')) {
            shared_utils_1.SharedData.openInEditorHost = config.openInEditorHost;
        }
    }
}
exports.initOnPageConfig = initOnPageConfig;
//# sourceMappingURL=page-config.js.map

/***/ }),

/***/ 56633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleAddPerformanceTag = exports.performanceMarkEnd = exports.performanceMarkStart = void 0;
var shared_utils_1 = __webpack_require__(19746);
var timeline_1 = __webpack_require__(77053);
var app_1 = __webpack_require__(61137);
var component_1 = __webpack_require__(59372);
var subscriptions_1 = __webpack_require__(44470);
async function performanceMarkStart(app, uid, instance, type, time, ctx) {
    try {
        if (!shared_utils_1.SharedData.performanceMonitoringEnabled)
            { return; }
        var appRecord = await app_1.getAppRecord(app, ctx);
        var componentName = await appRecord.backend.api.getComponentName(instance);
        var groupId = ctx.perfUniqueGroupId++;
        var groupKey = `${uid}-${type}`;
        appRecord.perfGroupIds.set(groupKey, { groupId, time });
        await timeline_1.addTimelineEvent({
            layerId: 'performance',
            event: {
                time,
                data: {
                    component: componentName,
                    type,
                    measure: 'start',
                },
                title: componentName,
                subtitle: type,
                groupId,
            },
        }, app, ctx);
    }
    catch (e) {
        if (shared_utils_1.SharedData.debugInfo) {
            console.error(e);
        }
    }
}
exports.performanceMarkStart = performanceMarkStart;
async function performanceMarkEnd(app, uid, instance, type, time, ctx) {
    try {
        if (!shared_utils_1.SharedData.performanceMonitoringEnabled)
            { return; }
        var appRecord = await app_1.getAppRecord(app, ctx);
        var componentName = await appRecord.backend.api.getComponentName(instance);
        var groupKey = `${uid}-${type}`;
        var { groupId, time: startTime } = appRecord.perfGroupIds.get(groupKey);
        var duration = time - startTime;
        await timeline_1.addTimelineEvent({
            layerId: 'performance',
            event: {
                time,
                data: {
                    component: componentName,
                    type,
                    measure: 'end',
                    duration: {
                        _custom: {
                            type: 'Duration',
                            value: duration,
                            display: `${duration} ms`,
                        },
                    },
                },
                title: componentName,
                subtitle: type,
                groupId,
            },
        }, app, ctx);
        // Mark on component
        var tooSlow = duration > 10;
        if (tooSlow || instance.__VUE_DEVTOOLS_SLOW__) {
            var change = false;
            if (tooSlow && !instance.__VUE_DEVTOOLS_SLOW__) {
                instance.__VUE_DEVTOOLS_SLOW__ = {
                    duration: null,
                    measures: {},
                };
            }
            var data = instance.__VUE_DEVTOOLS_SLOW__;
            if (tooSlow && (data.duration == null || data.duration < duration)) {
                data.duration = duration;
                change = true;
            }
            if (data.measures[type] == null || data.measures[type] < duration) {
                data.measures[type] = duration;
                change = true;
            }
            if (change) {
                // Update component tree
                var id = await component_1.getComponentId(app, uid, instance, ctx);
                if (subscriptions_1.isSubscribed(shared_utils_1.BridgeSubscriptions.COMPONENT_TREE, sub => sub.payload.instanceId === id)) {
                    requestAnimationFrame(() => {
                        component_1.sendComponentTreeData(appRecord, id, ctx.currentAppRecord.componentFilter, null, ctx);
                    });
                }
            }
        }
    }
    catch (e) {
        if (shared_utils_1.SharedData.debugInfo) {
            console.error(e);
        }
    }
}
exports.performanceMarkEnd = performanceMarkEnd;
function handleAddPerformanceTag(backend, ctx) {
    backend.api.on.visitComponentTree(payload => {
        if (payload.componentInstance.__VUE_DEVTOOLS_SLOW__) {
            var { duration, measures } = payload.componentInstance.__VUE_DEVTOOLS_SLOW__;
            var tooltip = '<div class="grid grid-cols-2 gap-2 font-mono text-xs">';
            for (var type in measures) {
                var d = measures[type];
                tooltip += `<div>${type}</div><div class="text-right text-black rounded px-1 ${d > 30 ? 'bg-red-400' : d > 10 ? 'bg-yellow-400' : 'bg-green-400'}">${d} ms</div>`;
            }
            tooltip += '</div>';
            payload.treeNode.tags.push({
                backgroundColor: duration > 30 ? 0xF87171 : 0xFBBF24,
                textColor: 0x000000,
                label: `${duration} ms`,
                tooltip,
            });
        }
    });
}
exports.handleAddPerformanceTag = handleAddPerformanceTag;
//# sourceMappingURL=perf.js.map

/***/ }),

/***/ 93614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializePlugin = exports.sendPluginList = exports.addPreviouslyRegisteredPlugins = exports.addQueuedPlugins = exports.addPlugin = void 0;
var app_backend_api_1 = __webpack_require__(98421);
var shared_utils_1 = __webpack_require__(19746);
var app_1 = __webpack_require__(61137);
async function addPlugin(pluginQueueItem, ctx) {
    var { pluginDescriptor, setupFn } = pluginQueueItem;
    var plugin = {
        descriptor: pluginDescriptor,
        setupFn,
        error: null,
    };
    ctx.currentPlugin = plugin;
    try {
        var appRecord = await app_1.getAppRecord(plugin.descriptor.app, ctx);
        var api = new app_backend_api_1.DevtoolsPluginApiInstance(plugin, appRecord, ctx);
        if (pluginQueueItem.proxy) {
            await pluginQueueItem.proxy.setRealTarget(api);
        }
        else {
            setupFn(api);
        }
    }
    catch (e) {
        plugin.error = e;
        console.error(e);
    }
    ctx.currentPlugin = null;
    ctx.plugins.push(plugin);
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_DEVTOOLS_PLUGIN_ADD, {
        plugin: await serializePlugin(plugin),
    });
    var targetList = shared_utils_1.target.__VUE_DEVTOOLS_REGISTERED_PLUGINS__ = shared_utils_1.target.__VUE_DEVTOOLS_REGISTERED_PLUGINS__ || [];
    targetList.push({
        pluginDescriptor,
        setupFn,
    });
}
exports.addPlugin = addPlugin;
async function addQueuedPlugins(ctx) {
    if (shared_utils_1.target.__VUE_DEVTOOLS_PLUGINS__ && Array.isArray(shared_utils_1.target.__VUE_DEVTOOLS_PLUGINS__)) {
        for (var queueItem of shared_utils_1.target.__VUE_DEVTOOLS_PLUGINS__) {
            await addPlugin(queueItem, ctx);
        }
        shared_utils_1.target.__VUE_DEVTOOLS_PLUGINS__ = null;
    }
}
exports.addQueuedPlugins = addQueuedPlugins;
async function addPreviouslyRegisteredPlugins(ctx) {
    if (shared_utils_1.target.__VUE_DEVTOOLS_REGISTERED_PLUGINS__ && Array.isArray(shared_utils_1.target.__VUE_DEVTOOLS_REGISTERED_PLUGINS__)) {
        for (var queueItem of shared_utils_1.target.__VUE_DEVTOOLS_REGISTERED_PLUGINS__) {
            await addPlugin(queueItem, ctx);
        }
    }
}
exports.addPreviouslyRegisteredPlugins = addPreviouslyRegisteredPlugins;
async function sendPluginList(ctx) {
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_DEVTOOLS_PLUGIN_LIST, {
        plugins: await Promise.all(ctx.plugins.map(p => serializePlugin(p))),
    });
}
exports.sendPluginList = sendPluginList;
async function serializePlugin(plugin) {
    return {
        id: plugin.descriptor.id,
        label: plugin.descriptor.label,
        appId: app_1.getAppRecordId(plugin.descriptor.app),
        packageName: plugin.descriptor.packageName,
        homepage: plugin.descriptor.homepage,
        logo: plugin.descriptor.logo,
        componentStateTypes: plugin.descriptor.componentStateTypes,
        settingsSchema: plugin.descriptor.settings,
    };
}
exports.serializePlugin = serializePlugin;
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ 87273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.builtinLayers = void 0;
exports.builtinLayers = [
    {
        id: 'mouse',
        label: 'Mouse',
        color: 0xA451AF,
        screenshotOverlayRender(event, ref) {
            var events = ref.events;

            var samePositionEvent = events.find(e => e !== event && e.renderMeta.textEl && e.data.x === event.data.x && e.data.y === event.data.y);
            if (samePositionEvent) {
                var text$1 = document.createElement('div');
                text$1.innerText = event.data.type;
                samePositionEvent.renderMeta.textEl.appendChild(text$1);
                return false;
            }
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = `${event.data.x - 4}px`;
            div.style.top = `${event.data.y - 4}px`;
            div.style.width = '8px';
            div.style.height = '8px';
            div.style.borderRadius = '100%';
            div.style.backgroundColor = 'rgba(164, 81, 175, 0.5)';
            var text = document.createElement('div');
            text.innerText = event.data.type;
            text.style.color = '#541e5b';
            text.style.fontFamily = 'monospace';
            text.style.fontSize = '9px';
            text.style.position = 'absolute';
            text.style.left = '10px';
            text.style.top = '10px';
            text.style.padding = '1px';
            text.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            text.style.borderRadius = '3px';
            div.appendChild(text);
            event.renderMeta.textEl = text;
            return div;
        },
    },
    {
        id: 'keyboard',
        label: 'Keyboard',
        color: 0x8151AF,
    },
    {
        id: 'component-event',
        label: 'Component events',
        color: 0x41B883,
        screenshotOverlayRender: (event, ref) => {
            var events = ref.events;

            if (!event.meta.bounds || events.some(e => e !== event && e.layerId === event.layerId && e.renderMeta.drawn && (e.meta.componentId === event.meta.componentId || (e.meta.bounds.left === event.meta.bounds.left &&
                e.meta.bounds.top === event.meta.bounds.top &&
                e.meta.bounds.width === event.meta.bounds.width &&
                e.meta.bounds.height === event.meta.bounds.height)))) {
                return false;
            }
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = `${event.meta.bounds.left - 4}px`;
            div.style.top = `${event.meta.bounds.top - 4}px`;
            div.style.width = `${event.meta.bounds.width}px`;
            div.style.height = `${event.meta.bounds.height}px`;
            div.style.borderRadius = '8px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '4px';
            div.style.borderColor = 'rgba(65, 184, 131, 0.5)';
            div.style.textAlign = 'center';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
            div.style.overflow = 'hidden';
            var text = document.createElement('div');
            text.style.color = '#267753';
            text.style.fontFamily = 'monospace';
            text.style.fontSize = '9px';
            text.style.padding = '1px';
            text.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            text.style.borderRadius = '3px';
            text.innerText = event.data.event;
            div.appendChild(text);
            event.renderMeta.drawn = true;
            return div;
        },
    },
    {
        id: 'performance',
        label: 'Performance',
        color: 0x41b86a,
        groupsOnly: true,
        skipScreenshots: true,
        ignoreNoDurationGroups: true,
    },
];
//# sourceMappingURL=timeline-builtins.js.map

/***/ }),

/***/ 19583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendTimelineMarkers = exports.addTimelineMarker = void 0;
var shared_utils_1 = __webpack_require__(19746);
async function addTimelineMarker(options, ctx) {
    var _a;
    if (!ctx.currentAppRecord) {
        options.all = true;
    }
    var marker = Object.assign({}, options,
        {appRecord: options.all ? null : ctx.currentAppRecord});
    ctx.timelineMarkers.push(marker);
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_MARKER, {
        marker: await serializeMarker(marker),
        appId: (_a = ctx.currentAppRecord) === null || _a === void 0 ? void 0 : _a.id,
    });
}
exports.addTimelineMarker = addTimelineMarker;
async function sendTimelineMarkers(ctx) {
    var markers = ctx.timelineMarkers.filter(marker => marker.all || marker.appRecord === ctx.currentAppRecord);
    var result = [];
    for (var marker of markers) {
        result.push(await serializeMarker(marker));
    }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_LOAD_MARKERS, {
        markers: result,
        appId: ctx.currentAppRecord.id,
    });
}
exports.sendTimelineMarkers = sendTimelineMarkers;
async function serializeMarker(marker) {
    var _a;
    return {
        id: marker.id,
        appId: (_a = marker.appRecord) === null || _a === void 0 ? void 0 : _a.id,
        all: marker.all,
        time: marker.time,
        label: marker.label,
        color: marker.color,
    };
}
//# sourceMappingURL=timeline-marker.js.map

/***/ }),

/***/ 27748:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showScreenshot = void 0;
var shared_utils_1 = __webpack_require__(19746);
var queue_1 = __webpack_require__(44951);
var timeline_builtins_1 = __webpack_require__(87273);
var overlay;
var image;
var container;
var jobQueue = new queue_1.JobQueue();
async function showScreenshot(screenshot, ctx) {
    await jobQueue.queue(async () => {
        if (screenshot) {
            if (!container) {
                createElements();
            }
            image.src = screenshot.image;
            image.style.visibility = screenshot.image ? 'visible' : 'hidden';
            clearContent();
            var events = screenshot.events.map(id => ctx.timelineEventMap.get(id)).filter(Boolean).map(eventData => ({
                layer: timeline_builtins_1.builtinLayers.concat(ctx.timelineLayers).find(layer => layer.id === eventData.layerId),
                event: Object.assign({}, eventData.event,
                    {layerId: eventData.layerId,
                    renderMeta: {}}),
            }));
            var renderContext = {
                screenshot,
                events: events.map((ref) => {
                    var event = ref.event;

                    return event;
            }),
                index: 0,
            };
            for (var i = 0; i < events.length; i++) {
                var { layer, event } = events[i];
                if (layer.screenshotOverlayRender) {
                    renderContext.index = i;
                    try {
                        var result = await layer.screenshotOverlayRender(event, renderContext);
                        if (result !== false) {
                            if (typeof result === 'string') {
                                container.innerHTML += result;
                            }
                            else {
                                container.appendChild(result);
                            }
                        }
                    }
                    catch (e) {
                        if (shared_utils_1.SharedData.debugInfo) {
                            console.error(e);
                        }
                    }
                }
            }
            showElement();
        }
        else {
            hideElement();
        }
    });
}
exports.showScreenshot = showScreenshot;
function createElements() {
    overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '9999999999999';
    overlay.style.pointerEvents = 'none';
    overlay.style.left = '0';
    overlay.style.top = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.overflow = 'hidden';
    var imageBox = document.createElement('div');
    imageBox.style.position = 'relative';
    overlay.appendChild(imageBox);
    image = document.createElement('img');
    imageBox.appendChild(image);
    container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '0';
    container.style.top = '0';
    imageBox.appendChild(container);
    var style = document.createElement('style');
    style.innerHTML = '.__vuedevtools_no-scroll { overflow: hidden; }';
    document.head.appendChild(style);
}
function showElement() {
    if (!overlay.parentNode) {
        document.body.appendChild(overlay);
        document.body.classList.add('__vuedevtools_no-scroll');
    }
}
function hideElement() {
    if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
        document.body.classList.remove('__vuedevtools_no-scroll');
        clearContent();
    }
}
function clearContent() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
//# sourceMappingURL=timeline-screenshot.js.map

/***/ }),

/***/ 77053:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendTimelineLayerEvents = exports.removeLayersForApp = exports.sendTimelineEventData = exports.clearTimeline = exports.addTimelineEvent = exports.sendTimelineLayers = exports.addBuiltinLayers = exports.setupTimeline = void 0;
var shared_utils_1 = __webpack_require__(19746);
var global_hook_1 = __webpack_require__(93858);
var app_1 = __webpack_require__(61137);
var timeline_builtins_1 = __webpack_require__(87273);
function setupTimeline(ctx) {
    setupBuiltinLayers(ctx);
}
exports.setupTimeline = setupTimeline;
function addBuiltinLayers(appRecord, ctx) {
    for (var layerDef of timeline_builtins_1.builtinLayers) {
        ctx.timelineLayers.push(Object.assign({}, layerDef,
            {appRecord,
            plugin: null,
            events: []}));
    }
}
exports.addBuiltinLayers = addBuiltinLayers;
function setupBuiltinLayers(ctx) {
    ['mousedown', 'mouseup', 'click', 'dblclick'].forEach(eventType => {
        // @ts-ignore
        window.addEventListener(eventType, async (event) => {
            await addTimelineEvent({
                layerId: 'mouse',
                event: {
                    time: Date.now(),
                    data: {
                        type: eventType,
                        x: event.clientX,
                        y: event.clientY,
                    },
                    title: eventType,
                },
            }, null, ctx);
        }, {
            capture: true,
            passive: true,
        });
    });
    ['keyup', 'keydown', 'keypress'].forEach(eventType => {
        // @ts-ignore
        window.addEventListener(eventType, async (event) => {
            await addTimelineEvent({
                layerId: 'keyboard',
                event: {
                    time: Date.now(),
                    data: {
                        type: eventType,
                        key: event.key,
                        ctrlKey: event.ctrlKey,
                        shiftKey: event.shiftKey,
                        altKey: event.altKey,
                        metaKey: event.metaKey,
                    },
                    title: event.key,
                },
            }, null, ctx);
        }, {
            capture: true,
            passive: true,
        });
    });
    global_hook_1.hook.on(shared_utils_1.HookEvents.COMPONENT_EMIT, async (app, instance, event, params) => {
        try {
            if (!shared_utils_1.SharedData.componentEventsEnabled)
                { return; }
            var appRecord = await app_1.getAppRecord(app, ctx);
            var componentId = `${appRecord.id}:${instance.uid}`;
            var componentDisplay = (await appRecord.backend.api.getComponentName(instance)) || '<i>Unknown Component</i>';
            await addTimelineEvent({
                layerId: 'component-event',
                event: {
                    time: Date.now(),
                    data: {
                        component: {
                            _custom: {
                                type: 'component-definition',
                                display: componentDisplay,
                            },
                        },
                        event,
                        params,
                    },
                    title: event,
                    subtitle: `by ${componentDisplay}`,
                    meta: {
                        componentId,
                        bounds: await appRecord.backend.api.getComponentBounds(instance),
                    },
                },
            }, app, ctx);
        }
        catch (e) {
            if (shared_utils_1.SharedData.debugInfo) {
                console.error(e);
            }
        }
    });
}
async function sendTimelineLayers(ctx) {
    var _a, _b;
    var layers = [];
    for (var layer of ctx.timelineLayers) {
        try {
            layers.push({
                id: layer.id,
                label: layer.label,
                color: layer.color,
                appId: (_a = layer.appRecord) === null || _a === void 0 ? void 0 : _a.id,
                pluginId: (_b = layer.plugin) === null || _b === void 0 ? void 0 : _b.descriptor.id,
                groupsOnly: layer.groupsOnly,
                skipScreenshots: layer.skipScreenshots,
                ignoreNoDurationGroups: layer.ignoreNoDurationGroups,
            });
        }
        catch (e) {
            if (shared_utils_1.SharedData.debugInfo) {
                console.error(e);
            }
        }
    }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_LAYER_LIST, {
        layers,
    });
}
exports.sendTimelineLayers = sendTimelineLayers;
async function addTimelineEvent(options, app, ctx) {
    var appId = app ? app_1.getAppRecordId(app) : null;
    var isAllApps = options.all || !app || appId == null;
    var id = ctx.nextTimelineEventId++;
    var eventData = Object.assign({}, {id},
        options,
        {all: isAllApps});
    ctx.timelineEventMap.set(eventData.id, eventData);
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_EVENT, {
        appId: eventData.all ? 'all' : appId,
        layerId: eventData.layerId,
        event: mapTimelineEvent(eventData),
    });
    var layer = ctx.timelineLayers.find(l => { var _a; return (isAllApps || ((_a = l.appRecord) === null || _a === void 0 ? void 0 : _a.options.app) === app) && l.id === options.layerId; });
    if (layer) {
        layer.events.push(eventData);
    }
    else if (shared_utils_1.SharedData.debugInfo) {
        console.warn(`Timeline layer ${options.layerId} not found`);
    }
}
exports.addTimelineEvent = addTimelineEvent;
function mapTimelineEvent(eventData) {
    return {
        id: eventData.id,
        time: eventData.event.time,
        logType: eventData.event.logType,
        groupId: eventData.event.groupId,
        title: eventData.event.title,
        subtitle: eventData.event.subtitle,
    };
}
async function clearTimeline(ctx) {
    ctx.timelineEventMap.clear();
    for (var layer of ctx.timelineLayers) {
        layer.events = [];
    }
    for (var backend of ctx.backends) {
        await backend.api.clearTimeline();
    }
}
exports.clearTimeline = clearTimeline;
async function sendTimelineEventData(id, ctx) {
    var data = null;
    var eventData = ctx.timelineEventMap.get(id);
    if (eventData) {
        data = await ctx.currentAppRecord.backend.api.inspectTimelineEvent(eventData, ctx.currentAppRecord.options.app);
        data = shared_utils_1.stringify(data);
    }
    else if (shared_utils_1.SharedData.debugInfo) {
        console.warn(`Event ${id} not found`, ctx.timelineEventMap.keys());
    }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_EVENT_DATA, {
        eventId: id,
        data,
    });
}
exports.sendTimelineEventData = sendTimelineEventData;
function removeLayersForApp(app, ctx) {
    var layers = ctx.timelineLayers.filter(l => { var _a; return ((_a = l.appRecord) === null || _a === void 0 ? void 0 : _a.options.app) === app; });
    for (var layer of layers) {
        var index = ctx.timelineLayers.indexOf(layer);
        if (index !== -1)
            { ctx.timelineLayers.splice(index, 1); }
        for (var e of layer.events) {
            ctx.timelineEventMap.delete(e.id);
        }
    }
}
exports.removeLayersForApp = removeLayersForApp;
function sendTimelineLayerEvents(appId, layerId, ctx) {
    var _a;
    var app = (_a = ctx.appRecords.find(ar => ar.id === appId)) === null || _a === void 0 ? void 0 : _a.options.app;
    if (!app)
        { return; }
    var layer = ctx.timelineLayers.find(l => { var _a; return ((_a = l.appRecord) === null || _a === void 0 ? void 0 : _a.options.app) === app && l.id === layerId; });
    if (!layer)
        { return; }
    ctx.bridge.send(shared_utils_1.BridgeEvents.TO_FRONT_TIMELINE_LAYER_LOAD_EVENTS, {
        appId,
        layerId,
        events: layer.events.map(e => mapTimelineEvent(e)),
    });
}
exports.sendTimelineLayerEvents = sendTimelineLayerEvents;
//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 44951:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JobQueue = void 0;
class JobQueue {
    constructor() {
        this.jobs = [];
    }
    queue(job) {
        return new Promise(resolve => {
            var onDone = () => {
                this.currentJob = null;
                var nextJob = this.jobs.shift();
                if (nextJob) {
                    nextJob();
                }
                resolve();
            };
            var run = () => {
                this.currentJob = job;
                return job().then(onDone);
            };
            if (this.currentJob) {
                this.jobs.push(() => run());
            }
            else {
                run();
            }
        });
    }
}
exports.JobQueue = JobQueue;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ 44470:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSubscribed = exports.unsubscribe = exports.subscribe = void 0;
var activeSubs = new Map();
function getSubs(type) {
    var subs = activeSubs.get(type);
    if (!subs) {
        subs = [];
        activeSubs.set(type, subs);
    }
    return subs;
}
function subscribe(type, payload) {
    var rawPayload = JSON.stringify(payload);
    getSubs(type).push({
        payload,
        rawPayload,
    });
}
exports.subscribe = subscribe;
function unsubscribe(type, payload) {
    var rawPayload = JSON.stringify(payload);
    var subs = getSubs(type);
    var index = subs.findIndex(sub => sub.rawPayload === rawPayload);
    if (index !== -1) {
        subs.splice(index, 1);
    }
}
exports.unsubscribe = unsubscribe;
function isSubscribed(type, predicate = () => true) {
    return getSubs(type).some(predicate);
}
exports.isSubscribed = isSubscribed;
//# sourceMappingURL=subscriptions.js.map

/***/ }),

/***/ 32035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backend = void 0;
var app_backend_api_1 = __webpack_require__(98421);
exports.backend = app_backend_api_1.defineBackend({
    frameworkVersion: 1,
    features: [],
    setup(api) {
        // @TODO
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.editState = exports.findInstanceOrVnode = exports.getInstanceName = exports.reduceStateList = exports.getCustomInstanceDetails = exports.getInstanceDetails = void 0;
var shared_utils_1 = __webpack_require__(19746);
var tree_1 = __webpack_require__(79153);
/**
 * Get the detailed information of an inspected instance.
 */
function getInstanceDetails(instance) {
    var _a, _b;
    if (instance.__VUE_DEVTOOLS_FUNCTIONAL_LEGACY__) {
        var vnode = findInstanceOrVnode(instance.__VUE_DEVTOOLS_UID__);
        if (!vnode)
            { return null; }
        var fakeInstance = Object.assign({}, {$options: vnode.fnOptions},
            ((_a = vnode.devtoolsMeta) === null || _a === void 0 ? void 0 : _a.renderContext.props));
        if (!fakeInstance.$options.props && ((_b = vnode.devtoolsMeta) === null || _b === void 0 ? void 0 : _b.renderContext.props)) {
            fakeInstance.$options.props = Object.keys(vnode.devtoolsMeta.renderContext.props).reduce((obj, key) => {
                obj[key] = {};
                return obj;
            }, {});
        }
        var data$1 = {
            id: instance.__VUE_DEVTOOLS_UID__,
            name: shared_utils_1.getComponentName(vnode.fnOptions),
            file: instance.type ? instance.type.__file : vnode.fnOptions.__file || null,
            state: getFunctionalInstanceState(fakeInstance),
            functional: true,
        };
        return data$1;
    }
    var data = {
        id: instance.__VUE_DEVTOOLS_UID__,
        name: getInstanceName(instance),
        state: getInstanceState(instance),
        file: null,
    };
    var i;
    if ((i = instance.$vnode) && (i = i.componentOptions) && (i = i.Ctor) && (i = i.options)) {
        data.file = i.__file || null;
    }
    return data;
}
exports.getInstanceDetails = getInstanceDetails;
function getInstanceState(instance) {
    return processProps(instance).concat(processState(instance), processRefs(instance), processComputed(instance), processInjected(instance), processRouteContext(instance), processVuexGetters(instance), processFirebaseBindings(instance), processObservables(instance), processAttrs(instance));
}
function getFunctionalInstanceState(instance) {
    return processProps(instance);
}
function getCustomInstanceDetails(instance) {
    var state = getInstanceState(instance);
    return {
        _custom: {
            type: 'component',
            id: instance.__VUE_DEVTOOLS_UID__,
            display: getInstanceName(instance),
            tooltip: 'Component instance',
            value: reduceStateList(state),
            fields: {
                abstract: true,
            },
        },
    };
}
exports.getCustomInstanceDetails = getCustomInstanceDetails;
function reduceStateList(list) {
    if (!list.length) {
        return undefined;
    }
    return list.reduce((map, item) => {
        var key = item.type || 'data';
        var obj = map[key] = map[key] || {};
        obj[item.key] = item.value;
        return map;
    }, {});
}
exports.reduceStateList = reduceStateList;
/**
 * Get the appropriate display name for an instance.
 */
function getInstanceName(instance) {
    var name = shared_utils_1.getComponentName(instance.$options || instance.fnOptions || {});
    if (name)
        { return name; }
    return instance.$root === instance
        ? 'Root'
        : 'Anonymous Component';
}
exports.getInstanceName = getInstanceName;
/**
 * Process the props of an instance.
 * Make sure return a plain object because window.postMessage()
 * will throw an Error if the passed object contains Functions.
 */
function processProps(instance) {
    var props = instance.$options.props;
    var propsData = [];
    for (var key in props) {
        var prop = props[key];
        key = shared_utils_1.camelize(key);
        propsData.push({
            type: 'props',
            key,
            value: instance[key],
            meta: prop
                ? {
                    type: prop.type ? getPropType(prop.type) : 'any',
                    required: !!prop.required,
                }
                : {
                    type: 'invalid',
                },
            editable: shared_utils_1.SharedData.editableProps,
        });
    }
    return propsData;
}
function processAttrs(instance) {
    return Object.entries(instance.$attrs || {}).map((ref) => {
        var key = ref[0];
        var value = ref[1];

        return {
            type: '$attrs',
            key,
            value,
        };
    });
}
var fnTypeRE = /^(?:function|class) (\w+)/;
/**
 * Convert prop type constructor to string.
 */
function getPropType(type) {
    if (Array.isArray(type)) {
        return type.map(t => getPropType(t)).join(' or ');
    }
    if (type == null) {
        return 'null';
    }
    var match = type.toString().match(fnTypeRE);
    return typeof type === 'function'
        ? (match && match[1]) || 'any'
        : 'any';
}
/**
 * Process state, filtering out props and "clean" the result
 * with a JSON dance. This removes functions which can cause
 * errors during structured clone used by window.postMessage.
 */
function processState(instance) {
    var props = instance.$options.props;
    var getters = instance.$options.vuex &&
        instance.$options.vuex.getters;
    return Object.keys(instance._data)
        .filter(key => (!(props && key in props) &&
        !(getters && key in getters)))
        .map(key => ({
        key,
        type: 'data',
        value: instance._data[key],
        editable: true,
    }));
}
/**
 * Process refs
 */
function processRefs(instance) {
    return Object.keys(instance.$refs)
        .filter(key => instance.$refs[key])
        .map(key => shared_utils_1.getCustomRefDetails(instance, key, instance.$refs[key]));
}
/**
 * Process the computed properties of an instance.
 */
function processComputed(instance) {
    var computed = [];
    var defs = instance.$options.computed || {};
    // use for...in here because if 'computed' is not defined
    // on component, computed properties will be placed in prototype
    // and Object.keys does not include
    // properties from object's prototype
    for (var key in defs) {
        var def = defs[key];
        var type = typeof def === 'function' && def.vuex
            ? 'vuex bindings'
            : 'computed';
        // use try ... catch here because some computed properties may
        // throw error during its evaluation
        var computedProp = null;
        try {
            computedProp = {
                type,
                key,
                value: instance[key],
            };
        }
        catch (e) {
            computedProp = {
                type,
                key,
                value: e,
            };
        }
        computed.push(computedProp);
    }
    return computed;
}
/**
 * Process Vuex getters.
 */
function processInjected(instance) {
    var injected = instance.$options.inject;
    if (injected) {
        return Object.keys(injected).map(key => {
            return {
                key,
                type: 'injected',
                value: instance[key],
            };
        });
    }
    else {
        return [];
    }
}
/**
 * Process possible vue-router $route context
 */
function processRouteContext(instance) {
    try {
        var route = instance.$route;
        if (route) {
            var { path, query, params } = route;
            var value = { path, query, params };
            if (route.fullPath)
                { value.fullPath = route.fullPath; }
            if (route.hash)
                { value.hash = route.hash; }
            if (route.name)
                { value.name = route.name; }
            if (route.meta)
                { value.meta = route.meta; }
            return [{
                    key: '$route',
                    type: 'route',
                    value: {
                        _custom: {
                            type: 'router',
                            abstract: true,
                            value,
                        },
                    },
                }];
        }
    }
    catch (e) {
        // Invalid $router
    }
    return [];
}
/**
 * Process Vuex getters.
 */
function processVuexGetters(instance) {
    var getters = instance.$options.vuex &&
        instance.$options.vuex.getters;
    if (getters) {
        return Object.keys(getters).map(key => {
            return {
                type: 'vuex getters',
                key,
                value: instance[key],
            };
        });
    }
    else {
        return [];
    }
}
/**
 * Process Firebase bindings.
 */
function processFirebaseBindings(instance) {
    var refs = instance.$firebaseRefs;
    if (refs) {
        return Object.keys(refs).map(key => {
            return {
                type: 'firebase bindings',
                key,
                value: instance[key],
            };
        });
    }
    else {
        return [];
    }
}
/**
 * Process vue-rx observable bindings.
 */
function processObservables(instance) {
    var obs = instance.$observables;
    if (obs) {
        return Object.keys(obs).map(key => {
            return {
                type: 'observables',
                key,
                value: instance[key],
            };
        });
    }
    else {
        return [];
    }
}
function findInstanceOrVnode(id) {
    if (/:functional:/.test(id)) {
        var [refId] = id.split(':functional:');
        var map = tree_1.functionalVnodeMap.get(refId);
        return map && map[id];
    }
    return tree_1.instanceMap.get(id);
}
exports.findInstanceOrVnode = findInstanceOrVnode;
function editState(ref, stateEditor) {
    var componentInstance = ref.componentInstance;
    var path = ref.path;
    var state = ref.state;
    var type = ref.type;

    if (!['data', 'props', 'computed', 'setup'].includes(type))
        { return; }
    var data = stateEditor.has(componentInstance._props, path, !!state.newKey)
        ? componentInstance._props
        : componentInstance._data;
    stateEditor.set(data, path, state.value, stateEditor.createDefaultSetCallback(state));
}
exports.editState = editState;
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 3206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRootElementsFromComponentInstance = exports.findRelatedComponent = exports.getInstanceOrVnodeRect = void 0;
var shared_utils_1 = __webpack_require__(19746);
function createRect() {
    var rect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        get width() { return rect.right - rect.left; },
        get height() { return rect.bottom - rect.top; },
    };
    return rect;
}
function mergeRects(a, b) {
    if (!a.top || b.top < a.top) {
        a.top = b.top;
    }
    if (!a.bottom || b.bottom > a.bottom) {
        a.bottom = b.bottom;
    }
    if (!a.left || b.left < a.left) {
        a.left = b.left;
    }
    if (!a.right || b.right > a.right) {
        a.right = b.right;
    }
    return a;
}
/**
 * Get the client rect for an instance.
 */
function getInstanceOrVnodeRect(instance) {
    var el = instance.$el || instance.elm;
    if (!shared_utils_1.isBrowser) {
        // TODO: Find position from instance or a vnode (for functional components).
        return;
    }
    if (!shared_utils_1.inDoc(el)) {
        return;
    }
    if (instance._isFragment) {
        return addIframePosition(getLegacyFragmentRect(instance), getElWindow(instance.$root.$el));
    }
    else if (el.nodeType === 1) {
        return addIframePosition(el.getBoundingClientRect(), getElWindow(el));
    }
}
exports.getInstanceOrVnodeRect = getInstanceOrVnodeRect;
/**
 * Highlight a fragment instance.
 * Loop over its node range and determine its bounding box.
 */
function getLegacyFragmentRect(ref) {
    var _fragmentStart = ref._fragmentStart;
    var _fragmentEnd = ref._fragmentEnd;

    var rect = createRect();
    util().mapNodeRange(_fragmentStart, _fragmentEnd, function (node) {
        var childRect;
        if (node.nodeType === 1 || node.getBoundingClientRect) {
            childRect = node.getBoundingClientRect();
        }
        else if (node.nodeType === 3 && node.data.trim()) {
            childRect = getTextRect(node);
        }
        if (childRect) {
            mergeRects(rect, childRect);
        }
    });
    return rect;
}
var range;
/**
 * Get the bounding rect for a text node using a Range.
 */
function getTextRect(node) {
    if (!shared_utils_1.isBrowser)
        { return; }
    if (!range)
        { range = document.createRange(); }
    range.selectNode(node);
    return range.getBoundingClientRect();
}
/**
 * Get Vue's util
 */
function util() {
    return shared_utils_1.target.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue.util;
}
function findRelatedComponent(el) {
    while (!el.__vue__ && el.parentElement) {
        el = el.parentElement;
    }
    return el.__vue__;
}
exports.findRelatedComponent = findRelatedComponent;
function getElWindow(el) {
    return el.ownerDocument.defaultView;
}
function addIframePosition(bounds, win) {
    if (win.__VUE_DEVTOOLS_IFRAME__) {
        var rect = mergeRects(createRect(), bounds);
        var iframeBounds = win.__VUE_DEVTOOLS_IFRAME__.getBoundingClientRect();
        rect.top += iframeBounds.top;
        rect.bottom += iframeBounds.top;
        rect.left += iframeBounds.left;
        rect.right += iframeBounds.left;
        if (win.parent) {
            return addIframePosition(rect, win.parent);
        }
        return rect;
    }
    return bounds;
}
function getRootElementsFromComponentInstance(instance) {
    if (instance._isFragment) {
        var list = [];
        var { _fragmentStart, _fragmentEnd } = instance;
        util().mapNodeRange(_fragmentStart, _fragmentEnd, node => {
            list.push(node);
        });
        return list;
    }
    return [instance.$el];
}
exports.getRootElementsFromComponentInstance = getRootElementsFromComponentInstance;
//# sourceMappingURL=el.js.map

/***/ }),

/***/ 79153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getComponentParents = exports.walkTree = exports.functionalVnodeMap = exports.instanceMap = void 0;
var shared_utils_1 = __webpack_require__(19746);
var el_1 = __webpack_require__(3206);
var util_1 = __webpack_require__(26545);
var appRecord;
var api;
var consoleBoundInstances = Array(5);
var filter = '';
var functionalIds = new Map();
// Dedupe instances
// Some instances may be both on a component and on a child abstract/functional component
var captureIds = new Map();
async function walkTree(instance, pFilter, api, ctx) {
    initCtx(api, ctx);
    filter = pFilter;
    functionalIds.clear();
    captureIds.clear();
    var result = flatten(await findQualifiedChildren(instance));
    return result;
}
exports.walkTree = walkTree;
function getComponentParents(instance, api, ctx) {
    initCtx(api, ctx);
    var captureIds = new Map();
    var captureId = vm => {
        var id = util_1.getUniqueId(vm);
        if (captureIds.has(id))
            { return; }
        captureIds.set(id, undefined);
        mark(vm);
    };
    var parents = [];
    captureId(instance);
    var parent = instance;
    while ((parent = parent.$parent)) {
        captureId(parent);
        parents.push(parent);
    }
    return parents;
}
exports.getComponentParents = getComponentParents;
function initCtx(_api, ctx) {
    appRecord = ctx.currentAppRecord;
    api = _api;
    if (!appRecord.meta.instanceMap) {
        appRecord.meta.instanceMap = new Map();
    }
    exports.instanceMap = appRecord.meta.instanceMap;
    if (!appRecord.meta.functionalVnodeMap) {
        appRecord.meta.functionalVnodeMap = new Map();
    }
    exports.functionalVnodeMap = appRecord.meta.functionalVnodeMap;
}
/**
 * Iterate through an array of instances and flatten it into
 * an array of qualified instances. This is a depth-first
 * traversal - e.g. if an instance is not matched, we will
 * recursively go deeper until a qualified child is found.
 */
function findQualifiedChildrenFromList(instances) {
    instances = instances
        .filter(child => !util_1.isBeingDestroyed(child));
    return Promise.all(!filter
        ? instances.map(capture)
        : Array.prototype.concat.apply([], instances.map(findQualifiedChildren)));
}
/**
 * Find qualified children from a single instance.
 * If the instance itself is qualified, just return itself.
 * This is ok because [].concat works in both cases.
 */
async function findQualifiedChildren(instance) {
    if (isQualified(instance)) {
        return [await capture(instance)];
    }
    else {
        var children = await findQualifiedChildrenFromList(instance.$children);
        // Find functional components in recursively in non-functional vnodes.
        if (instance._vnode && instance._vnode.children) {
            var list = await Promise.all(flatten(instance._vnode.children.filter(child => !child.componentInstance).map(captureChild)));
            // Filter qualified children.
            var additionalChildren = list.filter(instance => isQualified(instance));
            children = children.concat(additionalChildren);
        }
        return children;
    }
}
/**
 * Get children from a component instance.
 */
function getInternalInstanceChildren(instance) {
    if (instance.$children) {
        return instance.$children;
    }
    return [];
}
/**
 * Check if an instance is qualified.
 */
function isQualified(instance) {
    var name = shared_utils_1.classify(util_1.getInstanceName(instance)).toLowerCase();
    return name.indexOf(filter) > -1;
}
function flatten(items) {
    var r = items.reduce((acc, item) => {
        if (Array.isArray(item)) {
            var children = [];
            for (var i of item) {
                if (Array.isArray(i)) {
                    children = children.concat(flatten(i));
                }
                else {
                    children.push(i);
                }
            }
            acc.push(...children);
        }
        else if (item) {
            acc.push(item);
        }
        return acc;
    }, []);
    return r;
}
function captureChild(child) {
    if (child.fnContext && !child.componentInstance) {
        return capture(child);
    }
    else if (child.componentInstance) {
        if (!util_1.isBeingDestroyed(child.componentInstance))
            { return capture(child.componentInstance); }
    }
    else if (child.children) {
        return Promise.all(flatten(child.children.map(captureChild)));
    }
}
/**
 * Capture the meta information of an instance. (recursive)
 */
async function capture(instance, index, list) {
    var _a, _b, _c, _d;
    if (instance.__VUE_DEVTOOLS_FUNCTIONAL_LEGACY__) {
        instance = instance.vnode;
    }
    if (instance.$options && instance.$options.abstract && instance._vnode && instance._vnode.componentInstance) {
        instance = instance._vnode.componentInstance;
    }
    if ((_b = (_a = instance.$options) === null || _a === void 0 ? void 0 : _a.devtools) === null || _b === void 0 ? void 0 : _b.hide)
        { return; }
    // Functional component.
    if (instance.fnContext && !instance.componentInstance) {
        var contextUid = instance.fnContext.__VUE_DEVTOOLS_UID__;
        var id = functionalIds.get(contextUid);
        if (id == null) {
            id = 0;
        }
        else {
            id++;
        }
        functionalIds.set(contextUid, id);
        var functionalId = contextUid + ':functional:' + id;
        markFunctional(functionalId, instance);
        var childrenPromise = (instance.children
            ? instance.children.map(child => child.fnContext
                ? captureChild(child)
                : child.componentInstance
                    ? capture(child.componentInstance)
                    : undefined)
            // router-view has both fnContext and componentInstance on vnode.
            : instance.componentInstance ? [capture(instance.componentInstance)] : []);
        // await all childrenCapture to-be resolved
        var children$1 = (await Promise.all(childrenPromise)).filter(Boolean);
        var treeNode = {
            uid: functionalId,
            id: functionalId,
            tags: [
                {
                    label: 'functional',
                    textColor: 0x555555,
                    backgroundColor: 0xeeeeee,
                },
            ],
            name: util_1.getInstanceName(instance),
            renderKey: util_1.getRenderKey(instance.key),
            children: children$1,
            hasChildren: !!children$1.length,
            inactive: false,
            isFragment: false,
        };
        return api.visitComponentTree(instance, treeNode, filter, (_c = appRecord === null || appRecord === void 0 ? void 0 : appRecord.options) === null || _c === void 0 ? void 0 : _c.app);
    }
    // instance._uid is not reliable in devtools as there
    // may be 2 roots with same _uid which causes unexpected
    // behaviour
    instance.__VUE_DEVTOOLS_UID__ = util_1.getUniqueId(instance);
    // Dedupe
    if (captureIds.has(instance.__VUE_DEVTOOLS_UID__)) {
        return;
    }
    else {
        captureIds.set(instance.__VUE_DEVTOOLS_UID__, undefined);
    }
    mark(instance);
    var name = util_1.getInstanceName(instance);
    var children = (await Promise.all((await getInternalInstanceChildren(instance))
        .filter(child => !util_1.isBeingDestroyed(child))
        .map(capture))).filter(Boolean);
    var ret = {
        uid: instance._uid,
        id: instance.__VUE_DEVTOOLS_UID__,
        name,
        renderKey: util_1.getRenderKey(instance.$vnode ? instance.$vnode.key : null),
        inactive: !!instance._inactive,
        isFragment: !!instance._isFragment,
        children,
        hasChildren: !!children.length,
        tags: [],
        meta: {},
    };
    if (instance._vnode && instance._vnode.children) {
        var vnodeChildren = await Promise.all(flatten(instance._vnode.children.map(captureChild)));
        ret.children = ret.children.concat(flatten(vnodeChildren).filter(Boolean));
        ret.hasChildren = !!ret.children.length;
    }
    // ensure correct ordering
    var rootElements = el_1.getRootElementsFromComponentInstance(instance);
    var firstElement = rootElements[0];
    if (firstElement === null || firstElement === void 0 ? void 0 : firstElement.parentElement) {
        var parentInstance = instance.$parent;
        var parentRootElements = parentInstance ? el_1.getRootElementsFromComponentInstance(parentInstance) : [];
        var el = firstElement;
        var indexList = [];
        do {
            indexList.push(Array.from(el.parentElement.childNodes).indexOf(el));
            el = el.parentElement;
        } while (el.parentElement && parentRootElements.length && !parentRootElements.includes(el));
        ret.domOrder = indexList.reverse();
    }
    else {
        ret.domOrder = [-1];
    }
    // check if instance is available in console
    var consoleId = consoleBoundInstances.indexOf(instance.__VUE_DEVTOOLS_UID__);
    ret.consoleId = consoleId > -1 ? '$vm' + consoleId : null;
    // check router view
    var isRouterView2 = instance.$vnode && instance.$vnode.data.routerView;
    if (instance._routerView || isRouterView2) {
        ret.isRouterView = true;
        if (!instance._inactive && instance.$route) {
            var matched = instance.$route.matched;
            var depth = isRouterView2
                ? instance.$vnode.data.routerViewDepth
                : instance._routerView.depth;
            ret.meta.matchedRouteSegment =
                matched &&
                    matched[depth] &&
                    (isRouterView2 ? matched[depth].path : matched[depth].handler.path);
        }
        ret.tags.push({
            label: `router-view${ret.meta.matchedRouteSegment ? `: ${ret.meta.matchedRouteSegment}` : ''}`,
            textColor: 0x000000,
            backgroundColor: 0xff8344,
        });
    }
    return api.visitComponentTree(instance, ret, filter, (_d = appRecord === null || appRecord === void 0 ? void 0 : appRecord.options) === null || _d === void 0 ? void 0 : _d.app);
}
/**
 * Mark an instance as captured and store it in the instance map.
 *
 * @param {Vue} instance
 */
function mark(instance) {
    var refId = instance.__VUE_DEVTOOLS_UID__;
    if (!exports.instanceMap.has(refId)) {
        exports.instanceMap.set(refId, instance);
        appRecord.instanceMap.set(refId, instance);
        instance.$on('hook:beforeDestroy', function () {
            exports.instanceMap.delete(refId);
        });
    }
}
function markFunctional(id, vnode) {
    var refId = vnode.fnContext.__VUE_DEVTOOLS_UID__;
    if (!exports.functionalVnodeMap.has(refId)) {
        exports.functionalVnodeMap.set(refId, {});
        vnode.fnContext.$on('hook:beforeDestroy', function () {
            exports.functionalVnodeMap.delete(refId);
        });
    }
    exports.functionalVnodeMap.get(refId)[id] = vnode;
    appRecord.instanceMap.set(id, {
        __VUE_DEVTOOLS_UID__: id,
        __VUE_DEVTOOLS_FUNCTIONAL_LEGACY__: true,
        vnode,
    });
}
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ 26545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUniqueId = exports.getRenderKey = exports.getInstanceName = exports.isBeingDestroyed = void 0;
var shared_utils_1 = __webpack_require__(19746);
function isBeingDestroyed(instance) {
    return instance._isBeingDestroyed;
}
exports.isBeingDestroyed = isBeingDestroyed;
/**
 * Get the appropriate display name for an instance.
 */
function getInstanceName(instance) {
    var name = shared_utils_1.getComponentName(instance.$options || instance.fnOptions || {});
    if (name)
        { return name; }
    return instance.$root === instance
        ? 'Root'
        : 'Anonymous Component';
}
exports.getInstanceName = getInstanceName;
function getRenderKey(value) {
    if (value == null)
        { return; }
    var type = typeof value;
    if (type === 'number') {
        return value.toString();
    }
    else if (type === 'string') {
        return `'${value}'`;
    }
    else if (Array.isArray(value)) {
        return 'Array';
    }
    else {
        return 'Object';
    }
}
exports.getRenderKey = getRenderKey;
/**
 * Returns a devtools unique id for instance.
 */
function getUniqueId(instance) {
    if (instance.__VUE_DEVTOOLS_UID__ != null)
        { return instance.__VUE_DEVTOOLS_UID__; }
    var rootVueId = instance.$root.__VUE_DEVTOOLS_APP_RECORD_ID__;
    return `${rootVueId}:${instance._uid}`;
}
exports.getUniqueId = getUniqueId;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 50425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapVueForEvents = void 0;
var shared_utils_1 = __webpack_require__(19746);
var internalRE = /^(?:pre-)?hook:/;
function wrap(app, Vue, method, ctx) {
    var original = Vue.prototype[method];
    if (original) {
        Vue.prototype[method] = function (...args) {
            var res = original.apply(this, args);
            logEvent(this, method, args[0], args.slice(1));
            return res;
        };
    }
    function logEvent(vm, type, eventName, payload) {
        // The string check is important for compat with 1.x where the first
        // argument may be an object instead of a string.
        // this also ensures the event is only logged for direct $emit (source)
        // instead of by $dispatch/$broadcast
        if (typeof eventName === 'string' && !internalRE.test(eventName)) {
            var instance = vm._self || vm;
            ctx.hook.emit(shared_utils_1.HookEvents.COMPONENT_EMIT, app, instance, eventName, payload);
        }
    }
}
function wrapVueForEvents(app, Vue, ctx) {
    ['$emit', '$broadcast', '$dispatch'].forEach(method => {
        wrap(app, Vue, method, ctx);
    });
}
exports.wrapVueForEvents = wrapVueForEvents;
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 9687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backend = void 0;
var app_backend_api_1 = __webpack_require__(98421);
var shared_utils_1 = __webpack_require__(19746);
var data_1 = __webpack_require__(4107);
var el_1 = __webpack_require__(3206);
var tree_1 = __webpack_require__(79153);
var util_1 = __webpack_require__(26545);
var events_1 = __webpack_require__(50425);
var plugin_1 = __webpack_require__(98015);
exports.backend = app_backend_api_1.defineBackend({
    frameworkVersion: 2,
    features: [
        app_backend_api_1.BuiltinBackendFeature.FLUSH,
    ],
    setup(api) {
        api.on.getAppRecordName(payload => {
            if (payload.app.name) {
                payload.name = payload.app.name;
            }
        });
        api.on.getAppRootInstance(payload => {
            payload.root = payload.app;
        });
        api.on.walkComponentTree(async (payload, ctx) => {
            payload.componentTreeData = await tree_1.walkTree(payload.componentInstance, payload.filter, api, ctx);
        });
        api.on.walkComponentParents((payload, ctx) => {
            payload.parentInstances = tree_1.getComponentParents(payload.componentInstance, api, ctx);
        });
        api.on.inspectComponent(payload => {
            injectToUtils();
            payload.instanceData = data_1.getInstanceDetails(payload.componentInstance);
        });
        api.on.getComponentBounds(payload => {
            payload.bounds = el_1.getInstanceOrVnodeRect(payload.componentInstance);
        });
        api.on.getComponentName(payload => {
            var instance = payload.componentInstance;
            payload.name = instance.fnContext ? shared_utils_1.getComponentName(instance.fnOptions) : util_1.getInstanceName(instance);
        });
        api.on.getElementComponent(payload => {
            payload.componentInstance = el_1.findRelatedComponent(payload.element);
        });
        api.on.editComponentState(payload => {
            data_1.editState(payload, api.stateEditor);
        });
        api.on.getComponentRootElements(payload => {
            payload.rootElements = el_1.getRootElementsFromComponentInstance(payload.componentInstance);
        });
        api.on.getComponentDevtoolsOptions(payload => {
            payload.options = payload.componentInstance.$options.devtools;
        });
        api.on.getComponentRenderCode(payload => {
            payload.code = payload.componentInstance.$options.render.toString();
        });
        api.on.getComponentInstances(() => {
            console.warn('on.getComponentInstances is not implemented for Vue 2');
        });
    },
    setupApp(api, appRecord) {
        var { Vue } = appRecord.options.meta;
        var app = appRecord.options.app;
        // State editor overrides
        api.stateEditor.createDefaultSetCallback = state => {
            return (obj, field, value) => {
                if (state.remove || state.newKey)
                    { Vue.delete(obj, field); }
                if (!state.remove)
                    { Vue.set(obj, state.newKey || field, value); }
            };
        };
        // Utils
        injectToUtils();
        events_1.wrapVueForEvents(app, Vue, api.ctx);
        // Plugin
        plugin_1.setupPlugin(api, app, Vue);
    },
});
// @TODO refactor
function injectToUtils() {
    shared_utils_1.backendInjections.getCustomInstanceDetails = data_1.getCustomInstanceDetails;
    shared_utils_1.backendInjections.instanceMap = tree_1.instanceMap;
    shared_utils_1.backendInjections.isVueInstance = val => val._isVue;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98015:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupPlugin = void 0;
var devtools_api_1 = __webpack_require__(57275);
var shared_utils_1 = __webpack_require__(19746);
var clone_deep_1 = __importDefault(__webpack_require__(96206));
var actionId = 0;
function setupPlugin(api, app, Vue) {
    var ROUTER_INSPECTOR_ID = 'vue2-router-inspector';
    var ROUTER_CHANGES_LAYER_ID = 'vue2-router-changes';
    var VUEX_INSPECTOR_ID = 'vue2-vuex-inspector';
    var VUEX_MUTATIONS_ID = 'vue2-vuex-mutations';
    var VUEX_ACTIONS_ID = 'vue2-vuex-actions';
    devtools_api_1.setupDevtoolsPlugin({
        app,
        id: 'org.vuejs.vue2-internal',
        label: 'Vue 2',
        homepage: 'https://vuejs.org/',
        logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    }, api => {
        var hook = shared_utils_1.target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        // Vue Router
        if (app.$router) {
            var router = app.$router;
            // Inspector
            api.addInspector({
                id: ROUTER_INSPECTOR_ID,
                label: 'Routes',
                icon: 'book',
                treeFilterPlaceholder: 'Search routes',
            });
            api.on.getInspectorTree(payload => {
                if (payload.inspectorId === ROUTER_INSPECTOR_ID) {
                    payload.rootNodes = router.options.routes.map(route => formatRouteNode(router, route, '', payload.filter)).filter(Boolean);
                }
            });
            api.on.getInspectorState(payload => {
                if (payload.inspectorId === ROUTER_INSPECTOR_ID) {
                    var route = router.matcher.getRoutes().find(r => getPathId(r) === payload.nodeId);
                    if (route) {
                        payload.state = {
                            options: formatRouteData(route),
                        };
                    }
                }
            });
            // Timeline
            api.addTimelineLayer({
                id: ROUTER_CHANGES_LAYER_ID,
                label: 'Router Navigations',
                color: 0x40a8c4,
            });
            router.afterEach((to, from) => {
                api.addTimelineEvent({
                    layerId: ROUTER_CHANGES_LAYER_ID,
                    event: {
                        time: Date.now(),
                        title: to.path,
                        data: {
                            from,
                            to,
                        },
                    },
                });
                api.sendInspectorTree(ROUTER_INSPECTOR_ID);
            });
        }
        // Vuex
        if (app.$store) {
            var store = app.$store;
            api.addInspector({
                id: VUEX_INSPECTOR_ID,
                label: 'Vuex',
                icon: 'storage',
                treeFilterPlaceholder: 'Filter stores...',
            });
            api.on.getInspectorTree((payload) => {
                if (payload.inspectorId === VUEX_INSPECTOR_ID) {
                    if (payload.filter) {
                        var nodes = [];
                        flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
                        payload.rootNodes = nodes;
                    }
                    else {
                        payload.rootNodes = [
                            formatStoreForInspectorTree(store._modules.root, ''),
                        ];
                    }
                }
            });
            api.on.getInspectorState((payload) => {
                if (payload.inspectorId === VUEX_INSPECTOR_ID) {
                    var modulePath = payload.nodeId;
                    var module = getStoreModule(store._modules, modulePath);
                    // Access the getters prop to init getters cache (which is lazy)
                    // eslint-disable-next-line no-unused-expressions
                    module.context.getters;
                    payload.state = formatStoreForInspectorState(module, store._makeLocalGettersCache, modulePath);
                }
            });
            api.addTimelineLayer({
                id: VUEX_MUTATIONS_ID,
                label: 'Vuex Mutations',
                color: LIME_500,
            });
            api.addTimelineLayer({
                id: VUEX_ACTIONS_ID,
                label: 'Vuex Actions',
                color: LIME_500,
            });
            hook.on('vuex:mutation', (mutation, state) => {
                api.sendInspectorState(VUEX_INSPECTOR_ID);
                var data = {};
                if (mutation.payload) {
                    data.payload = mutation.payload;
                }
                data.state = clone_deep_1.default(state);
                api.addTimelineEvent({
                    layerId: VUEX_MUTATIONS_ID,
                    event: {
                        time: Date.now(),
                        title: mutation.type,
                        data,
                    },
                });
            });
            store.subscribeAction({
                before: (action, state) => {
                    var data = {};
                    if (action.payload) {
                        data.payload = action.payload;
                    }
                    action._id = actionId++;
                    action._time = Date.now();
                    data.state = state;
                    api.addTimelineEvent({
                        layerId: VUEX_ACTIONS_ID,
                        event: {
                            time: action._time,
                            title: action.type,
                            groupId: action._id,
                            subtitle: 'start',
                            data,
                        },
                    });
                },
                after: (action, state) => {
                    var data = {};
                    var duration = Date.now() - action._time;
                    data.duration = {
                        _custom: {
                            type: 'duration',
                            display: `${duration}ms`,
                            tooltip: 'Action duration',
                            value: duration,
                        },
                    };
                    if (action.payload) {
                        data.payload = action.payload;
                    }
                    data.state = state;
                    api.addTimelineEvent({
                        layerId: VUEX_ACTIONS_ID,
                        event: {
                            time: Date.now(),
                            title: action.type,
                            groupId: action._id,
                            subtitle: 'end',
                            data,
                        },
                    });
                },
            }, { prepend: true });
            // Inspect getters on mutations
            api.on.inspectTimelineEvent(payload => {
                if (payload.layerId === VUEX_MUTATIONS_ID) {
                    var getterKeys = Object.keys(store.getters);
                    if (getterKeys.length) {
                        var vm = new Vue({
                            data: {
                                $$state: payload.data.state,
                            },
                            computed: store._vm.$options.computed,
                        });
                        var originalVm = store._vm;
                        store._vm = vm;
                        var tree = transformPathsToObjectTree(store.getters);
                        payload.data.getters = clone_deep_1.default(tree);
                        store._vm = originalVm;
                        vm.$destroy();
                    }
                }
            });
        }
    });
}
exports.setupPlugin = setupPlugin;
/**
 * Extracted from tailwind palette
 */
var BLUE_600 = 0x2563eb;
var LIME_500 = 0x84cc16;
var CYAN_400 = 0x22d3ee;
var ORANGE_400 = 0xfb923c;
var WHITE = 0xffffff;
var DARK = 0x666666;
function formatRouteNode(router, route, parentPath, filter) {
    var _a, _b;
    var node = {
        id: parentPath + route.path,
        label: route.path,
        children: (_a = route.children) === null || _a === void 0 ? void 0 : _a.map(child => formatRouteNode(router, child, route.path, filter)).filter(Boolean),
        tags: [],
    };
    if (filter && !node.id.includes(filter) && !((_b = node.children) === null || _b === void 0 ? void 0 : _b.length))
        { return null; }
    if (route.name != null) {
        node.tags.push({
            label: String(route.name),
            textColor: 0,
            backgroundColor: CYAN_400,
        });
    }
    if (route.alias != null) {
        node.tags.push({
            label: 'alias',
            textColor: 0,
            backgroundColor: ORANGE_400,
        });
    }
    var currentPath = router.currentRoute.matched.reduce((p, m) => p + m.path, '');
    if (node.id === currentPath) {
        node.tags.push({
            label: 'active',
            textColor: WHITE,
            backgroundColor: BLUE_600,
        });
    }
    if (route.redirect) {
        node.tags.push({
            label: 'redirect: ' +
                (typeof route.redirect === 'string' ? route.redirect : 'Object'),
            textColor: WHITE,
            backgroundColor: DARK,
        });
    }
    return node;
}
function formatRouteData(route) {
    var data = [];
    data.push({ key: 'path', value: route.path });
    if (route.redirect) {
        data.push({ key: 'redirect', value: route.redirect });
    }
    if (route.alias) {
        data.push({ key: 'alias', value: route.alias });
    }
    if (route.props) {
        data.push({ key: 'props', value: route.props });
    }
    if (route.name && route.name != null) {
        data.push({ key: 'name', value: route.name });
    }
    if (route.component) {
        var component = {};
        // if (route.component.__file) {
        //   component.file = route.component.__file
        // }
        if (route.component.template) {
            component.template = route.component.template;
        }
        if (route.component.props) {
            component.props = route.component.props;
        }
        if (!shared_utils_1.isEmptyObject(component)) {
            data.push({ key: 'component', value: component });
        }
    }
    return data;
}
function getPathId(routeMatcher) {
    var path = routeMatcher.path;
    if (routeMatcher.parent) {
        path = getPathId(routeMatcher.parent) + path;
    }
    return path;
}
var TAG_NAMESPACED = {
    label: 'namespaced',
    textColor: WHITE,
    backgroundColor: DARK,
};
function formatStoreForInspectorTree(module, path) {
    return {
        id: path || 'root',
        // all modules end with a `/`, we want the last segment only
        // cart/ -> cart
        // nested/cart/ -> cart
        label: extractNameFromPath(path),
        tags: module.namespaced ? [TAG_NAMESPACED] : [],
        children: Object.keys(module._children).map((moduleName) => formatStoreForInspectorTree(module._children[moduleName], path + moduleName + '/')),
    };
}
function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
        result.push({
            id: path || 'root',
            label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
            tags: module.namespaced ? [TAG_NAMESPACED] : [],
        });
    }
    Object.keys(module._children).forEach(moduleName => {
        flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
    });
}
function extractNameFromPath(path) {
    return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root';
}
function formatStoreForInspectorState(module, getters, path) {
    getters = !module.namespaced || path === 'root' ? module.context.getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
        state: Object.keys(module.state).map((key) => ({
            key,
            editable: true,
            value: module.state[key],
        })),
    };
    if (gettersKeys.length) {
        var tree = transformPathsToObjectTree(getters);
        storeState.getters = Object.keys(tree).map((key) => ({
            key: key.endsWith('/') ? extractNameFromPath(key) : key,
            editable: false,
            value: canThrow(() => tree[key]),
        }));
    }
    return storeState;
}
function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(key => {
        var path = key.split('/');
        if (path.length > 1) {
            var target = result;
            var leafKey = path.pop();
            for (var p of path) {
                if (!target[p]) {
                    target[p] = {
                        _custom: {
                            value: {},
                            display: p,
                            tooltip: 'Module',
                            abstract: true,
                        },
                    };
                }
                target = target[p]._custom.value;
            }
            target[leafKey] = canThrow(() => getters[key]);
        }
        else {
            result[key] = canThrow(() => getters[key]);
        }
    });
    return result;
}
function getStoreModule(moduleMap, path) {
    var names = path.split('/').filter((n) => n);
    return names.reduce((module, moduleName, i) => {
        var child = module[moduleName];
        if (!child) {
            throw new Error(`Missing module "${moduleName}" for path "${path}".`);
        }
        return i === names.length - 1 ? child : child._children;
    }, path === 'root' ? moduleMap : moduleMap.root._children);
}
function canThrow(cb) {
    try {
        return cb();
    }
    catch (e) {
        return e;
    }
}
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ 89227:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCustomInstanceDetails = exports.editState = exports.getInstanceDetails = void 0;
var util_1 = __webpack_require__(75453);
var shared_utils_1 = __webpack_require__(19746);
var util_2 = __webpack_require__(63729);
/**
 * Get the detailed information of an inspected instance.
 */
function getInstanceDetails(instance, ctx) {
    var _a;
    return {
        id: util_1.getUniqueComponentId(instance, ctx),
        name: util_1.getInstanceName(instance),
        file: (_a = instance.type) === null || _a === void 0 ? void 0 : _a.__file,
        state: getInstanceState(instance),
    };
}
exports.getInstanceDetails = getInstanceDetails;
function getInstanceState(instance) {
    var mergedType = resolveMergedOptions(instance);
    return processProps(instance).concat(processState(instance), processSetupState(instance), processComputed(instance, mergedType), processAttrs(instance), processProvide(instance), processInject(instance, mergedType), processRefs(instance));
}
/**
 * Process the props of an instance.
 * Make sure return a plain object because window.postMessage()
 * will throw an Error if the passed object contains Functions.
 *
 * @param {Vue} instance
 * @return {Array}
 */
function processProps(instance) {
    var propsData = [];
    var propDefinitions = instance.type.props;
    var loop = function ( key ) {
        var propDefinition = propDefinitions ? propDefinitions[key] : null;
        key = shared_utils_1.camelize(key);
        propsData.push({
            type: 'props',
            key,
            value: util_2.returnError(() => instance.props[key]),
            meta: propDefinition
                ? Object.assign({}, {type: propDefinition.type ? getPropType(propDefinition.type) : 'any',
                    required: !!propDefinition.required},
                    propDefinition.default != null
                        ? {
                            default: propDefinition.default.toString(),
                        }
                        : {})
                : {
                    type: 'invalid',
                },
            editable: shared_utils_1.SharedData.editableProps,
        });
    };

    for (var key in instance.props) loop( key );
    return propsData;
}
var fnTypeRE = /^(?:function|class) (\w+)/;
/**
 * Convert prop type constructor to string.
 */
function getPropType(type) {
    if (Array.isArray(type)) {
        return type.map(t => getPropType(t)).join(' or ');
    }
    if (type == null) {
        return 'null';
    }
    var match = type.toString().match(fnTypeRE);
    return typeof type === 'function'
        ? (match && match[1]) || 'any'
        : 'any';
}
/**
 * Process state, filtering out props and "clean" the result
 * with a JSON dance. This removes functions which can cause
 * errors during structured clone used by window.postMessage.
 *
 * @param {Vue} instance
 * @return {Array}
 */
function processState(instance) {
    var type = instance.type;
    var props = type.props;
    var getters = type.vuex &&
        type.vuex.getters;
    var computedDefs = type.computed;
    var data = Object.assign({}, instance.data,
        instance.renderContext);
    return Object.keys(data)
        .filter(key => (!(props && key in props) &&
        !(getters && key in getters) &&
        !(computedDefs && key in computedDefs)))
        .map(key => ({
        key,
        type: 'data',
        value: util_2.returnError(() => data[key]),
        editable: true,
    }));
}
function processSetupState(instance) {
    var raw = instance.devtoolsRawSetupState || {};
    return Object.keys(instance.setupState)
        .map(key => {
        var _a, _b, _c, _d;
        var value = util_2.returnError(() => instance.setupState[key]);
        var rawData = raw[key];
        var result;
        if (rawData) {
            var info = getSetupStateInfo(rawData);
            var objectType = info.computed ? 'Computed' : info.ref ? 'Ref' : info.reactive ? 'Reactive' : null;
            var isState = info.ref || info.computed || info.reactive;
            var isOther = typeof value === 'function' || typeof (value === null || value === void 0 ? void 0 : value.render) === 'function';
            var raw$1 = ((_b = (_a = rawData.effect) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.toString()) || ((_d = (_c = rawData.effect) === null || _c === void 0 ? void 0 : _c.fn) === null || _d === void 0 ? void 0 : _d.toString());
            result = Object.assign({}, objectType ? { objectType } : {},
                raw$1 ? { raw: raw$1 } : {},
                {editable: isState && !info.readonly,
                type: isOther ? 'setup (other)' : 'setup'});
        }
        else {
            result = {
                type: 'setup',
            };
        }
        return Object.assign({}, {key,
            value},
            result);
    });
}
function isRef(raw) {
    return !!raw.__v_isRef;
}
function isComputed(raw) {
    return isRef(raw) && !!raw.effect;
}
function isReactive(raw) {
    return !!raw.__v_isReactive;
}
function isReadOnly(raw) {
    return !!raw.__v_isReadonly;
}
function getSetupStateInfo(raw) {
    return {
        ref: isRef(raw),
        computed: isComputed(raw),
        reactive: isReactive(raw),
        readonly: isReadOnly(raw),
    };
}
/**
 * Process the computed properties of an instance.
 *
 * @param {Vue} instance
 * @return {Array}
 */
function processComputed(instance, mergedType) {
    var type = mergedType;
    var computed = [];
    var defs = type.computed || {};
    // use for...in here because if 'computed' is not defined
    // on component, computed properties will be placed in prototype
    // and Object.keys does not include
    // properties from object's prototype
    var loop = function ( key ) {
        var def = defs[key];
        var type$1 = typeof def === 'function' && def.vuex
            ? 'vuex bindings'
            : 'computed';
        computed.push({
            type: type$1,
            key,
            value: util_2.returnError(() => instance.proxy[key]),
            editable: typeof def.set === 'function',
        });
    };

    for (var key in defs) loop( key );
    return computed;
}
function processAttrs(instance) {
    return Object.keys(instance.attrs)
        .map(key => ({
        type: 'attrs',
        key,
        value: util_2.returnError(() => instance.attrs[key]),
    }));
}
function processProvide(instance) {
    return Object.keys(instance.provides)
        .map(key => ({
        type: 'provided',
        key,
        value: util_2.returnError(() => instance.provides[key]),
    }));
}
function processInject(instance, mergedType) {
    if (!(mergedType === null || mergedType === void 0 ? void 0 : mergedType.inject))
        { return []; }
    var keys = [];
    if (Array.isArray(mergedType.inject)) {
        keys = mergedType.inject.map(key => ({
            key,
            originalKey: key,
        }));
    }
    else {
        keys = Object.keys(mergedType.inject).map(key => {
            var value = mergedType.inject[key];
            var originalKey;
            if (typeof value === 'string') {
                originalKey = value;
            }
            else {
                originalKey = value.from;
            }
            return {
                key,
                originalKey,
            };
        });
    }
    return keys.map((ref) => {
        var key = ref.key;
        var originalKey = ref.originalKey;

        return ({
        type: 'injected',
        key: originalKey && key !== originalKey ? `${originalKey} ➞ ${key}` : key,
        value: util_2.returnError(() => instance.ctx[key]),
    });
    });
}
function processRefs(instance) {
    return Object.keys(instance.refs)
        .map(key => ({
        type: 'refs',
        key,
        value: util_2.returnError(() => instance.refs[key]),
    }));
}
function editState(ref, stateEditor, ctx) {
    var componentInstance = ref.componentInstance;
    var path = ref.path;
    var state = ref.state;
    var type = ref.type;

    if (!['data', 'props', 'computed', 'setup'].includes(type))
        { return; }
    var target;
    var targetPath = path.slice();
    if (Object.keys(componentInstance.props).includes(path[0])) {
        // Props
        target = componentInstance.props;
    }
    else if (componentInstance.devtoolsRawSetupState && Object.keys(componentInstance.devtoolsRawSetupState).includes(path[0])) {
        // Setup
        target = componentInstance.devtoolsRawSetupState;
        var currentValue = stateEditor.get(componentInstance.devtoolsRawSetupState, path);
        if (currentValue != null) {
            var info = getSetupStateInfo(currentValue);
            if (info.readonly)
                { return; }
        }
    }
    else {
        target = componentInstance.proxy;
    }
    if (target && targetPath) {
        stateEditor.set(target, targetPath, 'value' in state ? state.value : undefined, stateEditor.createDefaultSetCallback(state));
    }
}
exports.editState = editState;
function reduceStateList(list) {
    if (!list.length) {
        return undefined;
    }
    return list.reduce((map, item) => {
        var key = item.type || 'data';
        var obj = map[key] = map[key] || {};
        obj[item.key] = item.value;
        return map;
    }, {});
}
function getCustomInstanceDetails(instance) {
    if (instance._)
        { instance = instance._; }
    var state = getInstanceState(instance);
    return {
        _custom: {
            type: 'component',
            id: instance.__VUE_DEVTOOLS_UID__,
            display: util_1.getInstanceName(instance),
            tooltip: 'Component instance',
            value: reduceStateList(state),
            fields: {
                abstract: true,
            },
        },
    };
}
exports.getCustomInstanceDetails = getCustomInstanceDetails;
function resolveMergedOptions(instance) {
    var raw = instance.type;
    var { mixins, extends: extendsOptions } = raw;
    var globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        { return raw; }
    var options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return options;
}
function mergeOptions(to, from, instance) {
    if (typeof from === 'function') {
        from = from.options;
    }
    if (!from)
        { return to; }
    var { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins &&
        mixins.forEach((m) => mergeOptions(to, m, instance));
    for (var key of ['computed', 'inject']) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            if (!to[key]) {
                to[key] = from[key];
            }
            else {
                Object.assign(to[key], from[key]);
            }
        }
    }
    return to;
}
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 65191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInstanceOrVnodeRect = exports.getRootElementsFromComponentInstance = exports.getComponentInstanceFromElement = void 0;
var shared_utils_1 = __webpack_require__(19746);
var util_1 = __webpack_require__(75453);
function getComponentInstanceFromElement(element) {
    return element.__vueParentComponent;
}
exports.getComponentInstanceFromElement = getComponentInstanceFromElement;
function getRootElementsFromComponentInstance(instance) {
    if (util_1.isFragment(instance)) {
        return getFragmentRootElements(instance.subTree);
    }
    return [instance.subTree.el];
}
exports.getRootElementsFromComponentInstance = getRootElementsFromComponentInstance;
function getFragmentRootElements(vnode) {
    if (!vnode.children)
        { return []; }
    var list = [];
    for (var i = 0, l = vnode.children.length; i < l; i++) {
        var childVnode = vnode.children[i];
        if (childVnode.component) {
            list.push(...getRootElementsFromComponentInstance(childVnode.component));
        }
        else if (childVnode.el) {
            list.push(childVnode.el);
        }
    }
    return list;
}
/**
 * Get the client rect for an instance.
 *
 * @param {Vue|Vnode} instance
 * @return {Object}
 */
function getInstanceOrVnodeRect(instance) {
    var el = instance.subTree.el;
    if (!shared_utils_1.isBrowser) {
        // @TODO: Find position from instance or a vnode (for functional components).
        return;
    }
    if (!shared_utils_1.inDoc(el)) {
        return;
    }
    if (util_1.isFragment(instance)) {
        return addIframePosition(getFragmentRect(instance.subTree), getElWindow(el));
    }
    else if (el.nodeType === 1) {
        return addIframePosition(el.getBoundingClientRect(), getElWindow(el));
    }
}
exports.getInstanceOrVnodeRect = getInstanceOrVnodeRect;
function createRect() {
    var rect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        get width() { return rect.right - rect.left; },
        get height() { return rect.bottom - rect.top; },
    };
    return rect;
}
function mergeRects(a, b) {
    if (!a.top || b.top < a.top) {
        a.top = b.top;
    }
    if (!a.bottom || b.bottom > a.bottom) {
        a.bottom = b.bottom;
    }
    if (!a.left || b.left < a.left) {
        a.left = b.left;
    }
    if (!a.right || b.right > a.right) {
        a.right = b.right;
    }
    return a;
}
var range;
/**
 * Get the bounding rect for a text node using a Range.
 *
 * @param {Text} node
 * @return {Rect}
 */
function getTextRect(node) {
    if (!shared_utils_1.isBrowser)
        { return; }
    if (!range)
        { range = document.createRange(); }
    range.selectNode(node);
    return range.getBoundingClientRect();
}
function getFragmentRect(vnode) {
    var rect = createRect();
    if (!vnode.children)
        { return rect; }
    for (var i = 0, l = vnode.children.length; i < l; i++) {
        var childVnode = vnode.children[i];
        var childRect = (void 0);
        if (childVnode.component) {
            childRect = getInstanceOrVnodeRect(childVnode.component);
        }
        else if (childVnode.el) {
            var el = childVnode.el;
            if (el.nodeType === 1 || el.getBoundingClientRect) {
                childRect = el.getBoundingClientRect();
            }
            else if (el.nodeType === 3 && el.data.trim()) {
                childRect = getTextRect(el);
            }
        }
        if (childRect) {
            mergeRects(rect, childRect);
        }
    }
    return rect;
}
function getElWindow(el) {
    return el.ownerDocument.defaultView;
}
function addIframePosition(bounds, win) {
    if (win.__VUE_DEVTOOLS_IFRAME__) {
        var rect = mergeRects(createRect(), bounds);
        var iframeBounds = win.__VUE_DEVTOOLS_IFRAME__.getBoundingClientRect();
        rect.top += iframeBounds.top;
        rect.bottom += iframeBounds.top;
        rect.left += iframeBounds.left;
        rect.right += iframeBounds.left;
        if (win.parent) {
            return addIframePosition(rect, win.parent);
        }
        return rect;
    }
    return bounds;
}
//# sourceMappingURL=el.js.map

/***/ }),

/***/ 31954:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentFilter = void 0;
var shared_utils_1 = __webpack_require__(19746);
var util_1 = __webpack_require__(75453);
class ComponentFilter {
    constructor(filter) {
        this.filter = filter || '';
    }
    /**
     * Check if an instance is qualified.
     *
     * @param {Vue|Vnode} instance
     * @return {Boolean}
     */
    isQualified(instance) {
        var name = shared_utils_1.classify(util_1.getInstanceName(instance)).toLowerCase();
        return name.indexOf(this.filter) > -1;
    }
}
exports.ComponentFilter = ComponentFilter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 20750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentWalker = void 0;
var util_1 = __webpack_require__(75453);
var filter_1 = __webpack_require__(31954);
var el_1 = __webpack_require__(65191);
class ComponentWalker {
    constructor(maxDepth, filter, api, ctx) {
        this.ctx = ctx;
        this.api = api;
        this.maxDepth = maxDepth;
        this.componentFilter = new filter_1.ComponentFilter(filter);
    }
    getComponentTree(instance) {
        this.captureIds = new Map();
        return this.findQualifiedChildren(instance, 0);
    }
    getComponentParents(instance) {
        this.captureIds = new Map();
        var parents = [];
        this.captureId(instance);
        var parent = instance;
        while ((parent = parent.parent)) {
            this.captureId(parent);
            parents.push(parent);
        }
        return parents;
    }
    /**
     * Find qualified children from a single instance.
     * If the instance itself is qualified, just return itself.
     * This is ok because [].concat works in both cases.
     *
     * @param {Vue|Vnode} instance
     * @return {Vue|Array}
     */
    async findQualifiedChildren(instance, depth) {
        var _a;
        if (this.componentFilter.isQualified(instance) && !((_a = instance.type.devtools) === null || _a === void 0 ? void 0 : _a.hide)) {
            return [await this.capture(instance, null, depth)];
        }
        else if (instance.subTree) {
            // TODO functional components
            return this.findQualifiedChildrenFromList(this.getInternalInstanceChildren(instance.subTree), depth);
        }
        else {
            return [];
        }
    }
    /**
     * Iterate through an array of instances and flatten it into
     * an array of qualified instances. This is a depth-first
     * traversal - e.g. if an instance is not matched, we will
     * recursively go deeper until a qualified child is found.
     *
     * @param {Array} instances
     * @return {Array}
     */
    async findQualifiedChildrenFromList(instances, depth) {
        instances = instances
            .filter(child => { var _a; return !util_1.isBeingDestroyed(child) && !((_a = child.type.devtools) === null || _a === void 0 ? void 0 : _a.hide); });
        if (!this.componentFilter.filter) {
            return Promise.all(instances.map((child, index, list) => this.capture(child, list, depth)));
        }
        else {
            return Array.prototype.concat.apply([], await Promise.all(instances.map(i => this.findQualifiedChildren(i, depth))));
        }
    }
    /**
     * Get children from a component instance.
     */
    getInternalInstanceChildren(subTree) {
        var list = [];
        if (subTree.component) {
            list.push(subTree.component);
        }
        else if (subTree.suspense) {
            list.push(...this.getInternalInstanceChildren(subTree.suspense.activeBranch));
        }
        else if (Array.isArray(subTree.children)) {
            subTree.children.forEach(childSubTree => {
                if (childSubTree.component) {
                    list.push(childSubTree.component);
                }
                else {
                    list.push(...this.getInternalInstanceChildren(childSubTree));
                }
            });
        }
        return list.filter(child => { var _a; return !util_1.isBeingDestroyed(child) && !((_a = child.type.devtools) === null || _a === void 0 ? void 0 : _a.hide); });
    }
    captureId(instance) {
        if (!instance)
            { return null; }
        // instance.uid is not reliable in devtools as there
        // may be 2 roots with same uid which causes unexpected
        // behaviour
        var id = instance.__VUE_DEVTOOLS_UID__ != null ? instance.__VUE_DEVTOOLS_UID__ : util_1.getUniqueComponentId(instance, this.ctx);
        instance.__VUE_DEVTOOLS_UID__ = id;
        // Dedupe
        if (this.captureIds.has(id)) {
            return;
        }
        else {
            this.captureIds.set(id, undefined);
        }
        this.mark(instance);
        return id;
    }
    /**
     * Capture the meta information of an instance. (recursive)
     *
     * @param {Vue} instance
     * @return {Object}
     */
    async capture(instance, list, depth) {
        var id = this.captureId(instance);
        var name = util_1.getInstanceName(instance);
        var children = this.getInternalInstanceChildren(instance.subTree)
            .filter(child => !util_1.isBeingDestroyed(child));
        var parents = this.getComponentParents(instance) || [];
        var inactive = !!instance.isDeactivated || parents.some(parent => parent.isDeactivated);
        var treeNode = {
            uid: instance.uid,
            id,
            name,
            renderKey: util_1.getRenderKey(instance.vnode ? instance.vnode.key : null),
            inactive,
            hasChildren: !!children.length,
            children: [],
            isFragment: util_1.isFragment(instance),
            tags: [],
        };
        var isKeepAliveChild = parents.some(parent => parent.type.__isKeepAlive);
        // capture children
        if (isKeepAliveChild || depth < this.maxDepth) {
            treeNode.children = await Promise.all(children
                .map((child, index, list) => this.capture(child, list, depth + 1))
                .filter(Boolean));
        }
        // keep-alive
        if (instance.type.__isKeepAlive && instance.__v_cache) {
            var cachedComponents = Array.from(instance.__v_cache.values()).map((vnode) => vnode.component).filter(Boolean);
            for (var child of cachedComponents) {
                if (!children.includes(child)) {
                    var node = await this.capture(Object.assign({}, child, {isDeactivated: true}), null, depth + 1);
                    if (node) {
                        treeNode.children.push(node);
                    }
                }
            }
        }
        // ensure correct ordering
        var rootElements = el_1.getRootElementsFromComponentInstance(instance);
        var firstElement = rootElements[0];
        if (firstElement === null || firstElement === void 0 ? void 0 : firstElement.parentElement) {
            var parentInstance = instance.parent;
            var parentRootElements = parentInstance ? el_1.getRootElementsFromComponentInstance(parentInstance) : [];
            var el = firstElement;
            var indexList = [];
            do {
                indexList.push(Array.from(el.parentElement.childNodes).indexOf(el));
                el = el.parentElement;
            } while (el.parentElement && parentRootElements.length && !parentRootElements.includes(el));
            treeNode.domOrder = indexList.reverse();
        }
        else {
            treeNode.domOrder = [-1];
        }
        if (instance.suspense) {
            treeNode.tags.push({
                label: 's',
                backgroundColor: 0x7d7dd7,
                textColor: 0xffffff,
                tooltip: 'Suspense',
            });
        }
        return this.api.visitComponentTree(instance, treeNode, this.componentFilter.filter, this.ctx.currentAppRecord.options.app);
    }
    /**
     * Mark an instance as captured and store it in the instance map.
     *
     * @param {Vue} instance
     */
    mark(instance) {
        var instanceMap = this.ctx.currentAppRecord.instanceMap;
        if (!instanceMap.has(instance.__VUE_DEVTOOLS_UID__)) {
            instanceMap.set(instance.__VUE_DEVTOOLS_UID__, instance);
        }
    }
}
exports.ComponentWalker = ComponentWalker;
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ 75453:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getComponentInstances = exports.getRenderKey = exports.getUniqueComponentId = exports.getInstanceName = exports.isFragment = exports.getAppRecord = exports.isBeingDestroyed = void 0;
var shared_utils_1 = __webpack_require__(19746);
var util_1 = __webpack_require__(63729);
function isBeingDestroyed(instance) {
    return instance._isBeingDestroyed || instance.isUnmounted;
}
exports.isBeingDestroyed = isBeingDestroyed;
function getAppRecord(instance) {
    if (instance.root) {
        return instance.appContext.app.__VUE_DEVTOOLS_APP_RECORD__;
    }
}
exports.getAppRecord = getAppRecord;
function isFragment(instance) {
    var appRecord = getAppRecord(instance);
    if (appRecord) {
        return appRecord.options.types.Fragment === instance.subTree.type;
    }
}
exports.isFragment = isFragment;
/**
 * Get the appropriate display name for an instance.
 *
 * @param {Vue} instance
 * @return {String}
 */
function getInstanceName(instance) {
    var _a, _b, _c;
    var name = getComponentTypeName(instance.type || {});
    if (name)
        { return name; }
    if (instance.root === instance)
        { return 'Root'; }
    for (var key in (_b = (_a = instance.parent) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.components) {
        if (instance.parent.type.components[key] === instance.type)
            { return saveComponentName(instance, key); }
    }
    for (var key$1 in (_c = instance.appContext) === null || _c === void 0 ? void 0 : _c.components) {
        if (instance.appContext.components[key$1] === instance.type)
            { return saveComponentName(instance, key$1); }
    }
    return 'Anonymous Component';
}
exports.getInstanceName = getInstanceName;
function saveComponentName(instance, key) {
    instance.type.__vdevtools_guessedName = key;
    return key;
}
function getComponentTypeName(options) {
    var name = options.name || options._componentTag || options.__vdevtools_guessedName;
    if (name) {
        return name;
    }
    var file = options.__file; // injected by vue-loader
    if (file) {
        return shared_utils_1.classify(util_1.basename(file, '.vue'));
    }
}
/**
 * Returns a devtools unique id for instance.
 * @param {Vue} instance
 */
function getUniqueComponentId(instance, ctx) {
    var appId = instance.appContext.app.__VUE_DEVTOOLS_APP_RECORD_ID__;
    var instanceId = instance === instance.root ? 'root' : instance.uid;
    return `${appId}:${instanceId}`;
}
exports.getUniqueComponentId = getUniqueComponentId;
function getRenderKey(value) {
    if (value == null)
        { return; }
    var type = typeof value;
    if (type === 'number') {
        return value;
    }
    else if (type === 'string') {
        return `'${value}'`;
    }
    else if (Array.isArray(value)) {
        return 'Array';
    }
    else {
        return 'Object';
    }
}
exports.getRenderKey = getRenderKey;
function getComponentInstances(app) {
    var appRecord = app.__VUE_DEVTOOLS_APP_RECORD__;
    var appId = appRecord.id.toString();
    return [...appRecord.instanceMap]
        .filter((ref) => {
            var key = ref[0];

            return key.split(':')[0] === appId;
    })
        .map((ref) => {
            var instance = ref[1];

            return instance;
    }); // eslint-disable-line comma-spacing
}
exports.getComponentInstances = getComponentInstances;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 57126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.backend = void 0;
var app_backend_api_1 = __webpack_require__(98421);
var tree_1 = __webpack_require__(20750);
var data_1 = __webpack_require__(89227);
var util_1 = __webpack_require__(75453);
var el_1 = __webpack_require__(65191);
var shared_utils_1 = __webpack_require__(19746);
exports.backend = app_backend_api_1.defineBackend({
    frameworkVersion: 3,
    features: [],
    setup(api) {
        api.on.getAppRecordName(payload => {
            if (payload.app._component) {
                payload.name = payload.app._component.name;
            }
        });
        api.on.getAppRootInstance(payload => {
            var _a, _b, _c, _d;
            if (payload.app._instance) {
                payload.root = payload.app._instance;
            }
            else if ((_b = (_a = payload.app._container) === null || _a === void 0 ? void 0 : _a._vnode) === null || _b === void 0 ? void 0 : _b.component) {
                payload.root = (_d = (_c = payload.app._container) === null || _c === void 0 ? void 0 : _c._vnode) === null || _d === void 0 ? void 0 : _d.component;
            }
        });
        api.on.walkComponentTree(async (payload, ctx) => {
            var walker = new tree_1.ComponentWalker(payload.maxDepth, payload.filter, api, ctx);
            payload.componentTreeData = await walker.getComponentTree(payload.componentInstance);
        });
        api.on.walkComponentParents((payload, ctx) => {
            var walker = new tree_1.ComponentWalker(0, null, api, ctx);
            payload.parentInstances = walker.getComponentParents(payload.componentInstance);
        });
        api.on.inspectComponent((payload, ctx) => {
            // @TODO refactor
            shared_utils_1.backendInjections.getCustomInstanceDetails = data_1.getCustomInstanceDetails;
            shared_utils_1.backendInjections.instanceMap = ctx.currentAppRecord.instanceMap;
            shared_utils_1.backendInjections.isVueInstance = val => val._ && Object.keys(val._).includes('vnode');
            payload.instanceData = data_1.getInstanceDetails(payload.componentInstance, ctx);
        });
        api.on.getComponentName(payload => {
            payload.name = util_1.getInstanceName(payload.componentInstance);
        });
        api.on.getComponentBounds(payload => {
            payload.bounds = el_1.getInstanceOrVnodeRect(payload.componentInstance);
        });
        api.on.getElementComponent(payload => {
            payload.componentInstance = el_1.getComponentInstanceFromElement(payload.element);
        });
        api.on.getComponentInstances(payload => {
            payload.componentInstances = util_1.getComponentInstances(payload.app);
        });
        api.on.getComponentRootElements(payload => {
            payload.rootElements = el_1.getRootElementsFromComponentInstance(payload.componentInstance);
        });
        api.on.editComponentState((payload, ctx) => {
            data_1.editState(payload, api.stateEditor, ctx);
        });
        api.on.getComponentDevtoolsOptions(payload => {
            payload.options = payload.componentInstance.type.devtools;
        });
        api.on.getComponentRenderCode(payload => {
            payload.code = !(payload.componentInstance.type instanceof Function) ? payload.componentInstance.render.toString() : payload.componentInstance.type.toString();
        });
        api.on.transformCall(payload => {
            if (payload.callName === shared_utils_1.HookEvents.COMPONENT_UPDATED) {
                var component = payload.inArgs[0];
                payload.outArgs = [
                    component.appContext.app,
                    component.uid,
                    component.parent ? component.parent.uid : undefined,
                    component,
                ];
            }
        });
        api.stateEditor.isRef = value => !!value.__v_isRef;
        api.stateEditor.getRefValue = ref => ref.value;
        api.stateEditor.setRefValue = (ref, value) => {
            ref.value = value;
        };
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 63729:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnError = exports.basename = exports.flatten = void 0;
var path_1 = __importDefault(__webpack_require__(21023));
function flatten(items) {
    return items.reduce((acc, item) => {
        if (item instanceof Array)
            { acc.push(...flatten(item)); }
        else if (item)
            { acc.push(item); }
        return acc;
    }, []);
}
exports.flatten = flatten;
// Use a custom basename functions instead of the shimed version
// because it doesn't work on Windows
function basename(filename, ext) {
    return path_1.default.basename(filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/'), ext);
}
exports.basename = basename;
function returnError(cb) {
    try {
        return cb();
    }
    catch (e) {
        return e;
    }
}
exports.returnError = returnError;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 18201:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCatchedGetters = exports.getCustomStoreDetails = exports.getCustomRouterDetails = exports.isVueInstance = exports.getCustomInstanceDetails = exports.getInstanceMap = exports.backendInjections = void 0;
exports.backendInjections = {
    instanceMap: new Map(),
    isVueInstance: (() => false),
    getCustomInstanceDetails: (() => ({})),
};
function getInstanceMap() {
    return exports.backendInjections.instanceMap;
}
exports.getInstanceMap = getInstanceMap;
function getCustomInstanceDetails(instance) {
    return exports.backendInjections.getCustomInstanceDetails(instance);
}
exports.getCustomInstanceDetails = getCustomInstanceDetails;
function isVueInstance(value) {
    return exports.backendInjections.isVueInstance(value);
}
exports.isVueInstance = isVueInstance;
// @TODO refactor
function getCustomRouterDetails(router) {
    return {
        _custom: {
            type: 'router',
            display: 'VueRouter',
            value: {
                options: router.options,
                currentRoute: router.currentRoute,
            },
            fields: {
                abstract: true,
            },
        },
    };
}
exports.getCustomRouterDetails = getCustomRouterDetails;
// @TODO refactor
function getCustomStoreDetails(store) {
    return {
        _custom: {
            type: 'store',
            display: 'Store',
            value: {
                state: store.state,
                getters: getCatchedGetters(store),
            },
            fields: {
                abstract: true,
            },
        },
    };
}
exports.getCustomStoreDetails = getCustomStoreDetails;
// @TODO refactor
function getCatchedGetters(store) {
    var getters = {};
    var origGetters = store.getters || {};
    var keys = Object.keys(origGetters);
    var loop = function ( i ) {
        var key = keys[i];
        Object.defineProperty(getters, key, {
            enumerable: true,
            get: () => {
                try {
                    return origGetters[key];
                }
                catch (e) {
                    return e;
                }
            },
        });
    };

    for (var i = 0; i < keys.length; i++) loop( i );
    return getters;
}
exports.getCatchedGetters = getCatchedGetters;
//# sourceMappingURL=backend.js.map

/***/ }),

/***/ 36523:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bridge = void 0;
var events_1 = __webpack_require__(22699);
var BATCH_DURATION = 100;
class Bridge extends events_1.EventEmitter {
    constructor(wall) {
        super();
        this.setMaxListeners(Infinity);
        this.wall = wall;
        wall.listen(messages => {
            if (Array.isArray(messages)) {
                messages.forEach(message => this._emit(message));
            }
            else {
                this._emit(messages);
            }
        });
        this._batchingQueue = [];
        this._sendingQueue = [];
        this._receivingQueue = [];
        this._sending = false;
        this._time = null;
    }
    send(event, payload) {
        if (Array.isArray(payload)) {
            var lastIndex = payload.length - 1;
            payload.forEach((chunk, index) => {
                this._send({
                    event,
                    _chunk: chunk,
                    last: index === lastIndex,
                });
            });
            this._flush();
        }
        else if (this._time === null) {
            this._send([{ event, payload }]);
            this._time = Date.now();
        }
        else {
            this._batchingQueue.push({
                event,
                payload,
            });
            var now = Date.now();
            if (now - this._time > BATCH_DURATION) {
                this._flush();
            }
            else {
                this._timer = setTimeout(() => this._flush(), BATCH_DURATION);
            }
        }
    }
    /**
     * Log a message to the devtools background page.
     */
    log(message) {
        this.send('log', message);
    }
    _flush() {
        if (this._batchingQueue.length)
            { this._send(this._batchingQueue); }
        clearTimeout(this._timer);
        this._batchingQueue = [];
        this._time = null;
    }
    // @TODO types
    _emit(message) {
        if (typeof message === 'string') {
            this.emit(message);
        }
        else if (message._chunk) {
            this._receivingQueue.push(message._chunk);
            if (message.last) {
                this.emit(message.event, this._receivingQueue);
                this._receivingQueue = [];
            }
        }
        else if (message.event) {
            this.emit(message.event, message.payload);
        }
    }
    // @TODO types
    _send(messages) {
        this._sendingQueue.push(messages);
        this._nextSend();
    }
    _nextSend() {
        if (!this._sendingQueue.length || this._sending)
            { return; }
        this._sending = true;
        var messages = this._sendingQueue.shift();
        try {
            this.wall.send(messages);
        }
        catch (err) {
            if (err.message === 'Message length exceeded maximum allowed length.') {
                this._sendingQueue.splice(0, 0, messages.map(message => [message]));
            }
        }
        this._sending = false;
        requestAnimationFrame(() => this._nextSend());
    }
}
exports.Bridge = Bridge;
//# sourceMappingURL=bridge.js.map

/***/ }),

/***/ 35991:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HookEvents = exports.BridgeSubscriptions = exports.BridgeEvents = exports.BuiltinTabs = void 0;
var BuiltinTabs;
(function (BuiltinTabs) {
    BuiltinTabs["COMPONENTS"] = "components";
    BuiltinTabs["TIMELINE"] = "timeline";
    BuiltinTabs["PLUGINS"] = "plugins";
    BuiltinTabs["SETTINGS"] = "settings";
})(BuiltinTabs = exports.BuiltinTabs || (exports.BuiltinTabs = {}));
var BridgeEvents;
(function (BridgeEvents) {
    // Misc
    BridgeEvents["TO_BACK_SUBSCRIBE"] = "b:subscribe";
    BridgeEvents["TO_BACK_UNSUBSCRIBE"] = "b:unsubscribe";
    /** Backend is ready */
    BridgeEvents["TO_FRONT_READY"] = "f:ready";
    /** Displays the "detected Vue" console log */
    BridgeEvents["TO_BACK_LOG_DETECTED_VUE"] = "b:log-detected-vue";
    /** Force refresh */
    BridgeEvents["TO_BACK_REFRESH"] = "b:refresh";
    /** Tab was switched */
    BridgeEvents["TO_BACK_TAB_SWITCH"] = "b:tab:switch";
    BridgeEvents["TO_BACK_LOG"] = "b:log";
    // Apps
    /** App was registered */
    BridgeEvents["TO_FRONT_APP_ADD"] = "f:app:add";
    /** Get app list */
    BridgeEvents["TO_BACK_APP_LIST"] = "b:app:list";
    BridgeEvents["TO_FRONT_APP_LIST"] = "f:app:list";
    BridgeEvents["TO_FRONT_APP_REMOVE"] = "f:app:remove";
    BridgeEvents["TO_BACK_APP_SELECT"] = "b:app:select";
    BridgeEvents["TO_FRONT_APP_SELECTED"] = "f:app:selected";
    // Components
    BridgeEvents["TO_BACK_COMPONENT_TREE"] = "b:component:tree";
    BridgeEvents["TO_FRONT_COMPONENT_TREE"] = "f:component:tree";
    BridgeEvents["TO_BACK_COMPONENT_SELECTED_DATA"] = "b:component:selected-data";
    BridgeEvents["TO_FRONT_COMPONENT_SELECTED_DATA"] = "f:component:selected-data";
    BridgeEvents["TO_BACK_COMPONENT_EXPAND"] = "b:component:expand";
    BridgeEvents["TO_FRONT_COMPONENT_EXPAND"] = "f:component:expand";
    BridgeEvents["TO_BACK_COMPONENT_SCROLL_TO"] = "b:component:scroll-to";
    BridgeEvents["TO_BACK_COMPONENT_FILTER"] = "b:component:filter";
    BridgeEvents["TO_BACK_COMPONENT_MOUSE_OVER"] = "b:component:mouse-over";
    BridgeEvents["TO_BACK_COMPONENT_MOUSE_OUT"] = "b:component:mouse-out";
    BridgeEvents["TO_BACK_COMPONENT_CONTEXT_MENU_TARGET"] = "b:component:context-menu-target";
    BridgeEvents["TO_BACK_COMPONENT_EDIT_STATE"] = "b:component:edit-state";
    BridgeEvents["TO_BACK_COMPONENT_PICK"] = "b:component:pick";
    BridgeEvents["TO_FRONT_COMPONENT_PICK"] = "f:component:pick";
    BridgeEvents["TO_BACK_COMPONENT_PICK_CANCELED"] = "b:component:pick-canceled";
    BridgeEvents["TO_FRONT_COMPONENT_PICK_CANCELED"] = "f:component:pick-canceled";
    BridgeEvents["TO_BACK_COMPONENT_INSPECT_DOM"] = "b:component:inspect-dom";
    BridgeEvents["TO_FRONT_COMPONENT_INSPECT_DOM"] = "f:component:inspect-dom";
    BridgeEvents["TO_BACK_COMPONENT_RENDER_CODE"] = "b:component:render-code";
    BridgeEvents["TO_FRONT_COMPONENT_RENDER_CODE"] = "f:component:render-code";
    // Timeline
    BridgeEvents["TO_FRONT_TIMELINE_EVENT"] = "f:timeline:event";
    BridgeEvents["TO_BACK_TIMELINE_LAYER_LIST"] = "b:timeline:layer-list";
    BridgeEvents["TO_FRONT_TIMELINE_LAYER_LIST"] = "f:timeline:layer-list";
    BridgeEvents["TO_FRONT_TIMELINE_LAYER_ADD"] = "f:timeline:layer-add";
    BridgeEvents["TO_BACK_TIMELINE_SHOW_SCREENSHOT"] = "b:timeline:show-screenshot";
    BridgeEvents["TO_BACK_TIMELINE_CLEAR"] = "b:timeline:clear";
    BridgeEvents["TO_BACK_TIMELINE_EVENT_DATA"] = "b:timeline:event-data";
    BridgeEvents["TO_FRONT_TIMELINE_EVENT_DATA"] = "f:timeline:event-data";
    BridgeEvents["TO_BACK_TIMELINE_LAYER_LOAD_EVENTS"] = "b:timeline:layer-load-events";
    BridgeEvents["TO_FRONT_TIMELINE_LAYER_LOAD_EVENTS"] = "f:timeline:layer-load-events";
    BridgeEvents["TO_BACK_TIMELINE_LOAD_MARKERS"] = "b:timeline:load-markers";
    BridgeEvents["TO_FRONT_TIMELINE_LOAD_MARKERS"] = "f:timeline:load-markers";
    BridgeEvents["TO_FRONT_TIMELINE_MARKER"] = "f:timeline:marker";
    // Plugins
    BridgeEvents["TO_BACK_DEVTOOLS_PLUGIN_LIST"] = "b:devtools-plugin:list";
    BridgeEvents["TO_FRONT_DEVTOOLS_PLUGIN_LIST"] = "f:devtools-plugin:list";
    BridgeEvents["TO_FRONT_DEVTOOLS_PLUGIN_ADD"] = "f:devtools-plugin:add";
    BridgeEvents["TO_BACK_DEVTOOLS_PLUGIN_SETTING_UPDATED"] = "b:devtools-plugin:setting-updated";
    // Custom inspectors
    BridgeEvents["TO_BACK_CUSTOM_INSPECTOR_LIST"] = "b:custom-inspector:list";
    BridgeEvents["TO_FRONT_CUSTOM_INSPECTOR_LIST"] = "f:custom-inspector:list";
    BridgeEvents["TO_FRONT_CUSTOM_INSPECTOR_ADD"] = "f:custom-inspector:add";
    BridgeEvents["TO_BACK_CUSTOM_INSPECTOR_TREE"] = "b:custom-inspector:tree";
    BridgeEvents["TO_FRONT_CUSTOM_INSPECTOR_TREE"] = "f:custom-inspector:tree";
    BridgeEvents["TO_BACK_CUSTOM_INSPECTOR_STATE"] = "b:custom-inspector:state";
    BridgeEvents["TO_FRONT_CUSTOM_INSPECTOR_STATE"] = "f:custom-inspector:state";
    BridgeEvents["TO_BACK_CUSTOM_INSPECTOR_EDIT_STATE"] = "b:custom-inspector:edit-state";
    BridgeEvents["TO_BACK_CUSTOM_INSPECTOR_ACTION"] = "b:custom-inspector:action";
    BridgeEvents["TO_FRONT_CUSTOM_INSPECTOR_SELECT_NODE"] = "f:custom-inspector:select-node";
    // Custom state
    BridgeEvents["TO_BACK_CUSTOM_STATE_ACTION"] = "b:custom-state:action";
})(BridgeEvents = exports.BridgeEvents || (exports.BridgeEvents = {}));
var BridgeSubscriptions;
(function (BridgeSubscriptions) {
    BridgeSubscriptions["SELECTED_COMPONENT_DATA"] = "component:selected-data";
    BridgeSubscriptions["COMPONENT_TREE"] = "component:tree";
})(BridgeSubscriptions = exports.BridgeSubscriptions || (exports.BridgeSubscriptions = {}));
var HookEvents;
(function (HookEvents) {
    HookEvents["INIT"] = "init";
    HookEvents["APP_INIT"] = "app:init";
    HookEvents["APP_ADD"] = "app:add";
    HookEvents["APP_UNMOUNT"] = "app:unmount";
    HookEvents["COMPONENT_UPDATED"] = "component:updated";
    HookEvents["COMPONENT_ADDED"] = "component:added";
    HookEvents["COMPONENT_REMOVED"] = "component:removed";
    HookEvents["COMPONENT_EMIT"] = "component:emit";
    HookEvents["COMPONENT_HIGHLIGHT"] = "component:highlight";
    HookEvents["COMPONENT_UNHIGHLIGHT"] = "component:unhighlight";
    HookEvents["SETUP_DEVTOOLS_PLUGIN"] = "devtools-plugin:setup";
    HookEvents["TIMELINE_LAYER_ADDED"] = "timeline:layer-added";
    HookEvents["TIMELINE_EVENT_ADDED"] = "timeline:event-added";
    HookEvents["CUSTOM_INSPECTOR_ADD"] = "custom-inspector:add";
    HookEvents["CUSTOM_INSPECTOR_SEND_TREE"] = "custom-inspector:send-tree";
    HookEvents["CUSTOM_INSPECTOR_SEND_STATE"] = "custom-inspector:send-state";
    HookEvents["CUSTOM_INSPECTOR_SELECT_NODE"] = "custom-inspector:select-node";
    HookEvents["PERFORMANCE_START"] = "perf:start";
    HookEvents["PERFORMANCE_END"] = "perf:end";
    HookEvents["PLUGIN_SETTINGS_SET"] = "plugin:settings:set";
    /**
     * @deprecated
     */
    HookEvents["FLUSH"] = "flush";
})(HookEvents = exports.HookEvents || (exports.HookEvents = {}));
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ 68744:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateEditor = void 0;
class StateEditor {
    set(object, path, value, cb = null) {
        var sections = Array.isArray(path) ? path : path.split('.');
        while (sections.length > 1) {
            object = object[sections.shift()];
            if (this.isRef(object)) {
                object = this.getRefValue(object);
            }
        }
        var field = sections[0];
        if (cb) {
            cb(object, field, value);
        }
        else if (this.isRef(object[field])) {
            this.setRefValue(object[field], value);
        }
        else {
            object[field] = value;
        }
    }
    get(object, path) {
        var sections = Array.isArray(path) ? path : path.split('.');
        for (var i = 0; i < sections.length; i++) {
            object = object[sections[i]];
            if (this.isRef(object)) {
                object = this.getRefValue(object);
            }
            if (!object) {
                return undefined;
            }
        }
        return object;
    }
    has(object, path, parent = false) {
        if (typeof object === 'undefined') {
            return false;
        }
        var sections = Array.isArray(path) ? path.slice() : path.split('.');
        var size = !parent ? 1 : 2;
        while (object && sections.length > size) {
            object = object[sections.shift()];
            if (this.isRef(object)) {
                object = this.getRefValue(object);
            }
        }
        return object != null && Object.prototype.hasOwnProperty.call(object, sections[0]);
    }
    createDefaultSetCallback(state) {
        return (obj, field, value) => {
            if (state.remove || state.newKey) {
                if (Array.isArray(obj)) {
                    obj.splice(field, 1);
                }
                else {
                    delete obj[field];
                }
            }
            if (!state.remove) {
                var target = obj[state.newKey || field];
                if (this.isRef(target)) {
                    this.setRefValue(target, value);
                }
                else {
                    obj[state.newKey || field] = value;
                }
            }
        };
    }
    isRef(ref) {
        // To implement in subclass
        return false;
    }
    setRefValue(ref, value) {
        // To implement in subclass
    }
    getRefValue(ref) {
        // To implement in subclass
        return ref;
    }
}
exports.StateEditor = StateEditor;
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 77973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initEnv = exports.keys = exports.isLinux = exports.isMac = exports.isWindows = exports.isFirefox = exports.isChrome = exports.target = exports.isBrowser = void 0;
exports.isBrowser = typeof navigator !== 'undefined';
exports.target = exports.isBrowser
    ? window
    : typeof __webpack_require__.g !== 'undefined'
        ? __webpack_require__.g
        : {};
exports.isChrome = typeof exports.target.chrome !== 'undefined' && !!exports.target.chrome.devtools;
exports.isFirefox = exports.isBrowser && navigator.userAgent.indexOf('Firefox') > -1;
exports.isWindows = exports.isBrowser && navigator.platform.indexOf('Win') === 0;
exports.isMac = exports.isBrowser && navigator.platform === 'MacIntel';
exports.isLinux = exports.isBrowser && navigator.platform.indexOf('Linux') === 0;
exports.keys = {
    ctrl: exports.isMac ? '&#8984;' : 'Ctrl',
    shift: 'Shift',
    alt: exports.isMac ? '&#8997;' : 'Alt',
    del: 'Del',
    enter: 'Enter',
    esc: 'Esc',
};
function initEnv(Vue) {
    if (Vue.prototype.hasOwnProperty('$isChrome'))
        { return; }
    Object.defineProperties(Vue.prototype, {
        $isChrome: { get: () => exports.isChrome },
        $isFirefox: { get: () => exports.isFirefox },
        $isWindows: { get: () => exports.isWindows },
        $isMac: { get: () => exports.isMac },
        $isLinux: { get: () => exports.isLinux },
        $keys: { get: () => exports.keys },
    });
    if (exports.isWindows)
        { document.body.classList.add('platform-windows'); }
    if (exports.isMac)
        { document.body.classList.add('platform-mac'); }
    if (exports.isLinux)
        { document.body.classList.add('platform-linux'); }
}
exports.initEnv = initEnv;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 19746:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) { k2 = k; }
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) { k2 = k; }
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) { if (p !== "default" && !exports.hasOwnProperty(p)) { __createBinding(exports, m, p); } }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(18201), exports);
__exportStar(__webpack_require__(36523), exports);
__exportStar(__webpack_require__(35991), exports);
__exportStar(__webpack_require__(68744), exports);
__exportStar(__webpack_require__(77973), exports);
__exportStar(__webpack_require__(28346), exports);
__exportStar(__webpack_require__(58927), exports);
__exportStar(__webpack_require__(59835), exports);
__exportStar(__webpack_require__(28727), exports);
__exportStar(__webpack_require__(59353), exports);
__exportStar(__webpack_require__(51498), exports);
__exportStar(__webpack_require__(47765), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28346:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPluginPermission = exports.hasPluginPermission = exports.PluginPermission = void 0;
var shared_data_1 = __webpack_require__(59835);
var PluginPermission;
(function (PluginPermission) {
    PluginPermission["ENABLED"] = "enabled";
    PluginPermission["COMPONENTS"] = "components";
    PluginPermission["CUSTOM_INSPECTOR"] = "custom-inspector";
    PluginPermission["TIMELINE"] = "timeline";
})(PluginPermission = exports.PluginPermission || (exports.PluginPermission = {}));
function hasPluginPermission(pluginId, permission) {
    var result = shared_data_1.SharedData.pluginPermissions[`${pluginId}:${permission}`];
    if (result == null)
        { return true; }
    return !!result;
}
exports.hasPluginPermission = hasPluginPermission;
function setPluginPermission(pluginId, permission, active) {
    shared_data_1.SharedData.pluginPermissions = Object.assign({}, shared_data_1.SharedData.pluginPermissions,
        {[`${pluginId}:${permission}`]: active});
}
exports.setPluginPermission = setPluginPermission;
//# sourceMappingURL=plugin-permissions.js.map

/***/ }),

/***/ 58927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPluginDefaultSettings = exports.setPluginSettings = exports.getPluginSettings = void 0;
var shared_data_1 = __webpack_require__(59835);
function getPluginSettings(pluginId, defaultSettings) {
    var _a;
    return Object.assign({}, defaultSettings !== null && defaultSettings !== void 0 ? defaultSettings : {},
        (_a = shared_data_1.SharedData.pluginSettings[pluginId]) !== null && _a !== void 0 ? _a : {});
}
exports.getPluginSettings = getPluginSettings;
function setPluginSettings(pluginId, settings) {
    shared_data_1.SharedData.pluginSettings = Object.assign({}, shared_data_1.SharedData.pluginSettings,
        {[pluginId]: settings});
}
exports.setPluginSettings = setPluginSettings;
function getPluginDefaultSettings(schema) {
    var result = {};
    if (schema) {
        for (var id in schema) {
            var item = schema[id];
            result[id] = item.defaultValue;
        }
    }
    return result;
}
exports.getPluginDefaultSettings = getPluginDefaultSettings;
//# sourceMappingURL=plugin-settings.js.map

/***/ }),

/***/ 59835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedData = exports.watchSharedData = exports.destroySharedData = exports.onSharedDataInit = exports.initSharedData = void 0;
var storage_1 = __webpack_require__(59353);
var env_1 = __webpack_require__(77973);
// Initial state
var internalSharedData = {
    openInEditorHost: '/',
    componentNameStyle: 'class',
    theme: 'auto',
    displayDensity: 'low',
    timeFormat: 'default',
    recordVuex: true,
    cacheVuexSnapshotsEvery: 50,
    cacheVuexSnapshotsLimit: 10,
    snapshotLoading: false,
    componentEventsEnabled: true,
    performanceMonitoringEnabled: true,
    editableProps: false,
    logDetected: true,
    vuexNewBackend: false,
    vuexAutoload: false,
    vuexGroupGettersByModule: true,
    showMenuScrollTip: true,
    timelineTimeGrid: true,
    timelineScreenshots: true,
    menuStepScrolling: env_1.isMac,
    pluginPermissions: {},
    pluginSettings: {},
    pageConfig: {},
    debugInfo: false,
};
var persisted = [
    'componentNameStyle',
    'theme',
    'displayDensity',
    'recordVuex',
    'editableProps',
    'logDetected',
    'vuexNewBackend',
    'vuexAutoload',
    'vuexGroupGettersByModule',
    'timeFormat',
    'showMenuScrollTip',
    'timelineTimeGrid',
    'timelineScreenshots',
    'menuStepScrolling',
    'pluginPermissions',
    'pluginSettings',
    'performanceMonitoringEnabled',
    'componentEventsEnabled',
    'debugInfo',
];
var storageVersion = '6.0.0-alpha.1';
// ---- INTERNALS ---- //
var bridge;
// List of fields to persist to storage (disabled if 'false')
// This should be unique to each shared data client to prevent conflicts
var persist = false;
var data;
var initRetryInterval;
var initRetryCount = 0;
var initCbs = [];
function initSharedData(params) {
    return new Promise((resolve) => {
        // Mandatory params
        bridge = params.bridge;
        persist = !!params.persist;
        if (persist) {
            if (false) {}
            // Load persisted fields
            persisted.forEach(key => {
                var value = storage_1.getStorage(`vue-devtools-${storageVersion}:shared-data:${key}`);
                if (value !== null) {
                    internalSharedData[key] = value;
                }
            });
            bridge.on('shared-data:load', () => {
                // Send all fields
                Object.keys(internalSharedData).forEach(key => {
                    sendValue(key, internalSharedData[key]);
                });
                bridge.send('shared-data:load-complete');
            });
            bridge.on('shared-data:init-complete', () => {
                if (false) {}
                clearInterval(initRetryInterval);
                resolve();
            });
            bridge.send('shared-data:master-init-waiting');
            // In case backend init is executed after frontend
            bridge.on('shared-data:minion-init-waiting', () => {
                bridge.send('shared-data:master-init-waiting');
            });
            initRetryCount = 0;
            clearInterval(initRetryInterval);
            initRetryInterval = setInterval(() => {
                if (false) {}
                bridge.send('shared-data:master-init-waiting');
                initRetryCount++;
                if (initRetryCount > 30) {
                    clearInterval(initRetryInterval);
                    console.error('[shared data] Master init failed');
                }
            }, 2000);
        }
        else {
            if (false) {}
            bridge.on('shared-data:master-init-waiting', () => {
                if (false) {}
                // Load all persisted shared data
                bridge.send('shared-data:load');
                bridge.once('shared-data:load-complete', () => {
                    if (false) {}
                    bridge.send('shared-data:init-complete');
                    resolve();
                });
            });
            bridge.send('shared-data:minion-init-waiting');
        }
        data = Object.assign({}, internalSharedData);
        if (params.Vue) {
            data = params.Vue.observable(data);
        }
        // Update value from other shared data clients
        bridge.on('shared-data:set', (ref) => {
            var key = ref.key;
            var value = ref.value;

            setValue(key, value);
        });
        initCbs.forEach(cb => cb());
    });
}
exports.initSharedData = initSharedData;
function onSharedDataInit(cb) {
    initCbs.push(cb);
    return () => {
        var index = initCbs.indexOf(cb);
        if (index !== -1)
            { initCbs.splice(index, 1); }
    };
}
exports.onSharedDataInit = onSharedDataInit;
function destroySharedData() {
    bridge.removeAllListeners('shared-data:set');
    watchers = {};
}
exports.destroySharedData = destroySharedData;
var watchers = {};
function setValue(key, value) {
    // Storage
    if (persist && persisted.includes(key)) {
        storage_1.setStorage(`vue-devtools-${storageVersion}:shared-data:${key}`, value);
    }
    var oldValue = data[key];
    data[key] = value;
    var handlers = watchers[key];
    if (handlers) {
        handlers.forEach(h => h(value, oldValue));
    }
    // Validate Proxy set trap
    return true;
}
function sendValue(key, value) {
    bridge && bridge.send('shared-data:set', {
        key,
        value,
    });
}
function watchSharedData(prop, handler) {
    var list = watchers[prop] || (watchers[prop] = []);
    list.push(handler);
    return () => {
        var index = list.indexOf(handler);
        if (index !== -1)
            { list.splice(index, 1); }
    };
}
exports.watchSharedData = watchSharedData;
var proxy = {};
Object.keys(internalSharedData).forEach(key => {
    Object.defineProperty(proxy, key, {
        configurable: false,
        get: () => data[key],
        set: (value) => {
            sendValue(key, value);
            setValue(key, value);
        },
    });
});
exports.SharedData = proxy;
//# sourceMappingURL=shared-data.js.map

/***/ }),

/***/ 28727:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=shell.js.map

/***/ }),

/***/ 59353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearStorage = exports.removeStorage = exports.setStorage = exports.getStorage = exports.initStorage = void 0;
var env_1 = __webpack_require__(77973);
// If we can, we use the browser extension API to store data
// it's async though, so we synchronize changes from an intermediate
// storageData object
var useStorage = typeof env_1.target.chrome !== 'undefined' && typeof env_1.target.chrome.storage !== 'undefined';
var storageData = null;
function initStorage() {
    return new Promise((resolve) => {
        if (useStorage) {
            env_1.target.chrome.storage.local.get(null, result => {
                storageData = result;
                resolve();
            });
        }
        else {
            storageData = {};
            resolve();
        }
    });
}
exports.initStorage = initStorage;
function getStorage(key, defaultValue = null) {
    checkStorage();
    if (useStorage) {
        return getDefaultValue(storageData[key], defaultValue);
    }
    else {
        try {
            return getDefaultValue(JSON.parse(localStorage.getItem(key)), defaultValue);
        }
        catch (e) { }
    }
}
exports.getStorage = getStorage;
function setStorage(key, val) {
    checkStorage();
    if (useStorage) {
        storageData[key] = val;
        env_1.target.chrome.storage.local.set({ [key]: val });
    }
    else {
        try {
            localStorage.setItem(key, JSON.stringify(val));
        }
        catch (e) { }
    }
}
exports.setStorage = setStorage;
function removeStorage(key) {
    checkStorage();
    if (useStorage) {
        delete storageData[key];
        env_1.target.chrome.storage.local.remove([key]);
    }
    else {
        try {
            localStorage.removeItem(key);
        }
        catch (e) { }
    }
}
exports.removeStorage = removeStorage;
function clearStorage() {
    checkStorage();
    if (useStorage) {
        storageData = {};
        env_1.target.chrome.storage.local.clear();
    }
    else {
        try {
            localStorage.clear();
        }
        catch (e) { }
    }
}
exports.clearStorage = clearStorage;
function checkStorage() {
    if (!storageData) {
        throw new Error('Storage wasn\'t initialized with \'init()\'');
    }
}
function getDefaultValue(value, defaultValue) {
    if (value == null) {
        return defaultValue;
    }
    return value;
}
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 51498:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringifyStrictCircularAutoChunks = exports.parseCircularAutoChunks = exports.stringifyCircularAutoChunks = void 0;
var MAX_SERIALIZED_SIZE = 512 * 1024; // 1MB
function encode(data, replacer, list, seen) {
    var stored, key, value, i, l;
    var seenIndex = seen.get(data);
    if (seenIndex != null) {
        return seenIndex;
    }
    var index = list.length;
    var proto = Object.prototype.toString.call(data);
    if (proto === '[object Object]') {
        stored = {};
        seen.set(data, index);
        list.push(stored);
        var keys = Object.keys(data);
        for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            value = data[key];
            if (replacer)
                { value = replacer.call(data, key, value); }
            stored[key] = encode(value, replacer, list, seen);
        }
    }
    else if (proto === '[object Array]') {
        stored = [];
        seen.set(data, index);
        list.push(stored);
        for (i = 0, l = data.length; i < l; i++) {
            value = data[i];
            if (replacer)
                { value = replacer.call(data, i, value); }
            stored[i] = encode(value, replacer, list, seen);
        }
    }
    else {
        list.push(data);
    }
    return index;
}
function decode(list, reviver) {
    var i = list.length;
    var j, k, data, key, value, proto;
    while (i--) {
        data = list[i];
        proto = Object.prototype.toString.call(data);
        if (proto === '[object Object]') {
            var keys = Object.keys(data);
            for (j = 0, k = keys.length; j < k; j++) {
                key = keys[j];
                value = list[data[key]];
                if (reviver)
                    { value = reviver.call(data, key, value); }
                data[key] = value;
            }
        }
        else if (proto === '[object Array]') {
            for (j = 0, k = data.length; j < k; j++) {
                value = list[data[j]];
                if (reviver)
                    { value = reviver.call(data, j, value); }
                data[j] = value;
            }
        }
    }
}
function stringifyCircularAutoChunks(data, replacer = null, space = null) {
    var result;
    try {
        result = arguments.length === 1
            ? JSON.stringify(data)
            // @ts-ignore
            : JSON.stringify(data, replacer, space);
    }
    catch (e) {
        result = stringifyStrictCircularAutoChunks(data, replacer, space);
    }
    if (result.length > MAX_SERIALIZED_SIZE) {
        var chunkCount = Math.ceil(result.length / MAX_SERIALIZED_SIZE);
        var chunks = [];
        for (var i = 0; i < chunkCount; i++) {
            chunks.push(result.slice(i * MAX_SERIALIZED_SIZE, (i + 1) * MAX_SERIALIZED_SIZE));
        }
        return chunks;
    }
    return result;
}
exports.stringifyCircularAutoChunks = stringifyCircularAutoChunks;
function parseCircularAutoChunks(data, reviver = null) {
    if (Array.isArray(data)) {
        data = data.join('');
    }
    var hasCircular = /^\s/.test(data);
    if (!hasCircular) {
        return arguments.length === 1
            ? JSON.parse(data)
            // @ts-ignore
            : JSON.parse(data, reviver);
    }
    else {
        var list = JSON.parse(data);
        decode(list, reviver);
        return list[0];
    }
}
exports.parseCircularAutoChunks = parseCircularAutoChunks;
function stringifyStrictCircularAutoChunks(data, replacer = null, space = null) {
    var list = [];
    encode(data, replacer, list, new Map());
    return space
        ? ' ' + JSON.stringify(list, null, space)
        : ' ' + JSON.stringify(list);
}
exports.stringifyStrictCircularAutoChunks = stringifyStrictCircularAutoChunks;
//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 47765:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyObject = exports.copyToClipboard = exports.escape = exports.openInEditor = exports.focusInput = exports.simpleGet = exports.sortByKey = exports.searchDeepInObject = exports.isPlainObject = exports.revive = exports.parse = exports.getCustomRefDetails = exports.getCustomHTMLElementDetails = exports.getCustomFunctionDetails = exports.getCustomComponentDefinitionDetails = exports.getComponentName = exports.reviveSet = exports.getCustomSetDetails = exports.reviveMap = exports.getCustomMapDetails = exports.stringify = exports.specialTokenToString = exports.MAX_ARRAY_SIZE = exports.MAX_STRING_SIZE = exports.SPECIAL_TOKENS = exports.NAN = exports.NEGATIVE_INFINITY = exports.INFINITY = exports.UNDEFINED = exports.inDoc = exports.getComponentDisplayName = exports.kebabize = exports.camelize = exports.classify = void 0;
var path_1 = __importDefault(__webpack_require__(21023));
var transfer_1 = __webpack_require__(51498);
var backend_1 = __webpack_require__(18201);
var shared_data_1 = __webpack_require__(59835);
var env_1 = __webpack_require__(77973);
function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
var classifyRE = /(?:^|[-_/])(\w)/g;
exports.classify = cached((str) => {
    return str && str.replace(classifyRE, toUpper);
});
var camelizeRE = /-(\w)/g;
exports.camelize = cached((str) => {
    return str && str.replace(camelizeRE, toUpper);
});
var kebabizeRE = /([a-z0-9])([A-Z])/g;
exports.kebabize = cached((str) => {
    return str && str
        .replace(kebabizeRE, (_, lowerCaseCharacter, upperCaseLetter) => {
        return `${lowerCaseCharacter}-${upperCaseLetter}`;
    })
        .toLowerCase();
});
function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}
function getComponentDisplayName(originalName, style = 'class') {
    switch (style) {
        case 'class':
            return exports.classify(originalName);
        case 'kebab':
            return exports.kebabize(originalName);
        case 'original':
        default:
            return originalName;
    }
}
exports.getComponentDisplayName = getComponentDisplayName;
function inDoc(node) {
    if (!node)
        { return false; }
    var doc = node.ownerDocument.documentElement;
    var parent = node.parentNode;
    return doc === node ||
        doc === parent ||
        !!(parent && parent.nodeType === 1 && (doc.contains(parent)));
}
exports.inDoc = inDoc;
/**
 * Stringify/parse data using CircularJSON.
 */
exports.UNDEFINED = '__vue_devtool_undefined__';
exports.INFINITY = '__vue_devtool_infinity__';
exports.NEGATIVE_INFINITY = '__vue_devtool_negative_infinity__';
exports.NAN = '__vue_devtool_nan__';
exports.SPECIAL_TOKENS = {
    true: true,
    false: false,
    undefined: exports.UNDEFINED,
    null: null,
    '-Infinity': exports.NEGATIVE_INFINITY,
    Infinity: exports.INFINITY,
    NaN: exports.NAN,
};
exports.MAX_STRING_SIZE = 10000;
exports.MAX_ARRAY_SIZE = 5000;
function specialTokenToString(value) {
    if (value === null) {
        return 'null';
    }
    else if (value === exports.UNDEFINED) {
        return 'undefined';
    }
    else if (value === exports.NAN) {
        return 'NaN';
    }
    else if (value === exports.INFINITY) {
        return 'Infinity';
    }
    else if (value === exports.NEGATIVE_INFINITY) {
        return '-Infinity';
    }
    return false;
}
exports.specialTokenToString = specialTokenToString;
/**
 * Needed to prevent stack overflow
 * while replacing complex objects
 * like components because we create
 * new objects with the CustomValue API
 * (.i.e `{ _custom: { ... } }`)
 */
class EncodeCache {
    constructor() {
        this.map = new Map();
    }
    /**
     * Returns a result unique to each input data
     * @param {*} data Input data
     * @param {*} factory Function used to create the unique result
     */
    cache(data, factory) {
        var cached = this.map.get(data);
        if (cached) {
            return cached;
        }
        else {
            var result = factory(data);
            this.map.set(data, result);
            return result;
        }
    }
    clear() {
        this.map.clear();
    }
}
var encodeCache = new EncodeCache();
class ReviveCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.map = new Map();
        this.index = 0;
        this.size = 0;
    }
    cache(value) {
        var currentIndex = this.index;
        this.map.set(currentIndex, value);
        this.size++;
        if (this.size > this.maxSize) {
            this.map.delete(currentIndex - this.size);
            this.size--;
        }
        this.index++;
        return currentIndex;
    }
    read(id) {
        return this.map.get(id);
    }
}
var reviveCache = new ReviveCache(1000);
function stringify(data) {
    // Create a fresh cache for each serialization
    encodeCache.clear();
    return transfer_1.stringifyCircularAutoChunks(data, replacer);
}
exports.stringify = stringify;
function replacer(key) {
    // @ts-ignore
    var val = this[key];
    var type = typeof val;
    if (Array.isArray(val)) {
        var l = val.length;
        if (l > exports.MAX_ARRAY_SIZE) {
            return {
                _isArray: true,
                length: l,
                items: val.slice(0, exports.MAX_ARRAY_SIZE),
            };
        }
        return val;
    }
    else if (typeof val === 'string') {
        if (val.length > exports.MAX_STRING_SIZE) {
            return val.substr(0, exports.MAX_STRING_SIZE) + `... (${(val.length)} total length)`;
        }
        else {
            return val;
        }
    }
    else if (type === 'undefined') {
        return exports.UNDEFINED;
    }
    else if (val === Infinity) {
        return exports.INFINITY;
    }
    else if (val === -Infinity) {
        return exports.NEGATIVE_INFINITY;
    }
    else if (type === 'function') {
        return getCustomFunctionDetails(val);
    }
    else if (type === 'symbol') {
        return `[native Symbol ${Symbol.prototype.toString.call(val)}]`;
    }
    else if (val !== null && type === 'object') {
        var proto = Object.prototype.toString.call(val);
        if (proto === '[object Map]') {
            return encodeCache.cache(val, () => getCustomMapDetails(val));
        }
        else if (proto === '[object Set]') {
            return encodeCache.cache(val, () => getCustomSetDetails(val));
        }
        else if (proto === '[object RegExp]') {
            // special handling of native type
            return `[native RegExp ${RegExp.prototype.toString.call(val)}]`;
        }
        else if (proto === '[object Date]') {
            return `[native Date ${Date.prototype.toString.call(val)}]`;
        }
        else if (proto === '[object Error]') {
            return `[native Error ${val.message}<>${val.stack}]`;
        }
        else if (val.state && val._vm) {
            return encodeCache.cache(val, () => backend_1.getCustomStoreDetails(val));
        }
        else if (val.constructor && val.constructor.name === 'VueRouter') {
            return encodeCache.cache(val, () => backend_1.getCustomRouterDetails(val));
        }
        else if (backend_1.isVueInstance(val)) {
            return encodeCache.cache(val, () => backend_1.getCustomInstanceDetails(val));
        }
        else if (typeof val.render === 'function') {
            return encodeCache.cache(val, () => getCustomComponentDefinitionDetails(val));
        }
        else if (val.constructor && val.constructor.name === 'VNode') {
            return `[native VNode <${val.tag}>]`;
        }
        else if (val instanceof HTMLElement) {
            return encodeCache.cache(val, () => getCustomHTMLElementDetails(val));
        }
    }
    else if (Number.isNaN(val)) {
        return exports.NAN;
    }
    return sanitize(val);
}
function getCustomMapDetails(val) {
    var list = [];
    val.forEach((value, key) => list.push({
        key,
        value,
    }));
    return {
        _custom: {
            type: 'map',
            display: 'Map',
            value: list,
            readOnly: true,
            fields: {
                abstract: true,
            },
        },
    };
}
exports.getCustomMapDetails = getCustomMapDetails;
function reviveMap(val) {
    var result = new Map();
    var list = val._custom.value;
    for (var i = 0; i < list.length; i++) {
        var { key, value } = list[i];
        result.set(key, revive(value));
    }
    return result;
}
exports.reviveMap = reviveMap;
function getCustomSetDetails(val) {
    var list = Array.from(val);
    return {
        _custom: {
            type: 'set',
            display: `Set[${list.length}]`,
            value: list,
            readOnly: true,
        },
    };
}
exports.getCustomSetDetails = getCustomSetDetails;
function reviveSet(val) {
    var result = new Set();
    var list = val._custom.value;
    for (var i = 0; i < list.length; i++) {
        var value = list[i];
        result.add(revive(value));
    }
    return result;
}
exports.reviveSet = reviveSet;
// Use a custom basename functions instead of the shimed version
// because it doesn't work on Windows
function basename(filename, ext) {
    return path_1.default.basename(filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/'), ext);
}
function getComponentName(options) {
    var name = options.displayName || options.name || options._componentTag;
    if (name) {
        return name;
    }
    var file = options.__file; // injected by vue-loader
    if (file) {
        return exports.classify(basename(file, '.vue'));
    }
}
exports.getComponentName = getComponentName;
function getCustomComponentDefinitionDetails(def) {
    var display = getComponentName(def);
    if (display) {
        if (def.name && def.__file) {
            display += ` <span>(${def.__file})</span>`;
        }
    }
    else {
        display = '<i>Unknown Component</i>';
    }
    return {
        _custom: Object.assign({}, {type: 'component-definition',
            display,
            tooltip: 'Component definition'},
            def.__file
                ? {
                    file: def.__file,
                }
                : {}),
    };
}
exports.getCustomComponentDefinitionDetails = getCustomComponentDefinitionDetails;
// eslint-disable-next-line @typescript-eslint/ban-types
function getCustomFunctionDetails(func) {
    var string = '';
    var matches = null;
    try {
        string = Function.prototype.toString.call(func);
        matches = String.prototype.match.call(string, /\([\s\S]*?\)/);
    }
    catch (e) {
        // Func is probably a Proxy, which can break Function.prototype.toString()
    }
    // Trim any excess whitespace from the argument string
    var match = matches && matches[0];
    var args = typeof match === 'string'
        ? `(${match.substr(1, match.length - 2).split(',').map(a => a.trim()).join(', ')})`
        : '(?)';
    var name = typeof func.name === 'string' ? func.name : '';
    return {
        _custom: {
            type: 'function',
            display: `<span>f</span> ${escape(name)}${args}`,
            _reviveId: reviveCache.cache(func),
        },
    };
}
exports.getCustomFunctionDetails = getCustomFunctionDetails;
function getCustomHTMLElementDetails(value) {
    try {
        return {
            _custom: {
                type: 'HTMLElement',
                display: `<span class="opacity-30">&lt;</span><span class="text-blue-500">${value.tagName.toLowerCase()}</span><span class="opacity-30">&gt;</span>`,
                value: namedNodeMapToObject(value.attributes),
                actions: [
                    {
                        icon: 'input',
                        tooltip: 'Log element to console',
                        action: () => {
                            // eslint-disable-next-line no-console
                            console.log(value);
                        },
                    },
                ],
            },
        };
    }
    catch (e) {
        return {
            _custom: {
                type: 'HTMLElement',
                display: `<span class="text-blue-500">${String(value)}</span>`,
            },
        };
    }
}
exports.getCustomHTMLElementDetails = getCustomHTMLElementDetails;
function namedNodeMapToObject(map) {
    var result = {};
    var l = map.length;
    for (var i = 0; i < l; i++) {
        var node = map.item(i);
        result[node.name] = node.value;
    }
    return result;
}
function getCustomRefDetails(instance, key, ref) {
    var value;
    if (Array.isArray(ref)) {
        value = ref.map((r) => getCustomRefDetails(instance, key, r)).map(data => data.value);
    }
    else {
        var name;
        if (ref._isVue) {
            name = getComponentName(ref.$options);
        }
        else {
            name = ref.tagName.toLowerCase();
        }
        value = {
            _custom: {
                display: `&lt;${name}` +
                    (ref.id ? ` <span class="attr-title">id</span>="${ref.id}"` : '') +
                    (ref.className ? ` <span class="attr-title">class</span>="${ref.className}"` : '') + '&gt;',
                uid: instance.__VUE_DEVTOOLS_UID__,
                type: 'reference',
            },
        };
    }
    return {
        type: '$refs',
        key: key,
        value,
        editable: false,
    };
}
exports.getCustomRefDetails = getCustomRefDetails;
function parse(data, revive = false) {
    return revive
        ? transfer_1.parseCircularAutoChunks(data, reviver)
        : transfer_1.parseCircularAutoChunks(data);
}
exports.parse = parse;
var specialTypeRE = /^\[native (\w+) (.*?)(<>((.|\s)*))?\]$/;
var symbolRE = /^\[native Symbol Symbol\((.*)\)\]$/;
function reviver(key, val) {
    return revive(val);
}
function revive(val) {
    if (val === exports.UNDEFINED) {
        return undefined;
    }
    else if (val === exports.INFINITY) {
        return Infinity;
    }
    else if (val === exports.NEGATIVE_INFINITY) {
        return -Infinity;
    }
    else if (val === exports.NAN) {
        return NaN;
    }
    else if (val && val._custom) {
        var { _custom: custom } = val;
        if (custom.type === 'component') {
            return backend_1.getInstanceMap().get(custom.id);
        }
        else if (custom.type === 'map') {
            return reviveMap(val);
        }
        else if (custom.type === 'set') {
            return reviveSet(val);
        }
        else if (custom._reviveId) {
            return reviveCache.read(custom._reviveId);
        }
        else {
            return revive(custom.value);
        }
    }
    else if (symbolRE.test(val)) {
        var [, string] = symbolRE.exec(val);
        return Symbol.for(string);
    }
    else if (specialTypeRE.test(val)) {
        var [, type, string$1, , details] = specialTypeRE.exec(val);
        var result = new window[type](string$1);
        if (type === 'Error' && details) {
            result.stack = details;
        }
        return result;
    }
    else {
        return val;
    }
}
exports.revive = revive;
/**
 * Sanitize data to be posted to the other side.
 * Since the message posted is sent with structured clone,
 * we need to filter out any types that might cause an error.
 *
 * @param {*} data
 * @return {*}
 */
function sanitize(data) {
    if (!isPrimitive(data) &&
        !Array.isArray(data) &&
        !isPlainObject(data)) {
        // handle types that will probably cause issues in
        // the structured clone
        return Object.prototype.toString.call(data);
    }
    else {
        return data;
    }
}
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
function isPrimitive(data) {
    if (data == null) {
        return true;
    }
    var type = typeof data;
    return (type === 'string' ||
        type === 'number' ||
        type === 'boolean');
}
/**
 * Searches a key or value in the object, with a maximum deepness
 * @param {*} obj Search target
 * @param {string} searchTerm Search string
 * @returns {boolean} Search match
 */
function searchDeepInObject(obj, searchTerm) {
    var seen = new Map();
    var result = internalSearchObject(obj, searchTerm.toLowerCase(), seen, 0);
    seen.clear();
    return result;
}
exports.searchDeepInObject = searchDeepInObject;
var SEARCH_MAX_DEPTH = 10;
/**
 * Executes a search on each field of the provided object
 * @param {*} obj Search target
 * @param {string} searchTerm Search string
 * @param {Map<any,boolean>} seen Map containing the search result to prevent stack overflow by walking on the same object multiple times
 * @param {number} depth Deep search depth level, which is capped to prevent performance issues
 * @returns {boolean} Search match
 */
function internalSearchObject(obj, searchTerm, seen, depth) {
    if (depth > SEARCH_MAX_DEPTH) {
        return false;
    }
    var match = false;
    var keys = Object.keys(obj);
    var key, value;
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        value = obj[key];
        match = internalSearchCheck(searchTerm, key, value, seen, depth + 1);
        if (match) {
            break;
        }
    }
    return match;
}
/**
 * Executes a search on each value of the provided array
 * @param {*} array Search target
 * @param {string} searchTerm Search string
 * @param {Map<any,boolean>} seen Map containing the search result to prevent stack overflow by walking on the same object multiple times
 * @param {number} depth Deep search depth level, which is capped to prevent performance issues
 * @returns {boolean} Search match
 */
function internalSearchArray(array, searchTerm, seen, depth) {
    if (depth > SEARCH_MAX_DEPTH) {
        return false;
    }
    var match = false;
    var value;
    for (var i = 0; i < array.length; i++) {
        value = array[i];
        match = internalSearchCheck(searchTerm, null, value, seen, depth + 1);
        if (match) {
            break;
        }
    }
    return match;
}
/**
 * Checks if the provided field matches the search terms
 * @param {string} searchTerm Search string
 * @param {string} key Field key (null if from array)
 * @param {*} value Field value
 * @param {Map<any,boolean>} seen Map containing the search result to prevent stack overflow by walking on the same object multiple times
 * @param {number} depth Deep search depth level, which is capped to prevent performance issues
 * @returns {boolean} Search match
 */
function internalSearchCheck(searchTerm, key, value, seen, depth) {
    var match = false;
    var result;
    if (key === '_custom') {
        key = value.display;
        value = value.value;
    }
    (result = specialTokenToString(value)) && (value = result);
    if (key && compare(key, searchTerm)) {
        match = true;
        seen.set(value, true);
    }
    else if (seen.has(value)) {
        match = seen.get(value);
    }
    else if (Array.isArray(value)) {
        seen.set(value, null);
        match = internalSearchArray(value, searchTerm, seen, depth);
        seen.set(value, match);
    }
    else if (isPlainObject(value)) {
        seen.set(value, null);
        match = internalSearchObject(value, searchTerm, seen, depth);
        seen.set(value, match);
    }
    else if (compare(value, searchTerm)) {
        match = true;
        seen.set(value, true);
    }
    return match;
}
/**
 * Compares two values
 * @param {*} value Mixed type value that will be cast to string
 * @param {string} searchTerm Search string
 * @returns {boolean} Search match
 */
function compare(value, searchTerm) {
    return ('' + value).toLowerCase().indexOf(searchTerm) !== -1;
}
function sortByKey(state) {
    return state && state.slice().sort((a, b) => {
        if (a.key < b.key)
            { return -1; }
        if (a.key > b.key)
            { return 1; }
        return 0;
    });
}
exports.sortByKey = sortByKey;
function simpleGet(object, path) {
    var sections = Array.isArray(path) ? path : path.split('.');
    for (var i = 0; i < sections.length; i++) {
        object = object[sections[i]];
        if (!object) {
            return undefined;
        }
    }
    return object;
}
exports.simpleGet = simpleGet;
function focusInput(el) {
    el.focus();
    el.setSelectionRange(0, el.value.length);
}
exports.focusInput = focusInput;
function openInEditor(file) {
    // Console display
    var fileName = file.replace(/\\/g, '\\\\');
    var src = `fetch('${shared_data_1.SharedData.openInEditorHost}__open-in-editor?file=${encodeURI(file)}').then(response => {
    if (response.ok) {
      console.log('File ${fileName} opened in editor')
    } else {
      const msg = 'Opening component ${fileName} failed'
      const target = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}
      if (target.__VUE_DEVTOOLS_TOAST__) {
        target.__VUE_DEVTOOLS_TOAST__(msg, 'error')
      } else {
        console.log('%c' + msg, 'color:red')
      }
      console.log('Check the setup of your project, see https://devtools.vuejs.org/guide/open-in-editor.html')
    }
  })`;
    if (env_1.isChrome) {
        env_1.target.chrome.devtools.inspectedWindow.eval(src);
    }
    else {
        // eslint-disable-next-line no-eval
        eval(src);
    }
}
exports.openInEditor = openInEditor;
var ESC = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
};
function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
}
exports.escape = escape;
function escapeChar(a) {
    return ESC[a] || a;
}
function copyToClipboard(state) {
    if (typeof document === 'undefined')
        { return; }
    var dummyTextArea = document.createElement('textarea');
    dummyTextArea.textContent = stringify(state);
    document.body.appendChild(dummyTextArea);
    dummyTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(dummyTextArea);
}
exports.copyToClipboard = copyToClipboard;
function isEmptyObject(obj) {
    return obj === exports.UNDEFINED || !obj || Object.keys(obj).length === 0;
}
exports.isEmptyObject = isEmptyObject;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 96206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Module dependenices
 */

const clone = __webpack_require__(52844);
const typeOf = __webpack_require__(91366);
const isPlainObject = __webpack_require__(36633);

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;


/***/ }),

/***/ 36633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(98558);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ 22699:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 98558:
/***/ ((module) => {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ 91366:
/***/ ((module) => {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),

/***/ 50857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(37772);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 53366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(50857),
    getRawTag = __webpack_require__(62107),
    objectToString = __webpack_require__(37157);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 51704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(52153);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 51242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 62107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(50857);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 37157:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 37772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(51242);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 52153:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 54073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(29259),
    now = __webpack_require__(61100),
    toNumber = __webpack_require__(7642);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 29259:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 15125:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 4795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(53366),
    isObjectLike = __webpack_require__(15125);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 61100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(37772);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 7642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(51704),
    isObject = __webpack_require__(29259),
    isSymbol = __webpack_require__(4795);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 21023:
/***/ ((module) => {

"use strict";
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ 52844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(91366);

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;


/***/ }),

/***/ 97500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(54386);


/***/ }),

/***/ 54386:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root) {
    'use strict';

    /**
     * charMap
     * @type {Object}
     */
    var charMap = {

        // latin
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'Ae',
        'Å': 'A',
        'Æ': 'AE',
        'Ç': 'C',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ð': 'D',
        'Ñ': 'N',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'Oe',
        'Ő': 'O',
        'Ø': 'O',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'Ue',
        'Ű': 'U',
        'Ý': 'Y',
        'Þ': 'TH',
        'ß': 'ss',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'ae',
        'å': 'a',
        'æ': 'ae',
        'ç': 'c',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'ð': 'd',
        'ñ': 'n',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'oe',
        'ő': 'o',
        'ø': 'o',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'ue',
        'ű': 'u',
        'ý': 'y',
        'þ': 'th',
        'ÿ': 'y',
        'ẞ': 'SS',

        // language specific

        // Arabic
        'ا': 'a',
        'أ': 'a',
        'إ': 'i',
        'آ': 'aa',
        'ؤ': 'u',
        'ئ': 'e',
        'ء': 'a',
        'ب': 'b',
        'ت': 't',
        'ث': 'th',
        'ج': 'j',
        'ح': 'h',
        'خ': 'kh',
        'د': 'd',
        'ذ': 'th',
        'ر': 'r',
        'ز': 'z',
        'س': 's',
        'ش': 'sh',
        'ص': 's',
        'ض': 'dh',
        'ط': 't',
        'ظ': 'z',
        'ع': 'a',
        'غ': 'gh',
        'ف': 'f',
        'ق': 'q',
        'ك': 'k',
        'ل': 'l',
        'م': 'm',
        'ن': 'n',
        'ه': 'h',
        'و': 'w',
        'ي': 'y',
        'ى': 'a',
        'ة': 'h',
        'ﻻ': 'la',
        'ﻷ': 'laa',
        'ﻹ': 'lai',
        'ﻵ': 'laa',

        // Persian additional characters than Arabic
        'گ': 'g',
        'چ': 'ch',
        'پ': 'p',
        'ژ': 'zh',
        'ک': 'k',
        'ی': 'y',

        // Arabic diactrics
        'َ': 'a',
        'ً': 'an',
        'ِ': 'e',
        'ٍ': 'en',
        'ُ': 'u',
        'ٌ': 'on',
        'ْ': '',

        // Arabic numbers
        '٠': '0',
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',

        // Persian numbers
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',

        // Burmese consonants
        'က': 'k',
        'ခ': 'kh',
        'ဂ': 'g',
        'ဃ': 'ga',
        'င': 'ng',
        'စ': 's',
        'ဆ': 'sa',
        'ဇ': 'z',
        'စျ': 'za',
        'ည': 'ny',
        'ဋ': 't',
        'ဌ': 'ta',
        'ဍ': 'd',
        'ဎ': 'da',
        'ဏ': 'na',
        'တ': 't',
        'ထ': 'ta',
        'ဒ': 'd',
        'ဓ': 'da',
        'န': 'n',
        'ပ': 'p',
        'ဖ': 'pa',
        'ဗ': 'b',
        'ဘ': 'ba',
        'မ': 'm',
        'ယ': 'y',
        'ရ': 'ya',
        'လ': 'l',
        'ဝ': 'w',
        'သ': 'th',
        'ဟ': 'h',
        'ဠ': 'la',
        'အ': 'a',
        // consonant character combos
        'ြ': 'y',
        'ျ': 'ya',
        'ွ': 'w',
        'ြွ': 'yw',
        'ျွ': 'ywa',
        'ှ': 'h',
        // independent vowels
        'ဧ': 'e',
        '၏': '-e',
        'ဣ': 'i',
        'ဤ': '-i',
        'ဉ': 'u',
        'ဦ': '-u',
        'ဩ': 'aw',
        'သြော': 'aw',
        'ဪ': 'aw',
        // numbers
        '၀': '0',
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        // virama and tone marks which are silent in transliteration
        '္': '',
        '့': '',
        'း': '',

        // Czech
        'č': 'c',
        'ď': 'd',
        'ě': 'e',
        'ň': 'n',
        'ř': 'r',
        'š': 's',
        'ť': 't',
        'ů': 'u',
        'ž': 'z',
        'Č': 'C',
        'Ď': 'D',
        'Ě': 'E',
        'Ň': 'N',
        'Ř': 'R',
        'Š': 'S',
        'Ť': 'T',
        'Ů': 'U',
        'Ž': 'Z',

        // Dhivehi
        'ހ': 'h',
        'ށ': 'sh',
        'ނ': 'n',
        'ރ': 'r',
        'ބ': 'b',
        'ޅ': 'lh',
        'ކ': 'k',
        'އ': 'a',
        'ވ': 'v',
        'މ': 'm',
        'ފ': 'f',
        'ދ': 'dh',
        'ތ': 'th',
        'ލ': 'l',
        'ގ': 'g',
        'ޏ': 'gn',
        'ސ': 's',
        'ޑ': 'd',
        'ޒ': 'z',
        'ޓ': 't',
        'ޔ': 'y',
        'ޕ': 'p',
        'ޖ': 'j',
        'ޗ': 'ch',
        'ޘ': 'tt',
        'ޙ': 'hh',
        'ޚ': 'kh',
        'ޛ': 'th',
        'ޜ': 'z',
        'ޝ': 'sh',
        'ޞ': 's',
        'ޟ': 'd',
        'ޠ': 't',
        'ޡ': 'z',
        'ޢ': 'a',
        'ޣ': 'gh',
        'ޤ': 'q',
        'ޥ': 'w',
        'ަ': 'a',
        'ާ': 'aa',
        'ި': 'i',
        'ީ': 'ee',
        'ު': 'u',
        'ޫ': 'oo',
        'ެ': 'e',
        'ޭ': 'ey',
        'ޮ': 'o',
        'ޯ': 'oa',
        'ް': '',

        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        'ა': 'a',
        'ბ': 'b',
        'გ': 'g',
        'დ': 'd',
        'ე': 'e',
        'ვ': 'v',
        'ზ': 'z',
        'თ': 't',
        'ი': 'i',
        'კ': 'k',
        'ლ': 'l',
        'მ': 'm',
        'ნ': 'n',
        'ო': 'o',
        'პ': 'p',
        'ჟ': 'zh',
        'რ': 'r',
        'ს': 's',
        'ტ': 't',
        'უ': 'u',
        'ფ': 'p',
        'ქ': 'k',
        'ღ': 'gh',
        'ყ': 'q',
        'შ': 'sh',
        'ჩ': 'ch',
        'ც': 'ts',
        'ძ': 'dz',
        'წ': 'ts',
        'ჭ': 'ch',
        'ხ': 'kh',
        'ჯ': 'j',
        'ჰ': 'h',

        // Greek
        'α': 'a',
        'β': 'v',
        'γ': 'g',
        'δ': 'd',
        'ε': 'e',
        'ζ': 'z',
        'η': 'i',
        'θ': 'th',
        'ι': 'i',
        'κ': 'k',
        'λ': 'l',
        'μ': 'm',
        'ν': 'n',
        'ξ': 'ks',
        'ο': 'o',
        'π': 'p',
        'ρ': 'r',
        'σ': 's',
        'τ': 't',
        'υ': 'y',
        'φ': 'f',
        'χ': 'x',
        'ψ': 'ps',
        'ω': 'o',
        'ά': 'a',
        'έ': 'e',
        'ί': 'i',
        'ό': 'o',
        'ύ': 'y',
        'ή': 'i',
        'ώ': 'o',
        'ς': 's',
        'ϊ': 'i',
        'ΰ': 'y',
        'ϋ': 'y',
        'ΐ': 'i',
        'Α': 'A',
        'Β': 'B',
        'Γ': 'G',
        'Δ': 'D',
        'Ε': 'E',
        'Ζ': 'Z',
        'Η': 'I',
        'Θ': 'TH',
        'Ι': 'I',
        'Κ': 'K',
        'Λ': 'L',
        'Μ': 'M',
        'Ν': 'N',
        'Ξ': 'KS',
        'Ο': 'O',
        'Π': 'P',
        'Ρ': 'R',
        'Σ': 'S',
        'Τ': 'T',
        'Υ': 'Y',
        'Φ': 'F',
        'Χ': 'X',
        'Ψ': 'PS',
        'Ω': 'O',
        'Ά': 'A',
        'Έ': 'E',
        'Ί': 'I',
        'Ό': 'O',
        'Ύ': 'Y',
        'Ή': 'I',
        'Ώ': 'O',
        'Ϊ': 'I',
        'Ϋ': 'Y',

        // Latvian
        'ā': 'a',
        // 'č': 'c', // duplicate
        'ē': 'e',
        'ģ': 'g',
        'ī': 'i',
        'ķ': 'k',
        'ļ': 'l',
        'ņ': 'n',
        // 'š': 's', // duplicate
        'ū': 'u',
        // 'ž': 'z', // duplicate
        'Ā': 'A',
        // 'Č': 'C', // duplicate
        'Ē': 'E',
        'Ģ': 'G',
        'Ī': 'I',
        'Ķ': 'k',
        'Ļ': 'L',
        'Ņ': 'N',
        // 'Š': 'S', // duplicate
        'Ū': 'U',
        // 'Ž': 'Z', // duplicate

        // Macedonian
        'Ќ': 'Kj',
        'ќ': 'kj',
        'Љ': 'Lj',
        'љ': 'lj',
        'Њ': 'Nj',
        'њ': 'nj',
        'Тс': 'Ts',
        'тс': 'ts',

        // Polish
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        // 'ó': 'o', // duplicate
        'ś': 's',
        'ź': 'z',
        'ż': 'z',
        'Ą': 'A',
        'Ć': 'C',
        'Ę': 'E',
        'Ł': 'L',
        'Ń': 'N',
        'Ś': 'S',
        'Ź': 'Z',
        'Ż': 'Z',

        // Ukranian
        'Є': 'Ye',
        'І': 'I',
        'Ї': 'Yi',
        'Ґ': 'G',
        'є': 'ye',
        'і': 'i',
        'ї': 'yi',
        'ґ': 'g',

        // Romanian
        'ă': 'a',
        'Ă': 'A',
        'ș': 's',
        'Ș': 'S',
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        'ț': 't',
        'Ț': 'T',
        'ţ': 't',
        'Ţ': 'T',

        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO

        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'yo',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'i',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'c',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'sh',
        'ъ': '',
        'ы': 'y',
        'ь': '',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya',
        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Д': 'D',
        'Е': 'E',
        'Ё': 'Yo',
        'Ж': 'Zh',
        'З': 'Z',
        'И': 'I',
        'Й': 'I',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'Kh',
        'Ц': 'C',
        'Ч': 'Ch',
        'Ш': 'Sh',
        'Щ': 'Sh',
        'Ъ': '',
        'Ы': 'Y',
        'Ь': '',
        'Э': 'E',
        'Ю': 'Yu',
        'Я': 'Ya',

        // Serbian
        'ђ': 'dj',
        'ј': 'j',
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        'ћ': 'c',
        'џ': 'dz',
        'Ђ': 'Dj',
        'Ј': 'j',
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        'Ћ': 'C',
        'Џ': 'Dz',

        // Slovak
        'ľ': 'l',
        'ĺ': 'l',
        'ŕ': 'r',
        'Ľ': 'L',
        'Ĺ': 'L',
        'Ŕ': 'R',

        // Turkish
        'ş': 's',
        'Ş': 'S',
        'ı': 'i',
        'İ': 'I',
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        'ğ': 'g',
        'Ğ': 'G',

        // Vietnamese
        'ả': 'a',
        'Ả': 'A',
        'ẳ': 'a',
        'Ẳ': 'A',
        'ẩ': 'a',
        'Ẩ': 'A',
        'đ': 'd',
        'Đ': 'D',
        'ẹ': 'e',
        'Ẹ': 'E',
        'ẽ': 'e',
        'Ẽ': 'E',
        'ẻ': 'e',
        'Ẻ': 'E',
        'ế': 'e',
        'Ế': 'E',
        'ề': 'e',
        'Ề': 'E',
        'ệ': 'e',
        'Ệ': 'E',
        'ễ': 'e',
        'Ễ': 'E',
        'ể': 'e',
        'Ể': 'E',
        'ỏ': 'o',
        'ọ': 'o',
        'Ọ': 'o',
        'ố': 'o',
        'Ố': 'O',
        'ồ': 'o',
        'Ồ': 'O',
        'ổ': 'o',
        'Ổ': 'O',
        'ộ': 'o',
        'Ộ': 'O',
        'ỗ': 'o',
        'Ỗ': 'O',
        'ơ': 'o',
        'Ơ': 'O',
        'ớ': 'o',
        'Ớ': 'O',
        'ờ': 'o',
        'Ờ': 'O',
        'ợ': 'o',
        'Ợ': 'O',
        'ỡ': 'o',
        'Ỡ': 'O',
        'Ở': 'o',
        'ở': 'o',
        'ị': 'i',
        'Ị': 'I',
        'ĩ': 'i',
        'Ĩ': 'I',
        'ỉ': 'i',
        'Ỉ': 'i',
        'ủ': 'u',
        'Ủ': 'U',
        'ụ': 'u',
        'Ụ': 'U',
        'ũ': 'u',
        'Ũ': 'U',
        'ư': 'u',
        'Ư': 'U',
        'ứ': 'u',
        'Ứ': 'U',
        'ừ': 'u',
        'Ừ': 'U',
        'ự': 'u',
        'Ự': 'U',
        'ữ': 'u',
        'Ữ': 'U',
        'ử': 'u',
        'Ử': 'ư',
        'ỷ': 'y',
        'Ỷ': 'y',
        'ỳ': 'y',
        'Ỳ': 'Y',
        'ỵ': 'y',
        'Ỵ': 'Y',
        'ỹ': 'y',
        'Ỹ': 'Y',
        'ạ': 'a',
        'Ạ': 'A',
        'ấ': 'a',
        'Ấ': 'A',
        'ầ': 'a',
        'Ầ': 'A',
        'ậ': 'a',
        'Ậ': 'A',
        'ẫ': 'a',
        'Ẫ': 'A',
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        'ắ': 'a',
        'Ắ': 'A',
        'ằ': 'a',
        'Ằ': 'A',
        'ặ': 'a',
        'Ặ': 'A',
        'ẵ': 'a',
        'Ẵ': 'A',
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",

        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",

        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",

        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",

        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",

        // symbols
        '“': '"',
        '”': '"',
        '‘': "'",
        '’': "'",
        '∂': 'd',
        'ƒ': 'f',
        '™': '(TM)',
        '©': '(C)',
        'œ': 'oe',
        'Œ': 'OE',
        '®': '(R)',
        '†': '+',
        '℠': '(SM)',
        '…': '...',
        '˚': 'o',
        'º': 'o',
        'ª': 'a',
        '•': '*',
        '၊': ',',
        '။': '.',

        // currency
        '$': 'USD',
        '€': 'EUR',
        '₢': 'BRN',
        '₣': 'FRF',
        '£': 'GBP',
        '₤': 'ITL',
        '₦': 'NGN',
        '₧': 'ESP',
        '₩': 'KRW',
        '₪': 'ILS',
        '₫': 'VND',
        '₭': 'LAK',
        '₮': 'MNT',
        '₯': 'GRD',
        '₱': 'ARS',
        '₲': 'PYG',
        '₳': 'ARA',
        '₴': 'UAH',
        '₵': 'GHS',
        '¢': 'cent',
        '¥': 'CNY',
        '元': 'CNY',
        '円': 'YEN',
        '﷼': 'IRR',
        '₠': 'EWE',
        '฿': 'THB',
        '₨': 'INR',
        '₹': 'INR',
        '₰': 'PF',
        '₺': 'TRY',
        '؋': 'AFN',
        '₼': 'AZN',
        'лв': 'BGN',
        '៛': 'KHR',
        '₡': 'CRC',
        '₸': 'KZT',
        'ден': 'MKD',
        'zł': 'PLN',
        '₽': 'RUB',
        '₾': 'GEL'

    };

    /**
     * special look ahead character array
     * These characters form with consonants to become 'single'/consonant combo
     * @type [Array]
     */
    var lookAheadCharArray = [
        // burmese
        '်',

        // Dhivehi
        'ް'
    ];

    /**
     * diatricMap for languages where transliteration changes entirely as more diatrics are added
     * @type {Object}
     */
    var diatricMap = {
        // Burmese
        // dependent vowels
        'ာ': 'a',
        'ါ': 'a',
        'ေ': 'e',
        'ဲ': 'e',
        'ိ': 'i',
        'ီ': 'i',
        'ို': 'o',
        'ု': 'u',
        'ူ': 'u',
        'ေါင်': 'aung',
        'ော': 'aw',
        'ော်': 'aw',
        'ေါ': 'aw',
        'ေါ်': 'aw',
        '်': '်', // this is special case but the character will be converted to latin in the code
        'က်': 'et',
        'ိုက်': 'aik',
        'ောက်': 'auk',
        'င်': 'in',
        'ိုင်': 'aing',
        'ောင်': 'aung',
        'စ်': 'it',
        'ည်': 'i',
        'တ်': 'at',
        'ိတ်': 'eik',
        'ုတ်': 'ok',
        'ွတ်': 'ut',
        'ေတ်': 'it',
        'ဒ်': 'd',
        'ိုဒ်': 'ok',
        'ုဒ်': 'ait',
        'န်': 'an',
        'ာန်': 'an',
        'ိန်': 'ein',
        'ုန်': 'on',
        'ွန်': 'un',
        'ပ်': 'at',
        'ိပ်': 'eik',
        'ုပ်': 'ok',
        'ွပ်': 'ut',
        'န်ုပ်': 'nub',
        'မ်': 'an',
        'ိမ်': 'ein',
        'ုမ်': 'on',
        'ွမ်': 'un',
        'ယ်': 'e',
        'ိုလ်': 'ol',
        'ဉ်': 'in',
        'ံ': 'an',
        'ိံ': 'ein',
        'ုံ': 'on',

        // Dhivehi
        'ައް': 'ah',
        'ަށް': 'ah'
    };

    /**
     * langCharMap language specific characters translations
     * @type   {Object}
     */
    var langCharMap = {
        'en': {}, // default language

        'az': { // Azerbaijani
            'ç': 'c',
            'ə': 'e',
            'ğ': 'g',
            'ı': 'i',
            'ö': 'o',
            'ş': 's',
            'ü': 'u',
            'Ç': 'C',
            'Ə': 'E',
            'Ğ': 'G',
            'İ': 'I',
            'Ö': 'O',
            'Ş': 'S',
            'Ü': 'U'
        },

        'cs': { // Czech
            'č': 'c',
            'ď': 'd',
            'ě': 'e',
            'ň': 'n',
            'ř': 'r',
            'š': 's',
            'ť': 't',
            'ů': 'u',
            'ž': 'z',
            'Č': 'C',
            'Ď': 'D',
            'Ě': 'E',
            'Ň': 'N',
            'Ř': 'R',
            'Š': 'S',
            'Ť': 'T',
            'Ů': 'U',
            'Ž': 'Z'
        },

        'fi': { // Finnish
            // 'å': 'a', duplicate see charMap/latin
            // 'Å': 'A', duplicate see charMap/latin
            'ä': 'a', // ok
            'Ä': 'A', // ok
            'ö': 'o', // ok
            'Ö': 'O' // ok
        },

        'hu': { // Hungarian
            'ä': 'a', // ok
            'Ä': 'A', // ok
            // 'á': 'a', duplicate see charMap/latin
            // 'Á': 'A', duplicate see charMap/latin
            'ö': 'o', // ok
            'Ö': 'O', // ok
            // 'ő': 'o', duplicate see charMap/latin
            // 'Ő': 'O', duplicate see charMap/latin
            'ü': 'u',
            'Ü': 'U',
            'ű': 'u',
            'Ű': 'U'
        },

        'lt': { // Lithuanian
            'ą': 'a',
            'č': 'c',
            'ę': 'e',
            'ė': 'e',
            'į': 'i',
            'š': 's',
            'ų': 'u',
            'ū': 'u',
            'ž': 'z',
            'Ą': 'A',
            'Č': 'C',
            'Ę': 'E',
            'Ė': 'E',
            'Į': 'I',
            'Š': 'S',
            'Ų': 'U',
            'Ū': 'U'
        },

        'lv': { // Latvian
            'ā': 'a',
            'č': 'c',
            'ē': 'e',
            'ģ': 'g',
            'ī': 'i',
            'ķ': 'k',
            'ļ': 'l',
            'ņ': 'n',
            'š': 's',
            'ū': 'u',
            'ž': 'z',
            'Ā': 'A',
            'Č': 'C',
            'Ē': 'E',
            'Ģ': 'G',
            'Ī': 'i',
            'Ķ': 'k',
            'Ļ': 'L',
            'Ņ': 'N',
            'Š': 'S',
            'Ū': 'u',
            'Ž': 'Z'
        },

        'pl': { // Polish
            'ą': 'a',
            'ć': 'c',
            'ę': 'e',
            'ł': 'l',
            'ń': 'n',
            'ó': 'o',
            'ś': 's',
            'ź': 'z',
            'ż': 'z',
            'Ą': 'A',
            'Ć': 'C',
            'Ę': 'e',
            'Ł': 'L',
            'Ń': 'N',
            'Ó': 'O',
            'Ś': 'S',
            'Ź': 'Z',
            'Ż': 'Z'
        },

        'sv': { // Swedish
            // 'å': 'a', duplicate see charMap/latin
            // 'Å': 'A', duplicate see charMap/latin
            'ä': 'a', // ok
            'Ä': 'A', // ok
            'ö': 'o', // ok
            'Ö': 'O' // ok
        },

        'sk': { // Slovak
            'ä': 'a',
            'Ä': 'A'
        },

        'sr': { // Serbian
            'љ': 'lj',
            'њ': 'nj',
            'Љ': 'Lj',
            'Њ': 'Nj',
            'đ': 'dj',
            'Đ': 'Dj'
        },

        'tr': { // Turkish
            'Ü': 'U',
            'Ö': 'O',
            'ü': 'u',
            'ö': 'o'
        }
    };

    /**
     * symbolMap language specific symbol translations
     * translations must be transliterated already
     * @type   {Object}
     */
    var symbolMap = {
        'ar': {
            '∆': 'delta',
            '∞': 'la-nihaya',
            '♥': 'hob',
            '&': 'wa',
            '|': 'aw',
            '<': 'aqal-men',
            '>': 'akbar-men',
            '∑': 'majmou',
            '¤': 'omla'
        },

        'az': {},

        'ca': {
            '∆': 'delta',
            '∞': 'infinit',
            '♥': 'amor',
            '&': 'i',
            '|': 'o',
            '<': 'menys que',
            '>': 'mes que',
            '∑': 'suma dels',
            '¤': 'moneda'
        },

        'cs': {
            '∆': 'delta',
            '∞': 'nekonecno',
            '♥': 'laska',
            '&': 'a',
            '|': 'nebo',
            '<': 'mensi nez',
            '>': 'vetsi nez',
            '∑': 'soucet',
            '¤': 'mena'
        },

        'de': {
            '∆': 'delta',
            '∞': 'unendlich',
            '♥': 'Liebe',
            '&': 'und',
            '|': 'oder',
            '<': 'kleiner als',
            '>': 'groesser als',
            '∑': 'Summe von',
            '¤': 'Waehrung'
        },

        'dv': {
            '∆': 'delta',
            '∞': 'kolunulaa',
            '♥': 'loabi',
            '&': 'aai',
            '|': 'noonee',
            '<': 'ah vure kuda',
            '>': 'ah vure bodu',
            '∑': 'jumula',
            '¤': 'faisaa'
        },

        'en': {
            '∆': 'delta',
            '∞': 'infinity',
            '♥': 'love',
            '&': 'and',
            '|': 'or',
            '<': 'less than',
            '>': 'greater than',
            '∑': 'sum',
            '¤': 'currency'
        },

        'es': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amor',
            '&': 'y',
            '|': 'u',
            '<': 'menos que',
            '>': 'mas que',
            '∑': 'suma de los',
            '¤': 'moneda'
        },

        'fa': {
            '∆': 'delta',
            '∞': 'bi-nahayat',
            '♥': 'eshgh',
            '&': 'va',
            '|': 'ya',
            '<': 'kamtar-az',
            '>': 'bishtar-az',
            '∑': 'majmooe',
            '¤': 'vahed'
        },

        'fi': {
            '∆': 'delta',
            '∞': 'aarettomyys',
            '♥': 'rakkaus',
            '&': 'ja',
            '|': 'tai',
            '<': 'pienempi kuin',
            '>': 'suurempi kuin',
            '∑': 'summa',
            '¤': 'valuutta'
        },

        'fr': {
            '∆': 'delta',
            '∞': 'infiniment',
            '♥': 'Amour',
            '&': 'et',
            '|': 'ou',
            '<': 'moins que',
            '>': 'superieure a',
            '∑': 'somme des',
            '¤': 'monnaie'
        },

        'ge': {
            '∆': 'delta',
            '∞': 'usasruloba',
            '♥': 'siqvaruli',
            '&': 'da',
            '|': 'an',
            '<': 'naklebi',
            '>': 'meti',
            '∑': 'jami',
            '¤': 'valuta'
        },

        'gr': {},

        'hu': {
            '∆': 'delta',
            '∞': 'vegtelen',
            '♥': 'szerelem',
            '&': 'es',
            '|': 'vagy',
            '<': 'kisebb mint',
            '>': 'nagyobb mint',
            '∑': 'szumma',
            '¤': 'penznem'
        },

        'it': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amore',
            '&': 'e',
            '|': 'o',
            '<': 'minore di',
            '>': 'maggiore di',
            '∑': 'somma',
            '¤': 'moneta'
        },

        'lt': {
            '∆': 'delta',
            '∞': 'begalybe',
            '♥': 'meile',
            '&': 'ir',
            '|': 'ar',
            '<': 'maziau nei',
            '>': 'daugiau nei',
            '∑': 'suma',
            '¤': 'valiuta'
        },

        'lv': {
            '∆': 'delta',
            '∞': 'bezgaliba',
            '♥': 'milestiba',
            '&': 'un',
            '|': 'vai',
            '<': 'mazak neka',
            '>': 'lielaks neka',
            '∑': 'summa',
            '¤': 'valuta'
        },

        'my': {
            '∆': 'kwahkhyaet',
            '∞': 'asaonasme',
            '♥': 'akhyait',
            '&': 'nhin',
            '|': 'tho',
            '<': 'ngethaw',
            '>': 'kyithaw',
            '∑': 'paungld',
            '¤': 'ngwekye'
        },

        'mk': {},

        'nl': {
            '∆': 'delta',
            '∞': 'oneindig',
            '♥': 'liefde',
            '&': 'en',
            '|': 'of',
            '<': 'kleiner dan',
            '>': 'groter dan',
            '∑': 'som',
            '¤': 'valuta'
        },

        'pl': {
            '∆': 'delta',
            '∞': 'nieskonczonosc',
            '♥': 'milosc',
            '&': 'i',
            '|': 'lub',
            '<': 'mniejsze niz',
            '>': 'wieksze niz',
            '∑': 'suma',
            '¤': 'waluta'
        },

        'pt': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amor',
            '&': 'e',
            '|': 'ou',
            '<': 'menor que',
            '>': 'maior que',
            '∑': 'soma',
            '¤': 'moeda'
        },

        'ro': {
            '∆': 'delta',
            '∞': 'infinit',
            '♥': 'dragoste',
            '&': 'si',
            '|': 'sau',
            '<': 'mai mic ca',
            '>': 'mai mare ca',
            '∑': 'suma',
            '¤': 'valuta'
        },

        'ru': {
            '∆': 'delta',
            '∞': 'beskonechno',
            '♥': 'lubov',
            '&': 'i',
            '|': 'ili',
            '<': 'menshe',
            '>': 'bolshe',
            '∑': 'summa',
            '¤': 'valjuta'
        },

        'sk': {
            '∆': 'delta',
            '∞': 'nekonecno',
            '♥': 'laska',
            '&': 'a',
            '|': 'alebo',
            '<': 'menej ako',
            '>': 'viac ako',
            '∑': 'sucet',
            '¤': 'mena'
        },

        'sr': {},

        'tr': {
            '∆': 'delta',
            '∞': 'sonsuzluk',
            '♥': 'ask',
            '&': 've',
            '|': 'veya',
            '<': 'kucuktur',
            '>': 'buyuktur',
            '∑': 'toplam',
            '¤': 'para birimi'
        },

        'uk': {
            '∆': 'delta',
            '∞': 'bezkinechnist',
            '♥': 'lubov',
            '&': 'i',
            '|': 'abo',
            '<': 'menshe',
            '>': 'bilshe',
            '∑': 'suma',
            '¤': 'valjuta'
        },

        'vn': {
            '∆': 'delta',
            '∞': 'vo cuc',
            '♥': 'yeu',
            '&': 'va',
            '|': 'hoac',
            '<': 'nho hon',
            '>': 'lon hon',
            '∑': 'tong',
            '¤': 'tien te'
        }
    };

    var uricChars = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'].join('');

    var uricNoSlashChars = [';', '?', ':', '@', '&', '=', '+', '$', ','].join('');

    var markChars = ['.', '!', '~', '*', "'", '(', ')'].join('');

    /**
     * getSlug
     * @param  {string} input input string
     * @param  {object|string} opts config object or separator string/char
     * @api    public
     * @return {string}  sluggified string
     */
    var getSlug = function getSlug(input, opts) {
        var separator = '-';
        var result = '';
        var diatricString = '';
        var convertSymbols = true;
        var customReplacements = {};
        var maintainCase;
        var titleCase;
        var truncate;
        var uricFlag;
        var uricNoSlashFlag;
        var markFlag;
        var symbol;
        var langChar;
        var lucky;
        var i;
        var ch;
        var l;
        var lastCharWasSymbol;
        var lastCharWasDiatric;
        var allowedChars = '';

        if (typeof input !== 'string') {
            return '';
        }

        if (typeof opts === 'string') {
            separator = opts;
        }

        symbol = symbolMap.en;
        langChar = langCharMap.en;

        if (typeof opts === 'object') {
            maintainCase = opts.maintainCase || false;
            customReplacements = (opts.custom && typeof opts.custom === 'object') ? opts.custom : customReplacements;
            truncate = (+opts.truncate > 1 && opts.truncate) || false;
            uricFlag = opts.uric || false;
            uricNoSlashFlag = opts.uricNoSlash || false;
            markFlag = opts.mark || false;
            convertSymbols = (opts.symbols === false || opts.lang === false) ? false : true;
            separator = opts.separator || separator;

            if (uricFlag) {
                allowedChars += uricChars;
            }

            if (uricNoSlashFlag) {
                allowedChars += uricNoSlashChars;
            }

            if (markFlag) {
                allowedChars += markChars;
            }

            symbol = (opts.lang && symbolMap[opts.lang] && convertSymbols) ?
                symbolMap[opts.lang] : (convertSymbols ? symbolMap.en : {});

            langChar = (opts.lang && langCharMap[opts.lang]) ?
                langCharMap[opts.lang] :
                opts.lang === false || opts.lang === true ? {} : langCharMap.en;

            // if titleCase config is an Array, rewrite to object format
            if (opts.titleCase && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
                opts.titleCase.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });

                titleCase = true;
            } else {
                titleCase = !!opts.titleCase;
            }

            // if custom config is an Array, rewrite to object format
            if (opts.custom && typeof opts.custom.length === 'number' && Array.prototype.toString.call(opts.custom)) {
                opts.custom.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });
            }

            // custom replacements
            Object.keys(customReplacements).forEach(function (v) {
                var r;

                if (v.length > 1) {
                    r = new RegExp('\\b' + escapeChars(v) + '\\b', 'gi');
                } else {
                    r = new RegExp(escapeChars(v), 'gi');
                }

                input = input.replace(r, customReplacements[v]);
            });

            // add all custom replacement to allowed charlist
            for (ch in customReplacements) {
                allowedChars += ch;
            }
        }

        allowedChars += separator;

        // escape all necessary chars
        allowedChars = escapeChars(allowedChars);

        // trim whitespaces
        input = input.replace(/(^\s+|\s+$)/g, '');

        lastCharWasSymbol = false;
        lastCharWasDiatric = false;

        for (i = 0, l = input.length; i < l; i++) {
            ch = input[i];

            if (isReplacedCustomChar(ch, customReplacements)) {
                // don't convert a already converted char
                lastCharWasSymbol = false;
            } else if (langChar[ch]) {
                // process language specific diactrics chars conversion
                ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? ' ' + langChar[ch] : langChar[ch];

                lastCharWasSymbol = false;
            } else if (ch in charMap) {
                // the transliteration changes entirely when some special characters are added
                if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
                    diatricString += ch;
                    ch = '';
                } else if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + charMap[ch];
                    diatricString = '';
                } else {
                    // process diactrics chars
                    ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? ' ' + charMap[ch] : charMap[ch];
                }

                lastCharWasSymbol = false;
                lastCharWasDiatric = false;
            } else if (ch in diatricMap) {
                diatricString += ch;
                ch = '';
                // end of string, put the whole meaningful word
                if (i === l - 1) {
                    ch = diatricMap[diatricString];
                }
                lastCharWasDiatric = true;
            } else if (
                // process symbol chars
                symbol[ch] && !(uricFlag && uricChars
                    .indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars
                    // .indexOf(ch) !== -1) && !(markFlag && markChars
                    .indexOf(ch) !== -1)) {
                ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
                ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : '';

                lastCharWasSymbol = true;
            } else {
                if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + ch;
                    diatricString = '';
                    lastCharWasDiatric = false;
                } else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
                    // process latin chars
                    ch = ' ' + ch;
                }
                lastCharWasSymbol = false;
            }

            // add allowed chars
            result += ch.replace(new RegExp('[^\\w\\s' + allowedChars + '_-]', 'g'), separator);
        }

        if (titleCase) {
            result = result.replace(/(\w)(\S*)/g, function (_, i, r) {
                var j = i.toUpperCase() + (r !== null ? r : '');
                return (Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0) ? j : j.toLowerCase();
            });
        }

        // eliminate duplicate separators
        // add separator
        // trim separators from start and end
        result = result.replace(/\s+/g, separator)
            .replace(new RegExp('\\' + separator + '+', 'g'), separator)
            .replace(new RegExp('(^\\' + separator + '+|\\' + separator + '+$)', 'g'), '');

        if (truncate && result.length > truncate) {
            lucky = result.charAt(truncate) === separator;
            result = result.slice(0, truncate);

            if (!lucky) {
                result = result.slice(0, result.lastIndexOf(separator));
            }
        }

        if (!maintainCase && !titleCase) {
            result = result.toLowerCase();
        }

        return result;
    };

    /**
     * createSlug curried(opts)(input)
     * @param   {object|string} opts config object or input string
     * @return  {Function} function getSlugWithConfig()
     **/
    var createSlug = function createSlug(opts) {

        /**
         * getSlugWithConfig
         * @param   {string} input string
         * @return  {string} slug string
         */
        return function getSlugWithConfig(input) {
            return getSlug(input, opts);
        };
    };

    /**
     * escape Chars
     * @param   {string} input string
     */
    var escapeChars = function escapeChars(input) {
        return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
    };

    /**
     * check if the char is an already converted char from custom list
     * @param   {char} ch character to check
     * @param   {object} customReplacements custom translation map
     */
    var isReplacedCustomChar = function (ch, customReplacements) {
        for (var c in customReplacements) {
            if (customReplacements[c] === ch) {
                return true;
            }
        }
    };

    if ( true && module.exports) {

        // export functions for use in Node
        module.exports = getSlug;
        module.exports.createSlug = createSlug;
    } else if (true) {

        // export function for use in AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return getSlug;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48178);
/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_back__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_devtools_shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19746);
/* harmony import */ var _vue_devtools_shared_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_devtools_shared_utils__WEBPACK_IMPORTED_MODULE_1__);
// this is injected to the app page when the panel is activated.




window.addEventListener('message', handshake)

function sendListening () {
  window.postMessage({
    source: 'vue-devtools-backend-injection',
    payload: 'listening',
  }, '*')
}
sendListening()

function handshake (e) {
  if (e.data.source === 'vue-devtools-proxy' && e.data.payload === 'init') {
    window.removeEventListener('message', handshake)

    var listeners = []
    var bridge = new _vue_devtools_shared_utils__WEBPACK_IMPORTED_MODULE_1__.Bridge({
      listen (fn) {
        var listener = evt => {
          if (evt.data.source === 'vue-devtools-proxy' && evt.data.payload) {
            fn(evt.data.payload)
          }
        }
        window.addEventListener('message', listener)
        listeners.push(listener)
      },
      send (data) {
        // if (process.env.NODE_ENV !== 'production') {
        //   console.log('[chrome] backend -> devtools', data)
        // }
        window.postMessage({
          source: 'vue-devtools-backend',
          payload: data,
        }, '*')
      },
    })

    bridge.on('shutdown', () => {
      listeners.forEach(l => {
        window.removeEventListener('message', l)
      })
      listeners = []
    })

    ;(0,_back__WEBPACK_IMPORTED_MODULE_0__.initBackend)(bridge)
  } else {
    sendListening()
  }
}

})();

/******/ })()
;