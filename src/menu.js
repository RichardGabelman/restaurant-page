function populateMenu() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.classList.add("mainContent");

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "3-Way $6.49, cal 800";
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Cheese Coney $2.09, cal 350";
  ul.appendChild(li2);

  const li3 = document.createElement("li");
  li3.textContent = "Fries $1.99, cal 430";
  ul.appendChild(li3);

  main.appendChild(li1);
  main.appendChild(li2);
  main.appendChild(li3);

  content.appendChild(main);
}

export { populateMenu };