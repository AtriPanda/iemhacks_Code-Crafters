document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Perform authentication here (e.g., sending data to a server for validation)
    // Simulate successful login for now
    if (username === "user" && password === "password") {
      window.location.href = "collaboration.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  