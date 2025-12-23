import AmericanoImage from "./americano.jpeg";

function loadMenu() {
  const content = document.querySelector("#content");

  // Clear any existing content
  content.innerHTML = "";

  // Create heading
  const heading = document.createElement("h1");
  heading.textContent = "MENU";
  content.appendChild(heading);

  // Create description paragraph
  const coffee = document.createElement("h2");
  coffee.textContent = "Specialty Coffees";
  content.appendChild(coffee);

  const coffeeList = document.createElement("ul");
  content.appendChild(coffeeList);

  const li1 = document.createElement("li");
  li1.textContent = "Americano - $3.95";
  coffeeList.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = "Cappuccino - $4.25";
  coffeeList.appendChild(li2);
  const li3 = document.createElement("li");
  li3.textContent = "Espresso - $2.95";
  coffeeList.appendChild(li3);
  const li4 = document.createElement("li");
  li4.textContent = "Latte - $4.45";
  coffeeList.appendChild(li4);
  const li5 = document.createElement("li");
  li5.textContent = "Mocha - $4.95";
  coffeeList.appendChild(li5);

  // Example: Using a URL image (just set src to any image URL)
  const urlImage = document.createElement("img");
  urlImage.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500";
  urlImage.alt = "Coffee shop";
  urlImage.style.maxWidth = "500px";
  content.appendChild(urlImage);

  // You can still use local imported images too
  const localImage = document.createElement("img");
  localImage.src = AmericanoImage;
  localImage.alt = "Americano coffee";
  localImage.style.maxWidth = "300px";
  content.appendChild(localImage);
}

export default loadMenu;
