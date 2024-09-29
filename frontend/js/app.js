// app.js

// Simulate user points
let userPoints = 2000; // Example user points for demonstration

// Function to initialize the app
function initApp() {
    console.log("EcoQuest app initialized.");
    updateUserPointsDisplay();
}

// Function to update the user points display
function updateUserPointsDisplay() {
    const pointsDisplay = document.getElementById('user-points');
    if (pointsDisplay) {
        pointsDisplay.textContent = `Your Points: ${userPoints}`;
    }
}

// Function to redeem a product
function redeemProduct(productName, productCost) {
    if (userPoints >= productCost) {
        userPoints -= productCost;
        alert(`You have redeemed: ${productName}`);
        updateUserPointsDisplay();
    } else {
        alert("You do not have enough points to redeem this product.");
    }
}

// Call the function on page load
window.onload = initApp;
