"use strict";

const getModSettings = callback => {
  chrome.storage.sync.get(null, result => {
    callback(result);
  });
};

const initialize = () => {
  getModSettings(settings => {
    localStorage.setItem("__cxmods", JSON.stringify(settings));
    const script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("src", chrome.extension.getURL("src/inject/inject.js"));
    const head =
      document.head ||
      document.getElementsByTagName("head")[0] ||
      document.documentElement;
    head.insertBefore(script, head.lastChild);
  });
};

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      initialize();
    }
  }, 100);
});
