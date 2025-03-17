// script.js

document.addEventListener('mousemove', (event) => {
    const circle = document.getElementById('circle');
    const mouseX = event.clientX; // Get the X coordinate of the mouse
    const mouseY = event.clientY; // Get the Y coordinate of the mouse

    // Update the position of the circle
    circle.style.left = `${mouseX - circle.offsetWidth / 2}px`; // Center the circle on the cursor
    circle.style.top = `${mouseY - circle.offsetHeight / 2}px`; // Center the circle on the cursor
});
