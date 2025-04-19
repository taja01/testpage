"use strict";

// Global functions 
let listItemCount = 0;

function showAlert() { alert("This is a triggered alert from the Main Page!"); }

function extendList() {
    listItemCount++; const list = document.getElementById("dynamicList");
    const newItem = document.createElement("li");
    newItem.innerText = "Dynamic Item " + listItemCount;
    list.appendChild(newItem);
}

function removeLastItem() {
    const list = document.getElementById("dynamicList");
    const items = list.getElementsByTagName("li"); if (items.length > 0) {
        list.removeChild(items[items.length - 1]); listItemCount--;
    }
}

function generateErrorInConsole() { console.error("Generated error: Are you happy?"); }

function validateEnglishInput() {
    const inputField = document.getElementById("englishInput");
    const errorDiv = document.getElementById("validationError");
    const regex = /^[A-Za-z0-9\s.,!?'"]*$/;

    if (!regex.test(inputField.value)) {
        errorDiv.innerText = "Error: Please use only English letters, numbers, and punctuation!";
    } else { errorDiv.innerText = ""; }
}

document.addEventListener("DOMContentLoaded", function () {
    // Set up collapsible sections; first section remains open 
    const sections = document.querySelectorAll(".collapsible-section");
    sections.forEach(function (section, index) {
        const header = section.querySelector(".section-header");
        const content = section.querySelector(".section-content");
        content.style.display = index === 0 ? "block" : "none";
        header.addEventListener("click", function () {
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });

    sections.forEach((section, index) => {
        // You can base the id on the header text or simply use the index. 
        // // Example using index: 
        section.setAttribute("data-testid", "section-" + (index + 1)); // Or, if you want to use the header text (lowercase, no spaces): 
        const headerText = section.querySelector(".section-header").textContent.trim();
        const cleanText = headerText.toLowerCase().replace(/\s+/g, "-");
        section.setAttribute("data-testid", cleanText);
    });

    // File upload functionality 
    const allowedExtensions = ["pdf", "jpg", "jpeg", "png"];
    const disallowedExtensions = ["bat", "exe"];
    const uploadButton = document.getElementById("uploadButton");
    uploadButton.addEventListener("click", function () {
        const fileInput = document.getElementById("fileInput");
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = ""; messageDiv.className = "";
        if (fileInput.files.length === 0) {
            messageDiv.textContent = "Please choose a file first!";
            messageDiv.className = "error"; return;
        }
        const fileName = fileInput.files[0].name;
        const fileExt = fileName.split(".").pop().toLowerCase();

        if (disallowedExtensions.includes(fileExt) || !allowedExtensions.includes(fileExt)) {
            messageDiv.textContent = "Unsupported file type. Only PDF, JPG, JPEG, and PNG files are supported.";
            messageDiv.className = "error";
            fileInput.value = ""; return;
        }
        messageDiv.textContent = "File upload simulated. File: " + fileName;
        messageDiv.className = "success"; fileInput.value = "";
    });

    // Slider functionality 
    const slider = document.getElementById("mySlider");
    const output = document.getElementById("sliderValue");
    output.textContent = slider.value;
    slider.addEventListener("input", function () { output.textContent = this.value; });
});