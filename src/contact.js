import AmericanoImage from "./americano.jpeg";

function loadContact() {
  const content = document.querySelector("#content");

  // Clear any existing content
  content.innerHTML = "";

  // Create heading
  const heading = document.createElement("h1");
  heading.textContent = "CONTACT";
  content.appendChild(heading);

  // Create description paragraph
  const owners = document.createElement("h2");
  owners.textContent = "Our Owners";
  content.appendChild(owners);

  const ownerList = document.createElement("ul");
  owners.appendChild(ownerList);

  const li1 = document.createElement("li");
  li1.textContent = "John Doe";
  ownerList.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = "Jane Doe";
  ownerList.appendChild(li2);

  // Create image
  const image = document.createElement("img");
  image.src = AmericanoImage;
  image.alt = "Americano coffee";
  image.width = 500;
  image.height = 500;
  content.appendChild(image);
}

export default loadContact;
