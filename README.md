# Week 5: DOM Manipulation
## Interactive To-Do List

**Live Demo:** https://RealNicdee.github.io/iyf-s12-week-05-RealNicdee/

## Project Overview
This week I built an interactive To-Do List using pure JavaScript DOM manipulation.  
I also completed the Lesson 9 & 10 practice exercises and the five daily challenges.

## Features
- Add tasks
- Refuse empty / spaces-only tasks
- Toggle complete by clicking the task
- Delete button on each task
- Filters: All / Active / Completed
- “X items left” counter
- Clear Completed button
- Double-click to edit (Enter saves, Escape cancels)

## Key Technical Decisions
- **Event delegation**: One click listener on the `<ul>` so new tasks automatically work.
- **textContent** for every piece of user-typed text (tested with `<b>hi</b>`).
- Tasks stored in an array of objects and the list is fully re-rendered from that array.
- Styling changes done with `classList`, never `element.style` for completed state.
- `addEventListener` only – no inline `onclick`.

## Lessons Learned
- Event delegation is powerful: new elements added later still respond because the listener is on the parent.
- Always use `textContent` for user input to avoid XSS.
- Keeping state in a plain array and re-rendering makes the code much easier to reason about.
- `event.preventDefault()` is required on forms or the page reloads and you lose everything.

## How to Run
1. Open `index.html` in a browser, or
2. Visit the Live Demo link above (GitHub Pages).

## Folder Structure
- `index.html` + `styles.css` + `app.js` → To-Do List
- `Lesson-10/`  practice folder with `dom-practice.html` + `app.js` + `style.css`
- `Lesson-9/` practice folder with `dom.js` + `index.html`
- `daily-challenges/` with Day 1–5 challenges
