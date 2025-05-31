document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    const firstLink = document.querySelector(
      'a[href^="http"]:not([href*="google"])',
    );
    if (firstLink) {
      window.open(firstLink.href, "_blank");
    }
  }
});
