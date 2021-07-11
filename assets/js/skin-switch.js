---
layout: null
---
function skin_switch() {
  let element = document.getElementsByTagName("BODY")[0];
  element.classList.toggle("page-dark-mode");
  BeautifulJekyllJS.initNavbar();
  let switchDiv = document.getElementById("change-skin");

  if (switchDiv.title == "Toggle Dark Mode") {
    switchDiv.title = "Toggle Light Mode";
    window.localStorage.setItem('mode', 'dark');

  } else {
    switchDiv.title = "Toggle Dark Mode";
    window.localStorage.setItem('mode', 'light');
  }
}
