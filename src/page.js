// Base Class for generating pages
export class Page {
  static content = document.querySelector("#content");
  static errorDisplay = document.createElement("div");

  constructor() {
    return;
  }

  generate = () => {
    while (content.lastChild) {
      content.removeChild(content.lastChild);
    }

    errorDisplay.textContent = "We apologize for the inconvenience.";

    return;
  };
}
