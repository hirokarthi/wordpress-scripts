# wordpress-scripts
Custom Scripts For some customised funtions!


# Accordion Animation with Auto Expand

This project implements an animated accordion with automatic opening and closing of accordion items in sequence, and manual control to override the auto-expand feature when a user interacts.

## Features

- **Auto Expand**: Accordions automatically expand and collapse sequentially every 5 seconds.
- **User Interaction**: When a user clicks on an accordion header, the automatic function is disabled, and the clicked accordion opens while closing the others.
- **Initial State**: The first accordion item is opened by default on page load.

## Files

- `index.html`: The HTML file containing the accordion structure.
- `style.css`: CSS file to style the accordion components.
- `accordion.js`: JavaScript file containing the accordion functionality.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/accordion-animation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd accordion-animation
    ```

3. Open `index.html` in your web browser to view the accordion animation.

## Usage

1. The accordion items will auto-expand and collapse every 5 seconds in sequence.
2. When the user clicks on an accordion header, the automatic expanding stops, and the clicked accordion content is displayed.
3. The first accordion is automatically opened when the page is loaded.

### Accordion HTML Structure

Each accordion section has the following structure:

```html
<div class="main-accordion">
  <div class="accordion-head">Accordion Header 1</div>
  <div class="accordion-cont">Accordion Content 1</div>
</div>

