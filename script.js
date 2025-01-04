const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "light" ? "dark" : "light";
  themeToggle.textContent = document.body.dataset.theme === "light" ? "☀️" : "🌙";
});
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  });