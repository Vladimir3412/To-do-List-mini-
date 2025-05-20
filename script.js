// получаем элементы
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


// добавление задачи.
//  taskInput.value Берёт значение из инпута(<input id="taskInput">.)
// trim() — удаляет лишние пробелы:
const addTask = () => {
    const taskText = taskInput.value.trim();
    if(taskText === "") return; // если пустая строка, то ничего не делать
    
    const taskItem = document.createElement('li'); // создаём элемент списка
    taskItem.classList.add("task");

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button type="button" class="delete-btn">Удалить</button>
    `; // добавляем текст задачи и кнопку удаления



    // Добавление функциональности отметки задачи

// Когда пользователь кликает по задаче (<li>),
// если клик был НЕ по кнопке, 
// то задача переключает класс completed (то есть выполнена/не выполнена).
    taskItem.addEventListener('click', (e) => {
        if(e.target.tagName !== 'BUTTON') {
            taskItem.classList.toggle('completed'); // переключаем класс completed
        }
    });

    // Удаление задачи
    // Когда пользователь кликает по кнопке удаления,
    // задача удаляется из списка.

    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Блокирует передачу клика родителю (чтобы не переключался класс)
        taskList.removeChild(taskItem); // Удаляет задачу из списка
    });

    taskList.appendChild(taskItem); // добавляем задачу в список
    taskInput.value = ""; // очищаем инпут
}

// добавляем обработчик события на кнопку "Добавить"
addTaskBtn.addEventListener('click', addTask);

// добавляем обработчик события на Enter
taskInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') addTask(); // если нажата клавиша Enter, то добавляем задачу
});

 