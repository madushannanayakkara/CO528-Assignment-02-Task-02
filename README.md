# CO528-Assignment-02-Task-02 (Angle Selector using React)

This is a React-based angle selector that allows users to select an angle between 0 and 360 degrees. The angle can be chosen using a text box, slider, or radio buttons, with all elements staying in sync.

## Features

1. **Text Box**: Users can type any numeric value between 0 and 360.
2. **Slider**: A slider that adjusts the angle value and syncs with the text box and radio buttons.
3. **Radio Buttons**: Predefined radio buttons for common angles (0, 45, 60, 90, 180).
4. **Synchronization**: The text box, slider, and radio buttons stay in sync with each other.

## How It Works

- The **text box** accepts any value between 0 and 360. If the value matches one of the radio button values, the radio button is selected, and the slider is updated.
- The **slider** allows the user to adjust the angle between 0 and 360. This will update the text box and select the matching radio button (if any).
- **Radio buttons** are provided for common angles and are synchronized with the text box and slider.

## Live Demo

Check out the live demo of the React angle selector at the following URL:

[React Angle Selector Demo](https://your-hosted-url.com)

## Project Structure

- `src/App.js`: The main component where the angle selector logic is implemented.
- `src/App.css`: The CSS file for styling the angle selector.
- `src/index.js`: The entry point of the React application.
