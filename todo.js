let ul = document.querySelector("ul");
let form = document.getElementById("form");
let input = document.getElementById("input");
let warn = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length >= 3) {
    var li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "border",
      "border-success",
      "rounded",
      "my-1"
    );

    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ""; //reset value

    //complete button
    let complete = document.createElement("button");
    complete.classList.add(
      "btn",
      "btn-outline-success",
      "btn-sm",
      "float-right",
      "mx-2"
    );
    // complete.textContent = "Complete";
    complete.innerHTML = `<i class="far fa-check-circle"> Complete</i>`;
    li.appendChild(complete);

    complete.addEventListener("click", (e) => {
      li.style.textDecoration = "line-through";
    });

    //task remove button
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-danger", "btn-sm", "float-right");
    // btn.textContent = "Remove";
    btn.innerHTML = `<i class="far fa-trash-alt"> Remove</i>`;
    li.appendChild(btn);
    btn.addEventListener("click", (e) => {
      //list.remove();
      btn.parentElement.remove();
    });
  } else {
    var p = document.createElement("p");
    p.classList.add("text-info", "text-center");
    warn.appendChild(p);
    p.textContent = "🙄 you did not added any task";
  }

  // lists.forEach((list) => {
  //   lists.append(item);

  //   //list.append(item);
  // });
});
