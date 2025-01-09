function changeTheme() {
  const body = document.getElementById("body");
  const btn = document.getElementById("btn");
  const isLightMode = body.classList.contains("light-mode");

  if (isLightMode) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    btn.textContent = "Change To Light Mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    btn.textContent = "Change To Dark Mode";
    localStorage.setItem("theme", "light-mode");
  }
}

window.onload = function () {
  const body = document.getElementById("body");
  const theme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(theme);
  const text =
    theme === "dark-mode" ? "Change To Light Mode" : "Change To Dark Mode";
  document.getElementById("btn").textContent = text;
};
