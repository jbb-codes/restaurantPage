export const homeTab = function () {
  const contentContainer = document.querySelector("#content");

  const tab = document.createElement("div");
  tab.classList.add("tab");

  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");

  const tabHeader = document.createElement("h1");
  tabHeader.textContent = "Home";

  const tabText = document.createElement("p");
  tabText.textContent = "This is the home tab content";

  tabContent.appendChild(tabHeader);
  tabContent.appendChild(tabText);

  tab.appendChild(tabContent);

  contentContainer.appendChild(tab);
};
