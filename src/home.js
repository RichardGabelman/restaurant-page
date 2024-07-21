import logo from './Skyline_Chili_logo_3D.svg.png';

function populateHome() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.classList.add("mainContent");


  const title = document.createElement("div");
  title.classList.add("imageTitle");

  const image = new Image();
  image.src = logo;
  title.appendChild(image);

  const heading = document.createElement("h1");
  heading.textContent = "Skyline Chili";
  title.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.textContent = "You won't find these amazing dishes anywhere else.";

  main.appendChild(title);
  main.appendChild(paragraph);

  content.appendChild(main);
}

export { populateHome };
