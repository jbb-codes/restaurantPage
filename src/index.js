import { addContent } from "./home-details.js";
import { homeTab } from "./home-tab.js";
import { menuTab } from "./menu-tab.js";
import { aboutTab } from "./about-tab.js";

addContent();

const homeTabButton = document.querySelector("#homeTab");
const menuTabButton = document.querySelector("#menuTab");
const aboutTabButton = document.querySelector("#aboutTab");

homeTabButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  homeTab();
});

menuTabButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.appendChild(menuTab());
});

aboutTabButton.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.appendChild(aboutTab());
});
