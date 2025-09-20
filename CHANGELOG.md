# Changelog

All notable changes to this project will be documented in this file.

### 2018

* **Oct 15, 2018** - Project initiated. Basic mouse tracking and single-color selection were implemented.
* **Oct 20, 2018** - Expanded the color palette to four colors and fixed their functionality.
* **Oct 31, 2018** - Implemented initial brush size functionality, which required further debugging.
* **Nov 01, 2018** - Added a color blending tool with RGB sliders. Also refined button spacing.
* **Nov 09, 2018** - Implemented a preview function to show the selected color and brush size. Corrected painting position to be centered on the mouse cursor. Brush size controls were fully functional after debugging.
* **Nov 10, 2018** - Added titles to brush size buttons for better user experience. Implemented a feature to clear the canvas to the currently selected color. Added eraser functionality using the Shift key. Refined the color blending tool.

### 2025 (Refactor)

* **September 20, 2025** - Complete refactor of the codebase.
    * Migrated all JavaScript to a single, external script file for better separation of concerns.
    * Replaced inline JavaScript with modern event listeners (`addEventListener`).
    * Restructured CSS for a more maintainable and responsive layout using Flexbox.
    * Added a dedicated "Clear to White" button.
    * Replaced text inputs for RGB values with range sliders for a more user-friendly experience.
    * Updated the overall UI/UX for a cleaner, more professional look.