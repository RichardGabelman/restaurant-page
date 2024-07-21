function populateMenu() {
  const content = document.querySelector("#content");

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

  content.appendChild(li1);
  content.appendChild(li2);
  content.appendChild(li3);
}

export { populateMenu };