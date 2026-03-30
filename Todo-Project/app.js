const input = document.getElementById("input-todo-task");
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const form = document.getElementById('add-form');
const inputIdComplete = document.getElementById('complete-task-input');
const completeForm = document.getElementById('complete-form');
const clearBtn = document.getElementById("clear-completed-btn");
const filterForm = document.getElementById('filter-form');
const removeForm = document.getElementById('remove-form');
const inputIdToRemove = document.getElementById('remove-task-input')



function getFilter() {
    return  filtered = document.querySelector('input[name = "filter"]:checked').value;
}

function render(tasks) {
    list.innerHTML = '';

    tasks.forEach(item => {
        const li = document.createElement('li');

        li.textContent = `Task: ${item.text} Status: ${item.completed ? '✅' : '❌'}`;

        list.appendChild(li);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    todo.add(input.value);
    input.value = '';

    render( todo.filter(getFilter()) );

});

completeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(inputIdComplete.value > 0 && inputIdComplete.value <= todo.tasks.length) {
    
        todo.complete(+inputIdComplete.value);

    inputIdComplete.value = '';
    render( todo.filter(getFilter()) );
    };
    
});

clearBtn.addEventListener('click', function() {

    todo.clearCompleted();
    render( todo.filter(getFilter()) );

});

filterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    render( todo.filter(getFilter()) );
    
});

removeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(inputIdToRemove.value > 0 && inputIdToRemove.value <= todo.tasks.length) {
    
        todo.remove(+inputIdToRemove.value);

    inputIdToRemove.value = '';
    render( todo.filter(getFilter()) );
    };
})










