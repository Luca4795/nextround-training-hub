const exercisesFilter = document.getElementById("exercises-filter");
const exercisesContainer = document.getElementById("exercises-container");
const exercises = [
  {
    name: "Heavy Bag Rounds",
    category: "boxing",
    difficulty: "High",
    duration: 30,
    video: "assets/videos/heavy-bag.mp4",
    description: "Practice combinations, footwork and conditioning on the heavy bag.",
  },
  {
    name: "Shadow Boxing",
    category: "boxing",
    difficulty: "Low",
    duration: 10,
    video: "assets/videos/shadow-boxing.mp4",
    description: "Practice technique, rhythm, defense and footwork without equipment.",
  },
  {
    name: "Push-ups",
    category: "strength",
    difficulty: "Medium",
    duration: 15,
    video: "assets/videos/push-ups.mp4",
    description: "Build upper-body strength and muscular endurance for punching power.",
  },
  {
    name: "Squats",
    category: "strength",
    difficulty: "Medium",
    duration: 15,
    video: "assets/videos/squats.mp4",
    description: "Train leg strength, stability and lower-body power for boxing movement.",
  },
  {
    name: "Jump Rope",
    category: "cardio",
    difficulty: "Medium",
    duration: 30,
    video: "assets/videos/jump-rope.mp4",
    description: "Improve coordination, footwork, rhythm and cardiovascular conditioning.",
  },
  {
    name: "Running Intervals",
    category: "cardio",
    difficulty: "High",
    duration: 30,
    video: "assets/videos/running-intervals.mp4",
    description: "Alternate high-intensity running with recovery periods to improve conditioning.",
  },
  {
    name: "Mobility Flow",
    category: "recovery",
    difficulty: "Low",
    duration: 15,
    video: "assets/videos/mobility-flow.mp4",
    description: "Use controlled mobility drills to improve recovery, range of motion and movement quality.",
  },
  {
    name: "Breathing Drill",
    category: "recovery",
    difficulty: "Low",
    duration: 5,
    video: "assets/videos/breathing-drill.mp4",
    description: "Practice slow breathing to support recovery, focus and nervous system control.",
  },
];

function renderExercises() {
  exercisesContainer.innerHTML = "";

  const selectCategory = exercisesFilter.value;

  for (let i = 0; i < exercises.length; i++) {
    if (selectCategory !== "all" && exercises[i].category !== selectCategory) {
      continue;
    }

    const card = document.createElement("article");
    const nameExercise = document.createElement("h3");

    const videoExercise = document.createElement("video");
    videoExercise.src = exercises[i].video;
    videoExercise.controls = true;
    videoExercise.classList.add("exercise-video");

    const categoryExercise = document.createElement("p");
    const difficultyExercise = document.createElement("p");
    const durationExercise = document.createElement("p");
    const descriptionExercise = document.createElement("p");
    const detailsButton = document.createElement("button");
    nameExercise.textContent = exercises[i].name;

    categoryExercise.textContent = "Category: " + exercises[i].category;
    difficultyExercise.textContent = "Difficulty: " + exercises[i].difficulty;
    durationExercise.textContent = "Duration: " + exercises[i].duration + " minutes";
    descriptionExercise.textContent = "Description: " + exercises[i].description;
    descriptionExercise.style.display = "none";

    detailsButton.textContent = "Show details";

    detailsButton.addEventListener("click", function () {
      if (descriptionExercise.style.display === "none") {
        descriptionExercise.style.display = "block";
        detailsButton.textContent = "Hide details";
      } else {
        descriptionExercise.style.display = "none";
        detailsButton.textContent = "Show details";
      }
    });

    card.classList.add("exercise-card");

    card.appendChild(nameExercise);
    card.appendChild(videoExercise);
    card.appendChild(categoryExercise);
    card.appendChild(difficultyExercise);
    card.appendChild(durationExercise);
    card.appendChild(detailsButton);
    card.appendChild(descriptionExercise);

    exercisesContainer.appendChild(card);
  }
}

renderExercises();

exercisesFilter.addEventListener("change", function () {
  renderExercises();
});
