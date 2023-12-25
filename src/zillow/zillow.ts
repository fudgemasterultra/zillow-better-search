// background.ts

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 4,
        priority: 1,
        action: { type: chrome.declarativeNetRequest.RuleActionType.BLOCK },
        condition: {
          urlFilter: "google.com",
          resourceTypes: [
            chrome.declarativeNetRequest.ResourceType.XMLHTTPREQUEST,
          ],
        },
      },
    ],
  });
});

chrome.runtime.onStartup.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      // Add rules if needed on startup
    ],
  });
});

export {};
