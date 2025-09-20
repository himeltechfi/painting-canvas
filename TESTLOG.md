# Test Log

This log documents the testing performed on the **Painting Canvas** application to ensure functionality and reliability.

### 2018 (Original Tests)

* **Oct 15, 2018** - **Test:** Verified that the mouse tracking was functional and that a single color could be used for painting. **Result:** Mouse tracking worked partially. Only one of four color buttons was operational.
* **Oct 20, 2018** - **Test:** Confirmed that all four initial color buttons correctly set the painting color. **Result:** All four colors functioned as expected after code changes.
* **Oct 31, 2018** - **Test:** Checked that brush size buttons changed the brush dimensions. **Result:** Functionality was inconsistent and required further fixing.
* **Nov 01, 2018** - **Test:** Verified the color blending tool's functionality. **Result:** The tool was not working as intended.
* **Nov 09, 2018** - **Test:** Ensured that the preview function accurately reflected the selected color and brush size. Also tested the painting position. **Result:** Preview function and painting position were corrected and worked as expected.
* **Nov 10, 2018** - **Test:** Verified the functionality of the eraser tool when the Shift key is held down. Also checked the new "clear canvas" feature. **Result:** Both the eraser and clear canvas functions worked successfully.

### 2025 (Refactor Tests)

* **September 20, 2025** - **Test:** Verified that all HTML elements are correctly linked to the external JavaScript file and that the application initializes properly. **Result:** All elements loaded and functioned correctly.
* **September 20, 2025** - **Test:** Checked that all color buttons, including the new color mixer, correctly update the painting color. **Result:** All color selection methods were successful and the color preview updated correctly.
* **September 20, 2025** - **Test:** Confirmed that brush size buttons change the brush's dimensions and the preview box's size. **Result:** Both functions worked as intended.
* **September 20, 2025** - **Test:** Verified that the "Clear to Selected Color" and "Clear to White" buttons work as specified. **Result:** Both buttons cleared the canvas to their respective colors correctly.
* **September 20, 2025** - **Test:** Ensured the painting and erasing functionality still works with the new event listeners and logic. **Result:** The application successfully drew with a left-click and erased with a Shift + left-click. The mode display text also updated correctly.