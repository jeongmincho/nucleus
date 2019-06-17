import importedArray from "./exercises.js";
const exerciseArray = importedArray.array;

const routinesContainer = document.getElementById("routines-container");
const routineContainer = document.getElementById("routine-container");
const routineHeader = document.getElementById("routine-header");
const routineContent = document.getElementById("routine-content");
const welcome = document.getElementById("routine-content-welcome");
const logo = document.getElementById("logo");
let currentEditExercise = "";

// NAVBAR BUTTONS

const about = document.getElementById("navbar-option-about");
const home = document.getElementById("navbar-option-home");
const blog = document.getElementById("navbar-option-blog");
const why = document.getElementById("navbar-option-why");
const contact = document.getElementById("navbar-option-contact");
let currentPage = "home";

about.addEventListener("click", function() {
  if (currentPage == "about") {
    renderHome();
    currentPage = "home";
    console.log("rendering home page", currentPage);
  } else {
    currentPage = "about";
    console.log("rendering about page", currentPage);
    renderAbout();
  }
});

blog.addEventListener("click", function() {
  if (currentPage == "blog") {
    renderHome();
    currentPage = "home";
    console.log("rendering home page", currentPage);
  } else {
    currentPage = "blog";
    console.log("rendering blog page", currentPage);
    renderBlog();
  }
});

why.addEventListener("click", function() {
  if (currentPage == "why") {
    renderHome();
    currentPage = "home";
    console.log("rendering home page", currentPage);
  } else {
    currentPage = "why";
    console.log("rendering why page", currentPage);
    renderWhy();
  }
});

contact.addEventListener("click", function() {
  if (currentPage == "contact") {
    renderHome();
    currentPage = "home";
    console.log("rendering home page", currentPage);
  } else {
    currentPage = "contact";
    console.log("rendering contact page", currentPage);
    renderContact();
  }
});

logo.addEventListener("click", function() {
  currentPage = "home";
  console.log("rendering home page", currentPage);
  renderHome();
});

home.addEventListener("click", function() {
  currentPage = "home";
  console.log("rendering home page", currentPage);
  renderHome();
});

function renderHome() {
  clearRoutine();
  clearRoutineOption();
  const currentClass = routineContainer.classList.item(0);
  if (currentClass !== "other") routineContainer.classList.remove(currentClass);
  welcome.classList.remove("inactive");
  previousDay = "";
  routinesContainer.classList.remove("inactive");
  routineContainer.classList.remove("other");
  routineHeader.innerText =
    "WELCOME TO NUCLEUS, YOUR PERSONAL FITNESS ROUTINE TRACKER!";
  welcome.innerText = "We're so glad to have you here today :)";
}

function renderAbout() {
  clearRoutine();
  const currentClass = routineContainer.classList.item(0);
  if (currentClass !== "other") routineContainer.classList.remove(currentClass);
  welcome.classList.remove("inactive");
  routinesContainer.classList.add("inactive");
  routineContainer.classList.add("other");
  routineHeader.innerText = "WHAT DO YOU WANT TO KNOW ABOUT US?";
  welcome.innerText =
    "Just know, making this website took a lot of blood, sweat, and bugs ;)";
}

function renderBlog() {
  clearRoutine();
  const currentClass = routineContainer.classList.item(0);
  if (currentClass !== "other") routineContainer.classList.remove(currentClass);
  welcome.classList.remove("inactive");
  routinesContainer.classList.add("inactive");
  routineContainer.classList.add("other");
  routineHeader.innerText =
    "DO YOU THINK I HAD THE TIME TO BLOG WHILE MAKING THIS?";
  welcome.innerText = "No way, Jose!";
}

function renderWhy() {
  clearRoutine();
  const currentClass = routineContainer.classList.item(0);
  if (currentClass !== "other") routineContainer.classList.remove(currentClass);
  welcome.classList.remove("inactive");
  routinesContainer.classList.add("inactive");
  routineContainer.classList.add("other");
  routineHeader.innerText = "WHY IS IT CALLED NUCLEUS? GOOD QUESTION!";
  welcome.innerText =
    "The word sounds super cool and like a rogue startup. Doesn't it?";
}

function renderContact() {
  clearRoutine();
  const currentClass = routineContainer.classList.item(0);
  if (currentClass !== "other") routineContainer.classList.remove(currentClass);
  welcome.classList.remove("inactive");
  routinesContainer.classList.add("inactive");
  routineContainer.classList.add("other");
  routineHeader.innerText = "IF YOU WOULD LIKE TO REACH ME, JUST SLACK ME!";
  welcome.innerText =
    "I'm happy to run you through my code! It's probably full of bugballs though...";
}

//  ADD BUTTON FOOTER VISIBILITY TRANSITIONS

const footer = document.getElementById("new-exercise-container");
const footerShadow = document.getElementById("new-exercise-backdrop");
const btn = document.getElementById("addExerciseButton");
const span = document.getElementsByClassName("close")[0];
const newExerciseSaveBtn = document.getElementById("new-exercise-save");
const newExerciseSaveEditBtn = document.getElementById("new-exercise-saveEdit");

btn.onclick = function() {
  resetForm();
  footer.classList.add("active");
  footerShadow.classList.add("active");
};

span.onclick = function() {
  footer.classList.remove("active");
  footerShadow.classList.remove("active");
  resetForm();
};

window.onclick = function(event) {
  if (event.target == footerShadow) {
    footer.classList.remove("active");
    footerShadow.classList.remove("active");
    resetForm();
  }
};

// ROUTINE FUNCTIONALITY

function createExerciseComponent(exercise) {
  //create <div id="exercise-container">
  const exerciseContainer = document.createElement("div");
  exerciseContainer.classList.add("exercise-container");
  exerciseContainer.classList.add(exercise.day);
  //create and append <div id="exercise-content-left">
  const exerciseContentLeft = document.createElement("div");
  exerciseContentLeft.classList.add("exercise-content-left");
  exerciseContainer.appendChild(exerciseContentLeft);
  //create and append <div id="exercise-header">
  const exerciseHeader = document.createElement("div");
  exerciseHeader.classList.add("exercise-header");
  exerciseHeader.innerText = `${exercise.name} (${exercise.reps} REPS)`;
  exerciseContentLeft.appendChild(exerciseHeader);
  //create and append <div id="exercise-target">
  const exerciseTarget = document.createElement("div");
  exerciseTarget.classList.add("exercise-target");
  exerciseTarget.innerText = `TARGET PARTS: ${exercise.parts}`;
  exerciseContentLeft.appendChild(exerciseTarget);
  //create and append <div id="exercise-content-right">
  const exerciseContentRight = document.createElement("div");
  exerciseContentRight.classList.add("exercise-content-right");
  exerciseContainer.appendChild(exerciseContentRight);
  //create and append <div class="exercise-content-right-container">
  const exerciseContentRightContainer = document.createElement("div");
  exerciseContentRightContainer.classList.add(
    "exercise-content-right-container"
  );
  exerciseContentRight.appendChild(exerciseContentRightContainer);
  //create and append <div id="exercise-sets">
  const exerciseSets = document.createElement("div");
  exerciseSets.classList.add("exercise-sets");
  exerciseSets.innerText = `${exercise.count}/${exercise.sets}`;
  exerciseContentRightContainer.appendChild(exerciseSets);
  //create and append <div id="exercise-duration">
  const exerciseDuration = document.createElement("div");
  exerciseDuration.classList.add("exercise-duration");
  exerciseDuration.innerText = `Estimated Time: ${exercise.time} minutes`;
  exerciseContentRightContainer.appendChild(exerciseDuration);
  //create and append <div class="exercise-content-button-container">
  const exerciseContentButtonContainer = document.createElement("div");
  exerciseContentButtonContainer.classList.add(
    "exercise-content-button-container"
  );
  exerciseContentRight.appendChild(exerciseContentButtonContainer);
  //create and append <button class="exercise-edit-button">
  const editButton = document.createElement("button");
  editButton.classList.add("exercise-edit-button");
  editButton.addEventListener("click", function(event) {
    editExercise(exercise);
  });
  exerciseContentButtonContainer.appendChild(editButton);
  //create and append <button class="exercise-delete-button">
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("exercise-delete-button");
  deleteButton.addEventListener("click", function(event) {
    deleteExercise(exercise);
  });
  exerciseContentButtonContainer.appendChild(deleteButton);
  return exerciseContainer;
}

function editExercise(exercise) {
  document.querySelector("#new-exercise-header h3").innerText = "EDIT EXERCISE";
  document.getElementById("new-exercise-nameInput").value = exercise.name;
  document.getElementById("new-exercise-time").value = exercise.time;
  document.getElementById("new-exercise-repsInput").value = exercise.reps;
  document.getElementById("new-exercise-setsInput").value = exercise.sets;
  document.getElementById("new-exercise-partsInput").value = exercise.parts;
  document.getElementById("new-exercise-errormsg").innerText = "";
  newDay = exercise.day;
  buttonObjList.forEach(elem => {
    if (elem.id === exercise.day) elem.classList.add("active");
  });
  document.getElementById("new-exercise-saveEdit").classList.remove("inactive");
  document.getElementById("new-exercise-save").classList.add("inactive");
  footer.classList.add("active");
  footerShadow.classList.add("active");
  currentEditExercise = exercise;
}

function deleteExercise(exercise) {
  console.dir(exerciseArray);
  exerciseArray.forEach((elem, index) => {
    if (exercise === elem) exerciseArray.splice(index, 1);
  });
  console.dir(exerciseArray);
  clearRoutine();
  renderRoutine(exercise.day);
}

let previousDay = "";

routinesContainer.addEventListener("click", function(event) {
  if (event.target.id.includes("day")) {
    const dayOfWeek = event.target.id; //monday
    const routinesList = document.querySelectorAll(".routine-option"); //get all option objects of routines
    const routine = document.querySelector(`#${dayOfWeek}`); //get the routine with the monday ID
    renderRoutineBorderLeft(dayOfWeek);
    //style routine with active class
    routinesList.forEach(elem => {
      // console.log("style routine with active class");
      if (elem === routine) {
        elem.classList.toggle("active");
      } else {
        elem.classList.remove("active");
      }
    });
    // console.log("right before clear routine");
    clearRoutine();
    //render day-related exercises
    // console.log("right before render routine");
    console.log("reaches here point 1");
    console.log(previousDay);
    if (previousDay !== dayOfWeek) {
      console.log("reaches here");
      renderRoutine(dayOfWeek);
      previousDay = dayOfWeek;
    } else {
      previousDay = "";
    }
  }
});

function renderRoutineBorderLeft(day) {
  routineContainer.classList.toggle(day);
  [...routineContainer.classList].forEach(elem => {
    if (elem !== day) {
      routineContainer.classList.remove(elem);
    }
  });
}

function clearRoutineOption() {
  const routinesList = document.querySelectorAll(".routine-option");
  routinesList.forEach(elem => {
    elem.classList.remove("active");
  });
}

function renderRoutineOption(day) {
  const routinesList = document.querySelectorAll(".routine-option");
  routinesList.forEach(elem => {
    // console.log("style routine with active class");
    if (elem.id === day) {
      elem.classList.toggle("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

function clearRoutine() {
  // console.log("clear routine");
  // console.dir(routineContainer);
  // console.dir(welcome);
  welcome.innerText = "";
  welcome.classList.add("inactive");
  routineHeader.innerText = "";
  // console.log(exerciseArray.length);
  const counterMax = routineContent.children.length;
  // let counterIndex = 0;
  // let routineChildIndex = 0;
  for (let i = 0; i < counterMax; i++) {
    const currentChild = routineContent.children[0];
    // console.dir(currentChild);
    routineContent.removeChild(currentChild);
  }
  // LEARN FROM THIS MISTAKE
  // while (counterIndex < counterMax) {
  //   console.log("in the clear routine loop");
  //   console.log(routineChildIndex, counterIndex, counterMax);
  //   console.dir(routineContent);
  //   const currentChild = routineContent.children[routineChildIndex];
  //   console.dir(currentChild);
  //   if (!currentChild.className.includes(day)) {
  //     routineContent.removeChild(currentChild);
  //   } else {
  //     routineChildIndex++;
  //   }
  //   counterIndex++;
  // }
  // console.dir(routineContent);
}

function renderRoutine(day) {
  console.log("render routine");
  const renderArray = [];
  exerciseArray.forEach(exercise => {
    if (exercise.day === day) {
      renderArray.push(exercise);
    }
  });
  renderArray.forEach(elem => {
    routineContent.appendChild(createExerciseComponent(elem));
  });
  routineHeader.innerText = `${day.toUpperCase()} WORKOUT ROUTINE`;
  // console.log(routineContainer);
  routineContainer.prepend(routineHeader);
  routineContainer.appendChild(routineContent);
}

class Exercise {
  constructor(day, name, time, reps, sets, parts) {
    this.day = day;
    this.name = name;
    this.time = time;
    this.reps = reps;
    this.sets = sets;
    this.parts = parts;
    this.count = 0;
    this.completed = false;
  }
}

const buttonList = document.getElementById("new-exercise-dayButtons");
const buttonObjList = document.querySelectorAll(
  "#new-exercise-dayButtons button"
);

let newDay = "";

buttonList.addEventListener("click", function(event) {
  if (newDay === event.target.id) {
    newDay = "";
  } else {
    newDay = event.target.id;
  }
  console.log(newDay);
  event.target.classList.toggle("active");
  buttonObjList.forEach(elem => {
    if (elem.id !== newDay) elem.classList.remove("active");
  });
});

newExerciseSaveEditBtn.addEventListener("click", function() {
  console.dir(currentEditExercise);
  const errorMsg = document.getElementById("new-exercise-errormsg");
  const name = document
    .getElementById("new-exercise-nameInput")
    .value.toUpperCase();
  const time = document.getElementById("new-exercise-time").value;
  const day = newDay;
  const reps = document.getElementById("new-exercise-repsInput").value;
  const sets = document.getElementById("new-exercise-setsInput").value;
  const target = document
    .getElementById("new-exercise-partsInput")
    .value.toUpperCase();
  if (name === "") {
    errorMsg.innerText = "You must specify the name of your exercise!";
  } else if (time === "") {
    errorMsg.innerText = "You must specify the duration of your exercise!";
  } else if (reps === "")
    errorMsg.innerText =
      "You must specify the number of repetitions in your exercise!";
  else if (sets === "")
    errorMsg.innerText =
      "You must specify the number of sets in your exercise!";
  else if (!newDay.includes("day"))
    errorMsg.innerText = "You must specify the day of your exercise!";
  else if (target === "")
    errorMsg.innerText = "You must specify the target parts of your  exercise!";
  else {
    currentEditExercise.name = name;
    currentEditExercise.time = time;
    currentEditExercise.reps = reps;
    currentEditExercise.sets = sets;
    currentEditExercise.parts = target;
    currentEditExercise.day = day;
    clearRoutine();
    renderRoutine(day);
    resetForm();
    renderRoutineOption(day);
    renderRoutineBorderLeft(day);
    footer.classList.remove("active");
    footerShadow.classList.remove("active");
  }
});
newExerciseSaveBtn.addEventListener("click", function() {
  const errorMsg = document.getElementById("new-exercise-errormsg");
  const name = document
    .getElementById("new-exercise-nameInput")
    .value.toUpperCase();
  const time = document.getElementById("new-exercise-time").value;
  const day = newDay;
  const reps = document.getElementById("new-exercise-repsInput").value;
  const sets = document.getElementById("new-exercise-setsInput").value;
  const target = document
    .getElementById("new-exercise-partsInput")
    .value.toUpperCase();
  if (name === "") {
    errorMsg.innerText = "You must specify the name of your new exercise!";
  } else if (time === "") {
    errorMsg.innerText = "You must specify the duration of your new exercise!";
  } else if (reps === "")
    errorMsg.innerText =
      "You must specify the number of repetitions in your new exercise!";
  else if (sets === "")
    errorMsg.innerText =
      "You must specify the number of sets in your new exercise!";
  else if (!newDay.includes("day"))
    errorMsg.innerText = "You must specify the day of your new exercise!";
  else if (target === "")
    errorMsg.innerText =
      "You must specify the target parts of your new exercise!";
  else {
    const newExercise = new Exercise(day, name, time, reps, sets, target);
    console.log(reps, sets);
    exerciseArray.push(newExercise);
    clearRoutine();
    renderRoutine(day);
    resetForm();
    renderRoutineOption(day);
    renderRoutineBorderLeft(day);
    footer.classList.remove("active");
    footerShadow.classList.remove("active");
  }
});

function resetForm() {
  document.querySelector("#new-exercise-header h3").innerText =
    "ADD A NEW EXERCISE!";
  document.getElementById("new-exercise-nameInput").value = "";
  document.getElementById("new-exercise-time").value = "";
  document.getElementById("new-exercise-repsInput").value = "";
  document.getElementById("new-exercise-setsInput").value = "";
  document.getElementById("new-exercise-partsInput").value = "";
  document.getElementById("new-exercise-errormsg").innerText = "";
  buttonObjList.forEach(elem => {
    elem.classList.remove("active");
  });
  document.getElementById("new-exercise-saveEdit").classList.add("inactive");
  document.getElementById("new-exercise-save").classList.remove("inactive");
}
