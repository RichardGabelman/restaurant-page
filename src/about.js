function populateAbout() {
  const content = document.querySelector("#content");

  const main = document.createElement("div");
  main.classList.add("mainContent");

  const paragraph = document.createElement("p");
  paragraph.textContent = `Skyline Chili is a chain of Cincinnati-style chili restaurants based in Cincinnati, Ohio. Founded in 1949 by Greek immigrant Nicholas Lambrinides,[3] Skyline Chili is named for the view of Cincinnati's skyline that Lambrinides could see from the first restaurant (which has since been demolished),[4] opened in the section of town now known as Price Hill.[4] It is also the "official chili" of many local professional sports teams and venues, including the Cincinnati Bengals, Cincinnati Reds, Cincinnati Cyclones, Columbus Blue Jackets and the Kings Island theme park,[5] and also sponsors the Crosstown Shootout, an annual men's college basketball rivalry game between the city's two NCAA Division I teams, Cincinnati and Xavier.`;

  main.appendChild(paragraph);
  content.appendChild(main);
}

export { populateAbout };