const input = document.getElementById("input-todo-task");
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const form = document.getElementById('add-form');
const inputId = document.getElementById('complete-task-input');
const completeForm = document.getElementById('complete-form');
const clearBtn = document.getElementById("clear-completed-btn");

function render() {
    list.innerHTML = '';

    todo.tasks.forEach(item => {
        const li = document.createElement('li');

        li.textContent = `Task: ${item.text} Status: ${item.completed ? '✅' : '❌'}`;
        list.appendChild(li);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    todo.add(input.value);
    input.value = '';

    render();

});

completeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(!(inputId.value <= 0 || inputId.value > todo.tasks.length)) {
    
        todo.complete(+inputId.value);

    inputId.value = '';
    render();
    };
    
});

clearBtn.addEventListener('click', function() {

    todo.clearCompleted();
    render();
    
})