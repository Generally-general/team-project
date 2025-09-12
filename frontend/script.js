const btn = document.getElementById("btn")

let count = 0;

btn.addEventListener("click", async () => {
  const res = await fetch("/api/users"); // Calls backend
  const users = await res.json();
  const list = document.getElementById("userList");
  list.innerHTML = "";
  count+=1;
  if(count % 2 === 0) {
    list.innerHTML = "";
  } else {
    users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name}`;
    list.appendChild(li);
  });
  }
});