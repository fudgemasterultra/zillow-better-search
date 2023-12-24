import { DOMMessage, DOMMessageResponse } from "../types/DOMMessages";

function interceptCall(details: chrome.webRequest.WebResponseCacheDetails) {
  console.log("****************");
  console.log("body request");
  console.log(details.url);
  console.log("****************");
}

chrome.webRequest.onCompleted.addListener(
  interceptCall,
  { urls: ["https://zillow.com/*"], types: ["xmlhttprequest"] },
  ["responseHeaders"]
);

console.log("does this load?");
