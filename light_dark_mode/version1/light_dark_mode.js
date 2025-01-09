let color = "white";

function changeTheme() {
  const body = document.getElementById("body");
  const btn = document.getElementById("btn");

  let themeColor = color === "white" ? "light" : "dark";

  if (themeColor === "light") {
    body.style.backgroundColor = "#000000";
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "#000000";
    btn.textContent = "Change To Light Mode";
    color = "dark";
  } else {
    body.style.backgroundColor = "#ffffff";
    btn.style.backgroundColor = "#000000";
    btn.style.color = "#ffffff";
    btn.textContent = "Change To Dark Mode";
    color = "white";
  }
}
