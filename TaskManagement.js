
const TASKS = [
    { id: 1, title: "Learn Git", isDone: false },
    { id: 2, title: "Review Code", isDone: true }
];

function addTask(title) {
    const newTask = { id: TASKS.length + 1, title: title, isDone: false };
    TASKS.push(newTask);
    return true;
}

function updateTask(id, newTitle) {
    for (let i = 0; i < TASKS.length; i++) {
        if (TASKS[i].id === id) {
            TASKS[i].title = newTitle;
            return TASKS[i]; 
        }
    }
    return null;
}

function deleteTask(x) {
    for (let y = 0; y < TASKS.length; y++) {
        if (TASKS[y].id === x) {
            TASKS.splice(y, 1);
            return true;
        }
    }
    return false;
}

function toggleTaskStatus(id) {
    for (let i = 0; i < TASKS.length; i++) {
        if (TASKS[i].id === id) {
            TASKS[i].isDone = true; 
            
            return true;
        }
    }
    return false;
}
