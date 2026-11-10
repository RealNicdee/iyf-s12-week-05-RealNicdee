// ========== DOM Elements ==========
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter");

// ========== State ==========
let todos = [];          // Array of objects: { id, text, completed }
let currentFilter = "all";
let nextId = 1;

// ========== Helper: create one todo <li> ==========
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (todo.completed) {
        li.classList.add("completed");
    }
    li.dataset.id = todo.id;

    // Text span (ALWAYS textContent – never innerHTML)
    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = todo.text;   // safe

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    return li;
}

// ========== Render the list from the array ==========
function renderTodos() {
    // Clear current list
    todoList.innerHTML = "";   // safe here – we only put our own elements

    // Filter
    let filtered = todos;
    if (currentFilter === "active") {
        filtered = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filtered = todos.filter(t => t.completed);
    }

    // Create and append elements
    filtered.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    updateStats();
}

// ========== Add a new todo ==========
function addTodo(text) {
    const trimmed = text.trim();
    if (trimmed === "") return;   // refuse empty or spaces-only

    const newTodo = {
        id: nextId++,
        text: trimmed,
        completed: false
    };

    todos.push(newTodo);
    renderTodos();
}

// ========== Toggle completed ==========
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

// ========== Delete one todo ==========
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

// ========== Update "X items left" ==========
function updateStats() {
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = activeCount === 1
        ? "1 item left"
        : `${activeCount} items left`;
}

// ========== Clear all completed ==========
function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    renderTodos();
}

// ========== Filter buttons ==========
function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderTodos();
}

// ========== EVENT LISTENERS ==========

// 1. Form submit – Add task (Enter or button)
form.addEventListener("submit", function (event) {
    event.preventDefault();          // IMPORTANT – stops page reload
    addTodo(input.value);
    input.value = "";                // clear input
    input.focus();
});

// 2. ONE click listener on the whole list (event delegation)
todoList.addEventListener("click", function (event) {
    const target = event.target;

    // Clicked the Delete button
    if (target.classList.contains("delete-btn")) {
        const li = target.closest(".todo-item");
        const id = Number(li.dataset.id);
        deleteTodo(id);
        return;
    }

    // Clicked the task itself (or the text) → toggle
    const li = target.closest(".todo-item");
    if (li && !li.classList.contains("editing")) {
        const id = Number(li.dataset.id);
        toggleTodo(id);
    }
});

// 3. Filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        setFilter(btn.dataset.filter);
    });
});

// 4. Clear Completed
clearCompletedBtn.addEventListener("click", clearCompleted);

// ========== BONUS: Double-click to edit ==========
todoList.addEventListener("dblclick", function (event) {
    const li = event.target.closest(".todo-item");
    if (!li || li.classList.contains("editing")) return;

    const id = Number(li.dataset.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    li.classList.add("editing");

    const textSpan = li.querySelector(".todo-text");
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.className = "edit-input";
    inputEdit.value = todo.text;

    li.insertBefore(inputEdit, textSpan);
    inputEdit.focus();
    inputEdit.select();

    function finishEdit(save) {
        if (save) {
            const newText = inputEdit.value.trim();
            if (newText !== "") {
                todo.text = newText;
            }
        }
        li.classList.remove("editing");
        renderTodos();
    }

    inputEdit.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            finishEdit(true);
        } else if (e.key === "Escape") {
            finishEdit(false);
        }
    });

    // Optional: click outside also saves
    inputEdit.addEventListener("blur", function () {
        finishEdit(true);
    });
});

// ========== Initialize ==========
renderTodos();