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


// Below is my practice work.


// ============================================
// STEP 1 – Task 9.1: Select TEN ways. Store each in a const, then log it.
// ============================================

// TODO 1 – the h1
const h1 = document.querySelector("h1");
console.log(h1);

// TODO 2 – all elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log(contentElements);

// TODO 3 – the form with id "contact-form" (use getElementById – no #)
const contactForm = document.getElementById("contact-form");
console.log(contactForm);

// TODO 4 – the email input INSIDE the form
const emailInput = document.querySelector("#contact-form input[type='email']");
console.log(emailInput);

// TODO 5 – all list items in the nav
const navListItems = document.querySelectorAll("nav li");
console.log(navListItems);

// TODO 6 – the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

// TODO 7 – the last paragraph in the article
const lastParagraph = document.querySelector("article p:last-of-type");
console.log(lastParagraph);

// TODO 8 – the submit button
const submitButton = document.querySelector("button[type='submit']");
console.log(submitButton);

// TODO 9 – every h2 inside main
const mainH2s = document.querySelectorAll("main h2");
console.log(mainH2s);

// TODO 10 – the footer
const footer = document.querySelector("footer");
console.log(footer);

// Extra 1: What does this return?
console.log(document.querySelector(".does-not-exist")); // null

// Extra 2: Turn the nav items NodeList into an array of their text
const navTexts = [...navListItems].map(item => item.textContent);
console.log(navTexts);


// ============================================
// STEP 2 – Task 9.2: traverse. Say the route out loud before you write it.
// ============================================

// TODO 1 – from the header, find the nav inside it
const header = document.querySelector("header");
const navInHeader = header.querySelector("nav");
console.log(navInHeader);

// TODO 2 – from the first .nav-link, get its parent li
const parentLi = firstNavLink.parentElement;
console.log(parentLi);

// TODO 3 – from the article, get its next sibling (should be a section)
const article = document.querySelector("article");
const nextSibling = article.nextElementSibling;
console.log(nextSibling);

// TODO 4 – from the ul, get all its child li elements
const ul = document.querySelector("ul.nav-list");
const childLis = ul.children;
console.log(childLis);

// TODO 5 – from the footer, go up to the body
const body = footer.parentElement;
console.log(body);

// TODO 6 – from the first .nav-link, use closest() to reach the header
const headerFromLink = firstNavLink.closest("header");
console.log(headerFromLink);


// ============================================
// STEP 3 — Task 9.3: change things
// ============================================

// TODO 1 – change the h1 text to something new
h1.textContent = "My Awesome College";

// TODO 2 – point the first .nav-link at MDN, open in a new tab
firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

// TODO 3 – read the article's data-id and data-category; add data-status="reviewed"
console.log(article.dataset.id);        // "42"
console.log(article.dataset.category);  // "tech"
article.dataset.status = "reviewed";

// TODO 4 – add "highlight" to the first .content, toggle "accent" on the second
const contentParagraphs = document.querySelectorAll(".content");
contentParagraphs[0].classList.add("highlight");
contentParagraphs[1].classList.toggle("accent");

// TODO 5 – THE INJECTION DEMO
const userInput = `<img src="x" onerror="alert('I hacked it finally!')">`;

unsafe.innerHTML = userInput;   // This will execute the onerror alert
safe.textContent = userInput;   // This will display the string as text

// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================

// TODO 1 – write addNavItem(text, href)
function addNavItem(text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = href;
  a.textContent = text;          // use textContent as required
  li.appendChild(a);
  document.querySelector(".nav-list").appendChild(li);
}

// Call the function twice
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

// TODO 2 – create a paragraph and insert it BEFORE the article's first paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a brand new paragraph inserted at the top.";
const firstParagraph = document.querySelector("article p");
firstParagraph.before(newParagraph);

// TODO 3 – clone the first nav li (deep), change its text to "Cloned", prepend it
const firstLi = document.querySelector(".nav-list li");
const clonedLi = firstLi.cloneNode(true);               // true = deep clone
clonedLi.querySelector("a").textContent = "Cloned";
document.querySelector(".nav-list").prepend(clonedLi);

// TODO 4 – remove the footer
footer.remove();