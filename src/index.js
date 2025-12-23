import "./styles.css";
import loadHomePage from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

console.log("Restaurant page loaded!");

// Get tab buttons
const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const contactTab = document.querySelector("#contact-tab");

// Helper function to set active tab
function setActiveTab(activeButton) {
  // Remove active class from all buttons
  homeTab.classList.remove("active");
  menuTab.classList.remove("active");
  contactTab.classList.remove("active");

  // Add active class to the clicked button
  activeButton.classList.add("active");
}

// Load the home page on initial page load
loadHomePage();
setActiveTab(homeTab);

// Add event listeners to switch pages
homeTab.addEventListener("click", () => {
  loadHomePage();
  setActiveTab(homeTab);
});

menuTab.addEventListener("click", () => {
  loadMenu();
  setActiveTab(menuTab);
});

contactTab.addEventListener("click", () => {
  loadContact();
  setActiveTab(contactTab);
});
