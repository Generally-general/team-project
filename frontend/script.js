const btn = document.getElementById("btn")

let count = 0;

btn.addEventListener("click", async () => {
  const res = await fetch("/api/users"); // Calls backend
  const users = await res.json();
  const userlist = document.getElementById("userList");
  userlist.innerHTML = "";
  count+=1;
  if(count % 2 === 0) {
    userlist.innerHTML = "";
  } else {
    users.forEach(user => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");

    summary.textContent = `USN: ${user.id}`;
    details.appendChild(summary);

    const ul = document.createElement("ul");
    Object.entries(user).forEach(([key, value]) => {
      if(key !== "id") {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        ul.appendChild(li);
      }
    });

    details.appendChild(ul);
    userlist.appendChild(details);
  });
  }
});