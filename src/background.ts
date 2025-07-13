// Background script for Chrome extension
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Open new tab with expanded view on first install
    chrome.tabs.create({
      url: chrome.runtime.getURL('index.html?mode=expanded')
    });
  }
});

// Handle messages from popup/content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openExpanded') {
    chrome.tabs.create({
      url: chrome.runtime.getURL('index.html?mode=expanded')
    });
    sendResponse({ success: true });
  }
  
  if (request.action === 'closePopup') {
    // Close popup window if it exists
    if (sender.tab?.windowId) {
      chrome.windows.remove(sender.tab.windowId);
    }
    sendResponse({ success: true });
  }
  
  return true; // Keep message channel open for async response
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // This won't be called if popup is defined in manifest
  // But keeping it for potential future use
  chrome.tabs.create({
    url: chrome.runtime.getURL('index.html?mode=expanded')
  });
});