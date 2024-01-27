"use strict";
function calculateRectangular() {
    const widthInput = document.getElementById("rectWidth");
    const heightInput = document.getElementById("rectHeight");
    const resultDiv = document.getElementById("rectResult");
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    if (!isNaN(width) && !isNaN(height)) {
        const area = width * height;
        const perimeter = 2 * (width + height);
        resultDiv.textContent = `Area: ${area}, Perimeter: ${perimeter}`;
    }
    else {
        resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
}
function calculateCylinder() {
    const radiusInput = document.getElementById("cylinderRadius");
    const heightInput = document.getElementById("cylinderHeight");
    const resultDiv = document.getElementById("cylinderResult");
    const radius = parseFloat(radiusInput.value);
    const height = parseFloat(heightInput.value);
    if (!isNaN(radius) && !isNaN(height)) {
        const area = 2 * Math.PI * radius * (radius + height);
        const volume = Math.PI * Math.pow(radius, 2) * height;
        resultDiv.textContent = `Surface Area: ${area.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
    }
    else {
        resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
}
