import "./styles.css";

import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";

const nav = document.querySelector("nav");

let page = new HomePage();
page.generate();

let currentTab = document.querySelector("#homeTab");

nav.addEventListener("click", (e) => {
  let target = e.target;

  if ("active-tab" in target.classList) {
    return;
  }

  if (target.id === "homeTab") {
    page = new HomePage();
  } else if (target.id === "menuTab") {
    page = new MenuPage();
  } else {
    return;
  }

  currentTab.className = "";
  currentTab = target;
  currentTab.classList.add("active-tab");
  page.generate();
});
