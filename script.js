// Toggle Animation on Button Click
document.getElementById("animateBtn").addEventListener("click", function() {
    let box = document.getElementById("animatedBox");
    box.classList.toggle("animate");
});

// Save User Preferences in Local Storage
document.getElementById("saveBtn").addEventListener("click", function() {
    let preference = document.getElementById("userInput").value;
    localStorage.setItem("userPreference", preference);
    displayPreference();
});

// Retrieve Preference on Page Load
function displayPreference() {
    let storedPreference = localStorage.getItem("userPreference");
    document.getElementById("displayPreference").textContent = storedPreference ? `Saved Preference: ${storedPreference}` : "No preference saved.";
}

// Load stored preferences when page loads
window.onload = displayPreference;