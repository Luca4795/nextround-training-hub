const feedbackForm = document.getElementById("feedback-form");
const feedbackName = document.getElementById("feedback-name");
const feedbackEmail = document.getElementById("feedback-email");
const feedbackMessageInput = document.getElementById("feedback-message-input");
const feedbackMessage = document.getElementById("feedback-message");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = feedbackName.value.trim();
  const email = feedbackEmail.value.trim();
  const messageInput = feedbackMessageInput.value.trim();

  if (name === "" || email === "" || messageInput === "") {
    feedbackMessage.innerText = "Please fill in all required fields.";
    return;
  }

  feedbackMessage.innerText = "Feedback sent successfully.";
  feedbackForm.reset();
});
