
function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    var li = document.createElement('li');
    li.textContent = todoText;

    var completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.onclick = function() {
        completeTask(li);
    };

    li.appendChild(completeButton);

    document.getElementById('todoList').appendChild(li);

    todoInput.value = '';
}

function completeTask(task) {
    var completedList = document.getElementById('completedList');
    var todoList = document.getElementById('todoList');

    task.removeChild(task.lastChild);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = function() {
        removeTask(task);
    };

    task.appendChild(deleteButton);

    completedList.appendChild(task);
}

function removeTask(task) {
    task.parentNode.removeChild(task);
}

function handleKeyPress(event) {
    if ((event.key === ' ' || event.keyCode === 13) && event.target.tagName !== 'BUTTON') {
        addTodo();
        event.preventDefault();
    }
}

function adjustLineLength() {
    var titleWidth = document.querySelector('h1').offsetWidth;
    var inputWidth = document.getElementById('todoInput').offsetWidth;
    var lineWidth = Math.max(titleWidth, inputWidth) + 20; // 여유 공간을 주기 위해 20px 추가

    var titleLine = document.querySelector('.title-line');
    titleLine.style.width = lineWidth + 'px';
}

window.addEventListener('load', adjustLineLength);
window.addEventListener('resize', adjustLineLength);
