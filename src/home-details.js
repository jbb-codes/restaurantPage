export const addContent = function () {
  const contentContainer = document.querySelector("#content");

  const pageHeader = document.createElement("h1");
  const pageContent = document.createElement("p");

  pageHeader.textContent = "Home Details";
  pageContent.textContent = "This is the home details page content";

  contentContainer.appendChild(pageHeader);
  contentContainer.appendChild(pageContent);
};
