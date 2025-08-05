import { Page } from "./page.js";

export class HomePage extends Page {
  generate = () => {
    const welcome = document.createElement("div");
    const header = document.createElement("h1");
    const image = document.createElement("img");
    const greeter = document.createElement("div");
    const greetings = document.createElement("h2");
    const desc = document.createElement("p");

    welcome.id = "welcome";
    greeter.id = "greeter";

    header.textContent = "Plate Leaf";
    greetings.textContent = "Feel just like at Home";
    desc.textContent =
      "Everything you see, the Sun touches, and what you see will be a mirror of something nostalgic, familiar. \r\n \r\n";
    desc.textContent +=
      "Vivid Greens, Tender Browns, Charcoal Blacks and Clear Whites - all that is offered here is pure unbridled bliss of cuisine.";

    image.setAttribute(
      "src",
      "https://images.pexels.com/photos/33239717/pexels-photo-33239717.jpeg",
    );
    image.setAttribute("width", "80%");

    greeter.appendChild(greetings);
    greeter.appendChild(desc);
    welcome.appendChild(header);
    welcome.appendChild(image);
    welcome.appendChild(greeter);
    content.appendChild(welcome);
  };
}
