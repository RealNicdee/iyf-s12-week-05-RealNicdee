// ============================================
// LESSON 10 — To-Do List (Week 5 deliverable)
// THE RULE: the array is the truth, the page is a picture of it.
//   Every action = (1) change `todos`  (2) call render()
// ============================================

// ---------- DOM elements ----------
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const formError = document.getElementById("form-error");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// ---------- State ----------
let todos = []; // [{ id, text, completed }]
let currentFilter = "all"; // "all" | "active" | "completed"
let nextId = 1;
let editingId = null; // id of the todo being edited (bonus)

// ============================================
// STEP 1 — render the list from the array
// ============================================

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = todo.id;
  if (todo.completed) li.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "toggle";
  checkbox.checked = todo.completed;

  let textEl;
  if (todo.id === editingId) {
    // Bonus: draw an edit input instead of the text
    textEl = document.createElement("input");
    textEl.type = "text";
    textEl.className = "edit";
    textEl.value = todo.text;
  } else {
    textEl = document.createElement("span");
    textEl.className = "todo-text";
    textEl.textContent = todo.text; // textContent, NOT innerHTML
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete";
  deleteBtn.textContent = "✕";
  deleteBtn.setAttribute("aria-label", `Delete "${todo.text}"`);

  li.append(checkbox, textEl, deleteBtn);
  return li;
}

function visibleTodos() {
  if (currentFilter === "active") return todos.filter((t) => !t.completed);
  if (currentFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

function render() {
  todoList.replaceChildren(...visibleTodos().map(createTodoElement));
  updateStats();
}

function updateStats() {
  const left = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${left} ${left === 1 ? "item" : "items"} left`;
}

// ============================================
// STEP 2 — add a task
// ============================================

function addTodo(text) {
  todos.push({ id: nextId++, text, completed: false });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the browser from reloading the page
  const text = input.value.trim();

  if (text === "") {
    formError.textContent = "Type a task first.";
    return;
  }

  formError.textContent = "";
  addTodo(text);
  input.value = "";
  input.focus();
});

// ============================================
// STEP 3 — toggle and delete with ONE delegated listener
// ============================================

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  render();
}

todoList.addEventListener("click", (event) => {
  if (event.target.closest(".edit")) return; // clicking inside the edit box does nothing

  const item = event.target.closest(".todo-item");
  if (!item) return;

  const id = Number(item.dataset.id); // dataset gives strings!

  if (event.target.closest(".delete")) {
    deleteTodo(id); // check delete FIRST
    return;
  }

  toggleTodo(id);
});

// ============================================
// STEP 4 — filters, stats, clear completed
// ============================================

function filterTodos(filter) {
  currentFilter = filter;
  filters.forEach((btn) => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
  render();
}

filters.forEach((btn) => {
  btn.addEventListener("click", () => filterTodos(btn.dataset.filter));
});

function clearCompleted() {
  todos = todos.filter((t) => !t.completed);
  render();
}

clearCompletedBtn.addEventListener("click", clearCompleted);

// ============================================
// STEP 5 — BONUS: double-click to edit
// ============================================

function startEditing(id) {
  editingId = id;
  render();
  const editInput = todoList.querySelector(".edit");
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

function saveEdit(id, newText) {
  const text = newText.trim();
  const todo = todos.find((t) => t.id === id);
  if (todo && text !== "") todo.text = text; // empty keeps the old text
  editingId = null;
  render();
}

function cancelEdit() {
  editingId = null;
  render();
}

todoList.addEventListener("dblclick", (event) => {
  const textEl = event.target.closest(".todo-text");
  if (!textEl) return;
  const item = textEl.closest(".todo-item");
  startEditing(Number(item.dataset.id));
});

todoList.addEventListener("keydown", (event) => {
  if (!event.target.matches(".edit")) return;
  const id = Number(event.target.closest(".todo-item").dataset.id);

  if (event.key === "Enter") {
    saveEdit(id, event.target.value);
  } else if (event.key === "Escape") {
    cancelEdit();
  }
});

// ---------- Initialize ----------
render();