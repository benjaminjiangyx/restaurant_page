import AmericanoImage from "./americano.jpeg";

function loadHomePage() {
  const content = document.querySelector("#content");

  // Clear any existing content
  content.innerHTML = "";

  // Create heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Starducks";
  content.appendChild(heading);

  // Create description paragraph
  const description = document.createElement("p");
  description.textContent =
    "Experience the finest flavors with our carefully crafted coffees.";
  content.appendChild(description);

  // Create image
  const image = document.createElement("img");
  image.src = AmericanoImage;
  image.alt = "Americano coffee";
  image.width = 300;
  image.height = 300;
  content.appendChild(image);
}

export default loadHomePage;
