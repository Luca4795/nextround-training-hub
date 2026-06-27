const welcomeMessage = document.getElementById("welcome-message");
const loginLink = document.getElementById("login-link");
const logoutButton = document.getElementById("logout-button");

const isLoggedIn = localStorage.getItem("isLoggedIn");
const userEmail = localStorage.getItem("userEmail");

if (isLoggedIn === "true") {
  welcomeMessage.textContent = "Welcome back, " + userEmail + ".";
  loginLink.style.display = "none";
  logoutButton.style.display = "inline-block";
} else {
  loginLink.style.display = "inline-block";
  logoutButton.style.display = "none";
  welcomeMessage.textContent = "You are not logged in. Please login first.";
}

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  logoutButton.style.display = "none";
  loginLink.style.display = "inline-block";

  welcomeMessage.textContent = "You are not logged in. Please login first.";
});

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function () {
  loadQuote();
});

async function loadQuote() {
  quoteText.textContent = "Loading quote...";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote.");
    }
    const data = await response.json();

    quoteText.textContent = '"' + data.quote + '"';
    quoteAuthor.textContent = "- " + data.author;
  } catch (error) {
    quoteText.textContent = "Unable to load quote. Please try again later.";
    quoteAuthor.textContent = "";
  }
}
