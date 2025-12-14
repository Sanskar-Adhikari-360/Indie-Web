const url = "https://raw.githubusercontent.com/Sanskar-Adhikari-360/Cyborg-kuro/refs/heads/main/data.json"
fetch(url)
.then(response => response.json())
.then(data => {
  document.getElementById("reading").textContent = data.book;
  document.getElementById("watching").textContent = data.show;
  document.getElementById("mood").textContent = data.mood;
  const todoList = document.getElementById("todo");
  todoList.innerHTML = ""; // clear existing
  data.todo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    todoList.appendChild(li);
  });
})
.catch(err => console.error("Failed to fetch JSON:", err));
