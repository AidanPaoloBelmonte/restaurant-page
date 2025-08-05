import { Page } from "./page.js";

export class MenuPage extends Page {
  generate = () => {
    Page.clear();

    const menu = document.createElement("div");
    const title = document.createElement("h1");
    const desc = document.createElement("p");
    const menuContainer = document.createElement("div");
    const menuAppetizers = document.createElement("div");
    const menuMeals = document.createElement("div");
    const menuSoups = document.createElement("div");
    const menuDesserts = document.createElement("div");

    menu.id = "menu";
    menuContainer.id = "menu-container";
    menuAppetizers.classList.add("menu-items");
    menuMeals.classList.add("menu-items");
    menuSoups.classList.add("menu-items");
    menuDesserts.classList.add("menu-items");

    title.textContent = "Our Menu";
    desc.textContent = "A plethora of amazing foods to choose from.";

    menuContainer.appendChild(menuAppetizers);
    menuContainer.appendChild(menuMeals);
    menuContainer.appendChild(menuSoups);
    menuContainer.appendChild(menuDesserts);
    menu.appendChild(title);
    menu.appendChild(desc);
    menu.appendChild(menuContainer);
    content.appendChild(menu);
  };
}
