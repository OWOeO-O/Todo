const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const completeList = document.getElementById("complete-list");
const completeBtn = document.getElementById("complete-btn");
const deleteBtn = document.getElementById("delete-btn");

let selectedTodoItem = null; // 현재 선택된 할 일 항목


// text 미리 받기 / 함수 이용 => 다음에도 재활용 

// 할 일 목록 추가 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("추가 완료! 다음 목표는?!");
    return;
  }
// newTrack 생성
function newTrack(){
  
}
  const li = document.createElement("li");
  li.textContent = todoText;
  li.classList.add("todo-item");

  // 할 일 항목 클릭 시 선택하는 함수 호출
  li.onclick = function (event) {
    event.stopPropagation(); // 부모 클릭 이벤트 트리거 막기 위해
    selectTodoItem(li);
  };

  todoList.appendChild(li);
  todoInput.value = ""; // 입력창 초기화
}

// 할 일 항목 선택 함수
function selectTodoItem(todoItem) {
  // 이미 선택된 항목 있으면 선택 해제
  if (selectedTodoItem) {
    selectedTodoItem.classList.remove("selected");
  }

  // 선택 항목 업데이트
  selectedTodoItem = todoItem;
  selectedTodoItem.classList.add("selected");
}
  // 완료 목록 추가 함수
  function completeTodo() {
    const todoText = todoInput.value.trim();
    if (completeTodo === "selected") {
    const newTrack = track.clone();

  // 선택 항목 업데이트
  selectedTodoItem = todoItem;
  selectedTodoItem.classList.add("selected");
  li.classList.add("newTrack");

      return;
    }
    
 // 완료 버튼 클릭 시 실행 함수
 completeBtn.onclick = function () {
  if (!selectedTodoItem) {
    alert("완료 항목을 선택하세요.");
     li.textContent = todoText;
     li.classList.add("selected-li");
    return;
  }

  if (confirm("정말 달성했나요!?!?")) {
    selectedTodoItem.remove();
    selectedTodoItem = null;
  };

  // 할 일 항목 클릭 시 선택하는 함수 호출
  li.onclick = function (event) {
    event.stopPropagation(); // 부모 클릭 이벤트 트리거 막기 위해
    selectTodoItem(li);
  };
  // 해당 항목 지우고, 완료 목록으로 이동
 
  completeList.appendChild(selectedTodoItem);
  selectedTodoItem.classList.remove("selected");
  selectedTodoItem = null;
  
  const origin = document.createElement("li");
  const clone = Object.assign({}, origin);
  console.log(clone);
   
 }
};

// 삭제 버튼 클릭 시 실행 함수
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

completeBtn.addEventListener("click", completeTodo);

// Enter 키로도 추가할 수 있도록 설정
todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// 기존 목록에 이미 있던 항목에도 클릭 이벤트 추가 위해 목록 로드 처리
function initializeList() {
  const items = todoList.getElementsByTagName("li");
  for (let item of items) {
    item.onclick = function (event) {
      event.stopPropagation();
      selectTodoItem(item);
    };
  }
}

// 새 항목 추가 후 목록에 클릭 이벤트 연결
addBtn.addEventListener("click", function () {
  addTodo();
  initializeList(); // 새 항목에도 클릭 이벤트 추가
});

// 페이지 로드 시 기존 목록에도 클릭 이벤트를추가
initializeList();
