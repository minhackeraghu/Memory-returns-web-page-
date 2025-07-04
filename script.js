// Redirect button click event
document.getElementById('redirect-button').addEventListener('click', function() {
    window.location.href = 'yourpage.html'; // Redirect to a specific page
});

// Toggle menu function using Hamburger Button
function toggleMenu(event) {
    event.stopPropagation(); // Prevents immediate close when clicking button

    let menu = document.getElementById("menu-bar");
    let isOpen = menu.style.left === "0px";

    // Toggle the menu position
    menu.style.left = isOpen ? "-100%" : "0px";

    // Add or remove event listener based on menu state
    if (!isOpen) {
        setTimeout(() => document.addEventListener("click", closeMenuOutside), 100);
    } else {
        document.removeEventListener("click", closeMenuOutside);
    }
}

// Close menu when clicking outside
function closeMenuOutside(event) {
    let menu = document.getElementById("menu-bar");
    let hamburgerButton = document.querySelector(".hamburger-menu");

    // If the clicked target is NOT inside the menu or the hamburger button, close the menu
    if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        menu.style.left = "-100%";
        document.removeEventListener("click", closeMenuOutside);
    }
}

// Attach event listener to hamburger button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);
});
