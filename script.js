function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskBoard = document.getElementById("task-board");
  const maxLength = 50;

  if (taskInput.value.trim() === "") {
    alert("Por favor, insira uma tarefa!");
    return;
  }

  if (taskInput.value.length > maxLength) {
    alert(
      `O limite é de ${maxLength} caracteres! Sua tarefa tem ${taskInput.value.length} caracteres.`
    );
    return;
  }

  // Criar um post-it
  const newTask = document.createElement("div");
  newTask.className = "task";

  // Criar um parágrafo para o texto da tarefa
  const taskText = document.createElement("p");
  taskText.innerText = taskInput.value;

  // Criar a div para os botões
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttons";

  // Criar botão de concluir (✔)
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerText = "✔";
  completeBtn.onclick = function () {
    taskText.classList.toggle("completed"); // Alterna entre concluído e não concluído
  };

  // Criar botão de deletar (X)
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "X";
  deleteBtn.onclick = function () {
    taskBoard.removeChild(newTask);
  };

  // Adicionar botões ao container de botões
  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);

  // Adicionar elementos ao post-it
  newTask.appendChild(taskText);
  newTask.appendChild(buttonContainer);

  // Adicionar o post-it ao quadro de tarefas
  taskBoard.appendChild(newTask);

  // Limpar o input
  taskInput.value = "";
}
