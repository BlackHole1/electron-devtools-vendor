/*global chrome*/

/**
 * Run when devtools.html is automatically added to the Chrome devtools panels.
 * It creates a new pane using the panes/index.html which includes EmberInspector.
 */
var panelWindow, injectedPanel = false, injectedPage = false, panelVisible = false, savedStack = [];

chrome.devtools.panels.create("Ember", "panes-3-4-0/assets/svg/ember-icon.svg", "panes-3-4-0/index.html");
