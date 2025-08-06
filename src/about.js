import { Page } from "./page.js";

export class AboutPage extends Page {
  generate = () => {
    Page.clear();

    const about = document.createElement("div");
    const details = document.createElement("h1");
    const desc = document.createElement("p");

    about.id = "about";

    details.textContent = "About Us";
    desc.textContent =
      "Familiar, yet new. Although comforting, a new experience awaits you. \r\n";
    desc.textContent +=
      "Here at Plate Leaf, We aim to give the best, serve the best and be the best. \r\n\r\n ";
    desc.textContent +=
      "Started by Felipe Peppino in 1968, he aimed to create restaurant that gives the comforting feeling of home cooking, but without feeling redundant and pointless. Many people dream, but Felipe acted on it.";

    about.appendChild(details);
    about.appendChild(desc);
    content.appendChild(about);
  };
}
