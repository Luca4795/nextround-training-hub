const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    loginMessage.textContent = "Please fill in all fields.";
  } else {
    loginMessage.textContent = "Login successful.";
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
  }
});
