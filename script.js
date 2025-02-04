const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "light" ? "dark" : "light";
  themeToggle.textContent = document.body.dataset.theme === "light" ? "☀️" : "🌙";
  themeToggle.setAttribute('title',"Activate Night Mode");
});
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  });

  const googleDocLink = "https://docs.google.com/document/d/1PBQT2L-1Lf7kvmvA4XyEHYDBo8XWso3tYCPjd5WXtvU/export?format=pdf";
  function openPdf() {
    window.open(googleDocLink, "_blank");
}