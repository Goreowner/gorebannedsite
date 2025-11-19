const activityContainer = document.getElementById("activityContainer");

function openActivity(activity) {
  const modal = document.getElementById("activityModal");
  modal.style.display = "flex";
  activityContainer.innerHTML = "";

  if (activity === "memoryChallenge") {
    activityContainer.innerHTML = "<p>Memory Challenge activity will appear here.</p>";
  } else if (activity === "colorMatch") {
    activityContainer.innerHTML = "<p>Color Match activity will appear here.</p>";
  } else if (activity === "brainBreak") {
    activityContainer.innerHTML = "<p>Brain Break activity will appear here.</p>";
  } else {
    activityContainer.innerHTML = "<p>Activity not available yet.</p>";
  }
}

function closeModal() {
  document.getElementById("activityModal").style.display = "none";
  activityContainer.innerHTML = "Select an activity to play.";
}

window.onclick = function(event) {
  const modal = document.getElementById("activityModal");
  if (event.target === modal) closeModal();
}

