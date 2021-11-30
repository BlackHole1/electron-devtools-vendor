"use strict";
var code = '';
// Settings that last only while the DevTool is open.
var sessionSettings = {
    zapSpeed: 'normal',
};
// Create a panel
chrome.devtools.panels.create('Cycle.js', '128.png', 'panel.html', function (extensionPanel) {
    var portToBackground = chrome.runtime.connect({ name: 'cyclejs' });
    extensionPanel.onShown.addListener(function (panelWindow) {
        loadGraphSerializerCode();
        if (!panelWindow['postMessageToBackground']) {
            // Setup PANEL=>BACKGROUND communication
            panelWindow['postMessageToBackground'] = function postMessageToBackground(msg) {
                portToBackground.postMessage(msg);
            };
            // Setup PANEL=>GRAPH SERIALIZER communication
            panelWindow['postMessageToGraphSerializer'] =
                function postMessageToGraphSerializer(msg) {
                    // alert('LAUNCHER is relaying message from panel to graphSerializer: ' + msg);
                    if (msg === 'slow' || msg === 'normal' || msg === 'fast') {
                        sessionSettings.zapSpeed = msg;
                    }
                    chrome.devtools.inspectedWindow.eval("window.receivePanelMessage('" + msg + "');");
                };
            // Setup BACKGROUND=>PANEL communication
            portToBackground.onMessage.addListener(function (message) {
                // alert('LAUNCHER relaying message from BACKGROUND to PANEL: ' + JSON.stringify(message))
                if (message.type === 'panelData' && typeof panelWindow['postMessage'] === 'function') {
                    panelWindow['postMessage']({ __fromCyclejsDevTool: true, data: message.data }, '*');
                }
                else if (message.type === 'tabLoading'
                    && message.tabId === chrome.devtools.inspectedWindow.tabId) {
                    var settings_1 = "\n            window.CyclejsDevToolSettings = " + JSON.stringify(sessionSettings) + ";\n          ";
                    chrome.devtools.inspectedWindow.reload({
                        injectedScript: (settings_1 + " " + code),
                    });
                }
            });
        }
        // alert('LAUNCHER will eval the graphSerializer source code')
        var settings = "\n      window.CyclejsDevToolSettings = " + JSON.stringify(sessionSettings) + ";\n    ";
        chrome.devtools.inspectedWindow.eval(settings + loadGraphSerializerCode());
    });
});
function loadGraphSerializerCode() {
    var xhr;
    if (!code) {
        xhr = new XMLHttpRequest();
        xhr.open('GET', chrome.extension.getURL('/graphSerializer.js'), false);
        xhr.send();
        code = xhr.responseText;
    }
    return code;
}
