Assignment #6: jQuery (Selectors, Effects, Animations)

Student: Daniyar Abdusadykov

Group: IT-2504

University: Astana IT University

Project Overview

This repository contains my implementation for Assignment #6, focusing on the jQuery library. The goal of this assignment is to demonstrate how jQuery simplifies DOM manipulation, event listening, CSS styling, visual effects, dynamic attributes, and element animations inside a web page layout built with Bootstrap 5.

File Structure

├── index.html          # Main HTML markup with Bootstrap 5 layout
├── style.css           # Custom styles and transition overrides
├── script.js           # Main JavaScript logic using jQuery
├── screenshots/        # Execution screenshots for tasks
└── README.md           # Assignment documentation report
<img width="1869" height="845" alt="image" src="https://github.com/user-attachments/assets/062010cf-8611-46eb-9637-dc669997a555" />
<img width="1700" height="290" alt="image" src="https://github.com/user-attachments/assets/4992ea19-9374-45ef-9ccb-2c0d7c8d30f8" />
<img width="839" height="741" alt="image" src="https://github.com/user-attachments/assets/508927ff-975b-4664-b32d-2974aa57dc67" />
<img width="839" height="750" alt="image" src="https://github.com/user-attachments/assets/2ee16fda-8003-4ccf-ab27-ef0398844fd0" />


Detailed Task Breakdown

Part 1: Getting Started with jQuery

Task 0 (Setup): Included the latest jQuery library (v3.7.1) via CDN in index.html. Initialized the script inside a $(document).ready(function() { ... }) wrapper and confirmed execution with a "jQuery is ready!" console log message.

Task 1 (Selectors & CSS): Styled the portfolio header dynamically. Added a dark theme switcher (#themeToggleBtn) that uses .toggleClass() to update page and card background styles on demand.

Part 2: jQuery Effects

Task 2 (Visibility Methods): Implemented an "About Me" card with a status message. Added three control buttons using .hide(), .show(), and .toggle() to manipulate element visibility.

Task 3 (Fade Methods): Added a photo card displaying visual content. Controlled image opacity and display using .fadeIn(), .fadeOut(), and .fadeToggle() event handlers.

Task 4 (Slide Methods): Created collapsible panels under clickable headings ("My Favorite Music", "My Favorite Movie", "My Favorite Subject"). Attached click listeners to .slide-heading elements to trigger .slideToggle() on adjacent content containers.

Part 3: DOM Manipulation with jQuery

Task 5 (Add & Remove Elements): Built a dynamic skills list. Added input validation to prevent empty submissions (val.trim() !== ""). Enabled adding elements to the bottom via .append(), to the top via .prepend(), and removing the last item via .remove().

Task 6 (Modifying Attributes): Created an anchor element linking to an external profile. Used .attr() and .text() inside a click listener to dynamically switch the link destination and anchor text.

Task 7 (Form Interaction): Added interactive form fields for Name and Email. Attached an input event listener to continuously read form values via .val() and mirror the input live into span containers via .text().

Part 4: Animations

Task 8 (Basic Animation): Constructed technical skill progress bars using Bootstrap progress wrappers. Wrote a toggle script attached to #animateSkillsBtn that reads custom data-width attributes and animates bar widths between 0% and target percentage values using the .animate() method.

Screenshots

Part 1: Setup & Selectors

Part 2: Visibility, Fade & Slide Effects

Part 3: DOM & Form Manipulation

Part 4: Skill Bars Animation

Work Process Summary

Markup & Layout: Set up index.html using a responsive Bootstrap 5 grid, splitting the page into clear task cards.

Library Integration: Linked jQuery via CDN right above script.js before the closing </body> tag to ensure DOM elements load prior to script execution.

Event Binding & DOM Traversal: Wrote clean jQuery event functions inside $(document).ready() using element ID, class, and hierarchy selectors ($(this).next()).

Animation Logic: Created reusable toggle flags to handle reversible animation states for both theme toggling and progress bar animations.

Testing & Deployment: Verified execution across Chrome DevTools Console, committed code to GitHub, and enabled GitHub Pages deployment.
