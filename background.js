browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Match Trello board pages only
  var regex = new RegExp(/.*:\/\/trello\.com\/b\/.*/);
  var match = regex.exec(tab.url);

  // Setup page for layout changes and show page action
  if (match) {
    browser.tabs.executeScript(null, {file: '/setup-css.js'});
    browser.pageAction.show(tabId);
  }
  else {
    browser.pageAction.hide(tabId);
  }
});

browser.pageAction.onClicked.addListener(function (tab) {
  browser.tabs.executeScript(null, {file: '/toggle-layout.js'});
});

browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason ==  "update" && parseFloat(details.previousVersion) < 3) {
    browser.tabs.create({'url': browser.extension.getURL('/changelog/changelog.html')});
  }
});
