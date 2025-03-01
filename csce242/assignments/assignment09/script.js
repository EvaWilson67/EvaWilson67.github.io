class Pizza {
  constructor(name, ingredients, sauce, cheese, price, picture) {
    this.name = name;
    this.ingredients = ingredients;
    this.sauce = sauce;
    this.cheese = cheese;
    this.price = price;
    this.picture = picture;
  }

  get item() {
    const pizzaSection = document.createElement("section");
    pizzaSection.classList.add("tile");
    const heading = document.createElement("h3");
    heading.innerText = this.name;
    pizzaSection.appendChild(heading);

    const image = document.createElement("img");
    image.src = "images/" + this.picture;
    pizzaSection.appendChild(image);

    pizzaSection.onclick = () => {
      displayPizzaDetails(this);
    };
    return pizzaSection;
  }

  get extraDetails() {
    const pizzaSection = document.createElement("section");
    pizzaSection.classList.add("columns");
    pizzaSection.classList.add("tiles");

    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("width");

    const heading = document.createElement("h3");
    heading.innerText = this.name;
    pizzaDiv.appendChild(heading);

    const ingredients = document.createElement("p");
    ingredients.innerHTML = `<b>Ingredients:</b> ${this.ingredients}`;
    pizzaDiv.appendChild(ingredients);

    const sauce = document.createElement("p");
    sauce.innerHTML = `<b>Sauce:</b> ${this.sauce}`;
    pizzaDiv.appendChild(sauce);

    const cheese = document.createElement("p");
    cheese.innerHTML = `<b>Cheese:</b> ${this.cheese}`;
    pizzaDiv.appendChild(cheese);

    const price = document.createElement("p");
    price.innerHTML = `<b>Price:</b> ${this.price}`;
    pizzaDiv.appendChild(price);

    pizzaSection.appendChild(pizzaDiv);

    const image = document.createElement("img");
    image.classList.add("rotate");
    image.src = "images/" + this.picture;
    pizzaSection.appendChild(image);

    setTimeout(() => {
      image.classList.remove('rotate');
  }, 1);

    return pizzaSection;
  }
}

const displayPizzaDetails = (pizza) => {
  const pizzaBox = document.getElementById("popup-box");
  pizzaBox.style.display = "block";
  pizzaBox.classList.remove("hidden");

  const pizzaDetails = document.getElementById("popup");

  pizzaDetails.innerText = "";
  pizzaDetails.append(pizza.extraDetails);

};

const createArray = () => {
  let pizzas = [];
  let pizzaArray = document.getElementById("display-pizza");

  pizzas.push(
    new Pizza(
      "Olive You",
      "Olives, Capers",
      "Red Sauce",
      "Mozzerela",
      "18.75",
      "oliveyou.jpg"
    )
  );

  pizzas.push(
    new Pizza(
      "So Corny",
      "Corn, Ham",
      "White Sauce",
      "Mozzerela, Harvata",
      "15.46",
      "socorny.jpg"
    )
  );

  pizzas.push(
    new Pizza(
      "Pepperoni",
      "Pepperoni",
      "Red Sauce",
      "Mozzerela",
      "16.98",
      "pepperoni.jpg"
    )
  );
  pizzas.push(
    new Pizza(
      "Eggcellent",
      "Egg, Olive, Bell Pepper, Onion",
      "Red Sauce",
      "Mozzerela, Parmesian",
      "17.69",
      "eggcellent.jpg"
    )
  );
  pizzas.push(
    new Pizza(
      "Everything Needed",
      "Pepperoni, Jalapenos, Corn, Sausage, Mushrooms, Dill Pickles",
      "Red Sauce",
      "Mozzerela",
      "20.55",
      "everything.jpg"
    )
  );

  for (let i in pizzas) {
    pizzas[i].item.classList.add("tile");
    pizzaArray.append(pizzas[i].item);
  }
};

window.onload = () => createArray();
