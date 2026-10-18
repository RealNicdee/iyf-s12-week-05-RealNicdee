// ============================================
// LESSON 9 — CLASSWORK EXERCISE: dom.js (Tasks 9.1–9.4)
// Copy dom-practice.html AND this file into the root of iyf-s12-week-05-{username}.
// Live Server → open dom-practice.html → F12 → Console.
//
// RULES: querySelector by default · textContent for text · classList for looks
//        (no element.style) · const/let only
// ============================================

// small helper: logs ✓ or ✗ so you can check yourself
const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);


// ============================================
// STEP 1 — Task 9.1: select TEN ways. Store each in a const, then log it.
// ============================================
// TODO 1  the h1
// TODO 2  all elements with class "content"
// TODO 3  the form with id "contact-form" (use getElementById — no #)
// TODO 4  the email input INSIDE the form (one querySelector with a descendant selector)
// TODO 5  all list items in the nav
// TODO 6  the first .nav-link
// TODO 7  the last paragraph in the article   (hint: p:last-of-type)
// TODO 8–10  three more of your own — e.g. the submit button, every h2 in main, the footer
//
// Then: what does document.querySelector(".does-not-exist") return? Log it.
// And:  turn your nav items NodeList into an array of their text with [...list].map()


// ============================================
// STEP 2 — Task 9.2: traverse. Say the route out loud before you write it.
// ============================================
// TODO 1  from the header, find the nav inside it
// TODO 2  from the first .nav-link, get its parent li
// TODO 3  from the article, get its next sibling (should be a section)
// TODO 4  from the ul, get all its child li elements
// TODO 5  from the footer, go up to the body
// TODO 6  from the first .nav-link, use closest() to reach the header


// ============================================
// STEP 3 — Task 9.3: change things
// ============================================
// TODO 1  change the h1 text to something of yours
// TODO 2  point the first .nav-link at https://developer.mozilla.org, open in a new tab
//         (target="_blank" and rel="noopener")
// TODO 3  read the article's data-id and data-category with dataset; add data-status="reviewed"
// TODO 4  add the class "highlight" to the first .content paragraph,
//         toggle "accent" on the second — NO element.style
//
// TODO 5  THE INJECTION DEMO — run these two lines and watch:
//   const userInput = `<img src="x" onerror="alert('hacked!')">`;
//   document.getElementById("unsafe").innerHTML = userInput;   // what happens?
//   document.getElementById("safe").textContent = userInput;   // and now?
//   Write one sentence in a comment: which one would you use for a user's comment, and why?


// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================
// TODO 1  write addNavItem(text, href): creates <li><a class="nav-link" href=…>text</a></li>
//         and appends it to .nav-list. Use textContent for the text.
// function addNavItem(text, href) { }
// addNavItem("Blog", "#blog");
// addNavItem("Portfolio", "#portfolio");
//
// TODO 2  create a paragraph and insert it BEFORE the article's first paragraph
// TODO 3  clone the first nav li (deep), change its text to "Cloned", prepend it to the list
// TODO 4  remove the footer


// ============================================
// STEP 5 — COMMIT as you go
//   git add dom-practice.html dom.js
//   git commit -m "Add: element selection practice"
//   git commit -m "Add: content, attribute and class changes"
//   git commit -m "Add: create and remove elements"
//   git push
// ============================================