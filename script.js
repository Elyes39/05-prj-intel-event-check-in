// Get DOM elements
const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCountSpan = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");
const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");

// Team label map
const teamLabels = {
  water: "Team Water Wise",
  zero: "Team Net Zero",
  power: "Team Renewables",
};

// Counters
let attendeeCount = 0;
let maxAttendees = 50;
let teamCounts = {
  water: 0,
  zero: 0,
  power: 0,
};

// Listen for form submission
checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values from input and dropdown
  const name = attendeeNameInput.value.trim();
  const team = teamSelect.value;

  // Only proceed if both fields are filled
  if (name === "" || team === "") {
    return;
  }

  // Increment total and team counter
  attendeeCount = attendeeCount + 1;
  teamCounts[team] = teamCounts[team] + 1;

  // Calculate percentage of goal completed
  const percent = Math.min((attendeeCount / maxAttendees) * 100, 100);

  // Combine name and team into a welcome message
  const teamLabel = teamLabels[team];
  const message = `Welcome, ${name}! You checked in for ${teamLabel}.`;

  // Show a success message
  greeting.textContent = message;
  greeting.className = "success-message";
  greeting.style.display = "block";

  // Show the updated total count
  attendeeCountSpan.textContent = attendeeCount;

  // Update the width of the progress bar
  progressBar.style.width = `${percent}%`;

  // Update the correct team's count
  if (team === "water") {
    waterCount.textContent = teamCounts.water;
  } else if (team === "zero") {
    zeroCount.textContent = teamCounts.zero;
  } else if (team === "power") {
    powerCount.textContent = teamCounts.power;
  }

  // Reset the form
  checkInForm.reset();
  teamSelect.selectedIndex = 0;
  attendeeNameInput.focus();
});
