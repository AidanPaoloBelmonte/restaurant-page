// Base Class for generating pages
export class Page {
  static #content = document.querySelector("#content");

  constructor() {
    return;
  }

  static clear = () => {
    while (content.lastChild) {
      content.removeChild(content.lastChild);
    }
  };

  generate = () => {
    Page.clear();

    const errorDisplay = document.createElement("div");
    const errorMsg = document.createElement("p");

    errorDisplay.id = "error";
    errorMsg.textContent =
      "An error has occured. \r\n We apologize for the inconvenience.";

    errorDisplay.appendChild(errorMsg);
    content.appendChild(errorDisplay);

    return;
  };
}
