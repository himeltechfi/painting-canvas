/*
 * JavaScript: The project's core logic.
 * This code makes the application interactive and controls its behavior.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get references to all HTML elements we need to interact with
    const canvas = document.getElementById('cw1Canvas');
    const ctx = canvas.getContext('2d');
    const colorTools = document.querySelectorAll('.color-tool');
    const brushSizeTools = document.querySelectorAll('.brush-size-btn');
    const clearBtn = document.getElementById('clear-canvas-btn');
    const clearWhiteBtn = document.getElementById('clear-white-btn');
    const modeDisplay = document.getElementById('mode-display');
    const colorPreview = document.getElementById('current-color-preview');
    const blendColourBox = document.getElementById('blendColour');
    const redSlider = document.getElementById('redValue');
    const greenSlider = document.getElementById('greenValue');
    const blueSlider = document.getElementById('blueValue');

    // Variables to store the current state of our tools
    let currentFillColor = '#0000ff';
    let currentBrushSize = 10;

    // Set the initial canvas size
    canvas.width = 1000;
    canvas.height = 800;

    // Function to draw or erase on the canvas
    function paint(x, y, size, isErasing) {
        // Determines the fill color based on whether we are erasing or painting
        ctx.fillStyle = isErasing ? getComputedStyle(canvas).backgroundColor : currentFillColor;
        const halfSize = size / 2;
        // Draws a filled rectangle at the mouse's position
        ctx.fillRect(x - halfSize, y - halfSize, size, size);
    }

    // Event listener for mouse movement over the canvas
    canvas.addEventListener('mousemove', (e) => {
        // Get the canvas's position on the screen to calculate accurate mouse coordinates
        const canvasRect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - canvasRect.left;
        const mouseY = e.clientY - canvasRect.top;

        if (e.buttons === 1) { // Check if the left mouse button is pressed
            if (e.shiftKey) { // Check if the Shift key is also pressed
                modeDisplay.textContent = 'ERASE MODE';
                paint(mouseX, mouseY, currentBrushSize, true); // Call paint function with erase set to true
            } else {
                modeDisplay.textContent = 'PAINTING MODE';
                paint(mouseX, mouseY, currentBrushSize, false); // Call paint function normally
            }
        } else {
            modeDisplay.textContent = 'IDLE'; // Display a message when no drawing is happening
        }
    });

    // Event listener for color selection buttons
    colorTools.forEach(tool => {
        tool.addEventListener('click', (e) => {
            // Remove 'active' class from all color tools
            colorTools.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked tool
            e.target.classList.add('active');
            // Update the current fill color and the preview box
            currentFillColor = e.target.style.backgroundColor;
            colorPreview.style.backgroundColor = currentFillColor;
        });
    });

    // Event listener for brush size selection buttons
    brushSizeTools.forEach(tool => {
        tool.addEventListener('click', (e) => {
            // Remove 'active' class from all brush size buttons
            brushSizeTools.forEach(t => t.classList.remove('active'));
            // Add 'active' class to the clicked button
            e.target.classList.add('active');
            // Update the current brush size from the data attribute
            currentBrushSize = parseInt(e.target.dataset.size);
            // Update the size of the preview box to match the brush size
            colorPreview.style.width = `${currentBrushSize}px`;
            colorPreview.style.height = `${currentBrushSize}px`;
        });
    });

    // Event listener for clearing the canvas with the selected color
    clearBtn.addEventListener('click', () => {
        // Sets the canvas background to the current fill color
        canvas.style.backgroundColor = currentFillColor;
        // Clears the canvas drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Event listener for clearing the canvas to white
    clearWhiteBtn.addEventListener('click', () => {
        // Sets the canvas background to a solid white color
        canvas.style.backgroundColor = '#ffffff';
        // Clears the canvas drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Function to update the blended color preview
    function updateBlendedColor() {
        // Get the values from the color sliders
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;
        // Create an RGB string and update the blender preview box
        const blendedColor = `rgb(${r}, ${g}, ${b})`;
        blendColourBox.style.backgroundColor = blendedColor;
    }

    // Attach listeners to the sliders to call the update function whenever their value changes
    redSlider.addEventListener('input', updateBlendedColor);
    greenSlider.addEventListener('input', updateBlendedColor);
    blueSlider.addEventListener('input', updateBlendedColor);
    updateBlendedColor(); // Initial call to set the color of the blender box on page load

    // Event listener for selecting the blended color as the main color
    blendColourBox.addEventListener('click', (e) => {
        // Remove the 'active' class from all other color tools
        colorTools.forEach(t => t.classList.remove('active'));
        // Update the main fill color and the color preview box
        currentFillColor = e.target.style.backgroundColor;
        colorPreview.style.backgroundColor = currentFillColor;
    });
});