const profileForm = document.getElementById("profile-form");
const nameInput = document.getElementById("name-input");
const sportInput = document.getElementById("sport-input");
const levelInput = document.getElementById("level-input");
const goalInput = document.getElementById("goal-input");
const profileMessage = document.getElementById("profile-message");

const profileName = document.getElementById("profile-name");
const profileSport = document.getElementById("profile-sport");
const profileLevel = document.getElementById("profile-level");

const profileGoal = document.getElementById("profile-goal");

const savedProfile = localStorage.getItem("profile");

if (savedProfile !== null) {
  const profileDetails = JSON.parse(savedProfile);
  renderProfile(profileDetails);
  fillProfileForm(profileDetails);
}

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const sport = sportInput.value.trim();
  const level = levelInput.value;
  const goal = goalInput.value.trim();

  if (name === "" || sport === "" || level === "" || goal === "") {
    profileMessage.textContent = "Please fill in all required fields.";
    return;
  }

  const profileDetails = {
    name,
    sport,
    level,
    goal,
  };

  renderProfile(profileDetails);
  saveProfile(profileDetails);

  profileMessage.textContent = "Profile updated successfully.";
});

function renderProfile(profile) {
  profileName.textContent = "Name: " + profile.name;
  profileSport.textContent = "Sport: " + profile.sport;
  profileLevel.textContent = "Level: " + profile.level;
  profileGoal.textContent = "Goal: " + profile.goal;
}

function fillProfileForm(profile) {
  nameInput.value = profile.name;
  sportInput.value = profile.sport;
  levelInput.value = profile.level;
  goalInput.value = profile.goal;
}

function saveProfile(profile) {
  localStorage.setItem("profile", JSON.stringify(profile));
}
