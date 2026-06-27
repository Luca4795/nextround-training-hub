const workoutForm = document.getElementById("workout-form");
const workoutTitle = document.getElementById("workout-title");
const workoutFilter = document.getElementById("workout-filter");
const workoutCategory = document.getElementById("workout-category");
const workoutDuration = document.getElementById("workout-duration");
const workoutIntensity = document.getElementById("workout-intensity");
const workoutNotes = document.getElementById("workout-notes");
const workoutMessage = document.getElementById("workout-message");
const workoutsContainer = document.getElementById("workouts-container");
const savedWorkouts = localStorage.getItem("workouts");
let workouts = [];
if (savedWorkouts !== null) {
  workouts = JSON.parse(savedWorkouts);
}

workoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = workoutTitle.value.trim();
  const category = workoutCategory.value;
  const duration = workoutDuration.value;
  const intensity = workoutIntensity.value;
  const notes = workoutNotes.value.trim();

  if (title === "" || category === "" || duration === "" || intensity === "") {
    workoutMessage.textContent = "Please fill in all required fields.";
    return;
  }

  workoutMessage.textContent = "Workout added successfully.";

  const workout = {
    title,
    category,
    duration: Number(duration),
    intensity,
    notes,
  };

  workouts.push(workout);
  saveWorkouts();
  renderWorkouts();
  workoutForm.reset();
});

function renderWorkouts() {
  workoutsContainer.innerHTML = "";

  const selectCategory = workoutFilter.value;

  let visibleWorkouts = 0;

  for (let i = 0; i < workouts.length; i++) {
    if (selectCategory !== "all" && workouts[i].category !== selectCategory) {
      continue;
    }

    visibleWorkouts++;

    const card = document.createElement("article");
    const titleElement = document.createElement("h3");
    const categoryElement = document.createElement("p");
    const durationElement = document.createElement("p");
    const intensityElement = document.createElement("p");
    const deleteButton = document.createElement("button");
    titleElement.textContent = workouts[i].title;
    categoryElement.textContent = "Category: " + workouts[i].category;
    durationElement.textContent = "Duration: " + workouts[i].duration + " minutes";
    intensityElement.textContent = "Intensity: " + workouts[i].intensity;

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      workouts.splice(i, 1);
      saveWorkouts();
      renderWorkouts();
    });

    card.classList.add("workout-card");
    card.appendChild(titleElement);
    card.appendChild(categoryElement);
    card.appendChild(durationElement);
    card.appendChild(intensityElement);

    if (workouts[i].notes !== "") {
      const notesElement = document.createElement("p");
      notesElement.textContent = "Notes: " + workouts[i].notes;
      card.appendChild(notesElement);
    }

    card.appendChild(deleteButton);
    workoutsContainer.appendChild(card);
  }

  if (visibleWorkouts === 0) {
    const visibleMessage = document.createElement("p");
    visibleMessage.textContent = "No workouts found.";
    visibleMessage.classList.add("visible-message");
    workoutsContainer.appendChild(visibleMessage);
  }
}

function saveWorkouts() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
}
renderWorkouts();

workoutFilter.addEventListener("change", function () {
  renderWorkouts();
});
