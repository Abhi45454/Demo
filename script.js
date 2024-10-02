document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoText;

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = "Complete";
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(li);

    todoInput.value = ""; // Clear input
});

