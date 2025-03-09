const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");
const completeBtn = document.getElementById("complete-btn");
const deleteBtn = document.getElementById("delete-btn");

let selectedTodoItem = null; // 현재 선택된 할 일 항목

// 할 일 목록에 추가하는 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("할 일을 입력하세요!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = todoText;
  li.classList.add("todo-item");

  // 할 일 항목 클릭 시 선택하는 함수 호출
  li.onclick = function (event) {
    event.stopPropagation(); // 부모 클릭 이벤트가 트리거되는 것을 막기 위해
    selectTodoItem(li);
  };

  todoList.appendChild(li);
  todoInput.value = ""; // 입력창 초기화
}

// 할 일 항목 선택하는 함수
function selectTodoItem(todoItem) {
  // 이미 선택된 항목이 있으면 선택 해제
  if (selectedTodoItem) {
    selectedTodoItem.classList.remove("selected");
  }

  // 선택된 항목 업데이트
  selectedTodoItem = todoItem;
  selectedTodoItem.classList.add("selected");
}

// 완료 버튼 클릭 시 실행되는 함수
completeBtn.onclick = function () {
  if (!selectedTodoItem) {
    alert("할 일 항목을 선택하세요.");
    return;
  }

  // 완료 목록으로 이동
  completedList.appendChild(selectedTodoItem);
  selectedTodoItem.classList.remove("selected");
  selectedTodoItem = null;
  return;
};

// 삭제 버튼 클릭 시 실행되는 함수
deleteBtn.onclick = function () {
  if (!selectedTodoItem) {
    alert("할 일 항목을 선택하세요.");
    return;
  }

  if (confirm("정말 삭제하시겠습니까?")) {
    selectedTodoItem.remove();
    selectedTodoItem = null;
  }
};

// "추가" 버튼 클릭 시 할 일 추가
addBtn.addEventListener("click", addTodo);

// Enter 키로도 추가할 수 있도록 설정
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// 기존 목록에 이미 있던 항목에도 클릭 이벤트를 추가하기 위해 목록 로드 시 처리
function initializeList() {
  const items = todoList.getElementsByTagName("li");
  for (let item of items) {
    item.onclick = function (event) {
      event.stopPropagation();
      selectTodoItem(item);
    };
  }
}

// 새 항목 추가 후 목록에 클릭 이벤트를 연결
addBtn.addEventListener("click", function () {
  addTodo();
  initializeList(); // 새로운 항목에도 클릭 이벤트 추가
});

// 페이지 로드 시 기존 목록에도 클릭 이벤트를 추가
initializeList();
