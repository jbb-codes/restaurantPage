export const aboutTab = function () {
  const tab = document.createElement("div");
  tab.classList.add("tab");

  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");

  const tabHeader = document.createElement("h1");
  tabHeader.textContent = "About";

  const tabText = document.createElement("p");
  tabText.textContent = "This is the about tab content";

  tabContent.appendChild(tabHeader);
  tabContent.appendChild(tabText);

  tab.appendChild(tabContent);

  return tab;
};
