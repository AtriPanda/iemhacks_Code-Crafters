// Previous code for login and signup

document.addEventListener("DOMContentLoaded", function() {
  const logoutButton = document.getElementById("logout");
  const uploadButton = document.getElementById("upload");
  const tracksList = document.getElementById("tracks");

  // Simulated user session
  let currentUser = "user"; // Change this based on authentication
  
  // Logout functionality
  logoutButton.addEventListener("click", function() {
    currentUser = null;
    window.location.href = "index.html";
  });

  // Upload functionality
  uploadButton.addEventListener("click", function() {
    const trackName = document.getElementById("track-name").value;
    const audioFile = document.getElementById("audio-file").files[0];

    if (trackName && audioFile) {
      // Simulate saving track to server and displaying it on the page
      const trackItem = document.createElement("li");
      trackItem.innerHTML = `<strong>${trackName}</strong> - <audio controls><source src="${URL.createObjectURL(audioFile)}" type="audio/mpeg"></audio>`;
      tracksList.appendChild(trackItem);
    }
  });
});
