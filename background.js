chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-first-result") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: openFirstGoogleResult,
      });
    });
  }
});

function openFirstGoogleResult() {
  if (!window.location.hostname.includes("google.")) return;

  const firstLink = document.querySelector(
    'a[href^="http"]:not([href*="google"])',
  );
  if (firstLink) {
    window.open(firstLink.href, "_blank");
  }
}
