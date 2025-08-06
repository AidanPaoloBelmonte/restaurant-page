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
    const menuAppetizersTitle = document.createElement("h2");
    const menuMealsTitle = document.createElement("h2");
    const menuSoupsTitle = document.createElement("h2");
    const menuDessertsTitle = document.createElement("h2");
    const menuAppetizersDesc = document.createElement("p");
    const menuMealsDesc = document.createElement("p");
    const menuSoupsDesc = document.createElement("p");
    const menuDessertsDesc = document.createElement("p");
    const menuAppetizersImg = document.createElement("img");
    const menuMealsImg = document.createElement("img");
    const menuSoupsImg = document.createElement("img");
    const menuDessertsImg = document.createElement("img");

    menu.id = "menu";
    menuContainer.id = "menu-container";
    menuAppetizers.classList.add("menu-items");
    menuMeals.classList.add("menu-items");
    menuSoups.classList.add("menu-items");
    menuDesserts.classList.add("menu-items");

    title.textContent = "Our Menu";
    desc.textContent = "A plethora of amazing foods to choose from.";
    menuAppetizersTitle.textContent = "Appetizers";
    menuMealsTitle.textContent = "Meals";
    menuSoupsTitle.textContent = "Soups";
    menuDessertsTitle.textContent = "Desserts";
    menuAppetizersDesc.textContent =
      "Prepare yourself with our flavorful Appetizers";
    menuMealsDesc.textContent =
      "Enjoy a fulfilling experience with our full Meals";
    menuSoupsDesc.textContent = "Get a cleansing taste with our tasty Soups";
    menuDessertsDesc.textContent =
      "Satisfy your cravings with our sweetest Desserts";

    menuAppetizersImg.setAttribute(
      "src",
      "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg",
    );
    menuAppetizersImg.setAttribute("width", "80%");
    menuMealsImg.setAttribute(
      "src",
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    );
    menuMealsImg.setAttribute("width", "80%");
    menuSoupsImg.setAttribute(
      "src",
      "https://images.pexels.com/photos/3559899/pexels-photo-3559899.jpeg",
    );
    menuSoupsImg.setAttribute("width", "80%");
    menuDessertsImg.setAttribute(
      "src",
      "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    );
    menuDessertsImg.setAttribute("width", "80%");

    menuAppetizers.appendChild(menuAppetizersImg);
    menuMeals.appendChild(menuMealsImg);
    menuSoups.appendChild(menuSoupsImg);
    menuDesserts.appendChild(menuDessertsImg);
    menuAppetizers.appendChild(menuAppetizersTitle);
    menuMeals.appendChild(menuMealsTitle);
    menuSoups.appendChild(menuSoupsTitle);
    menuDesserts.appendChild(menuDessertsTitle);
    menuAppetizers.appendChild(menuAppetizersDesc);
    menuMeals.appendChild(menuMealsDesc);
    menuSoups.appendChild(menuSoupsDesc);
    menuDesserts.appendChild(menuDessertsDesc);
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
