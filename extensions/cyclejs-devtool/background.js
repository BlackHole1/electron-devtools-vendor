var portToLauncher = null;
// Setup BACKGROUND<=>LAUNCHER (wrapping a panel) communication
chrome.runtime.onConnect.addListener(function (port) {
    // inspectedTabs[port.sender.id] = port;
    portToLauncher = port;
    var devToolsListener = function (rawMessage, sender) {
        // const message = JSON.parse(rawMessage);
        // alert('BACKGROUND on this port message: ' + rawMessage)
        // OPTIONAL: communicate to the USER PAGE through an injected script
    };
    // alert('BACKGROUND connecting to a launcher port');
    port.onMessage.addListener(devToolsListener);
    port.onDisconnect.addListener(function () {
        port.onMessage.removeListener(devToolsListener);
    });
});
// From the CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (message, sender) {
    // alert('BACKGROUND got general message ' + JSON.stringify(message))
    if (portToLauncher) {
        // To the LAUNCHER port
        portToLauncher.postMessage({ type: 'panelData', data: message });
    }
});
// Necessary to avoid the background detecting a reload triggered from the
// launcher and then causing the launcher to reload, and repeating this process
// in an infinite cycle, we need to keep track of even/odd instances of reload.
var reloaded = 0; // number of times reloaded
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // alert('BACKGROUND a tab was updated');
    if (portToLauncher && changeInfo.status === 'loading') {
        if (reloaded % 2 === 0) {
            portToLauncher.postMessage({ type: 'tabLoading', tabId: tabId });
        }
        reloaded += 1;
    }
});
