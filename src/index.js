import './style.css';

class navController {

  constructor() {
    this.home = document.querySelector("#home");
    this.menu = document.querySelector("#menu");
    this.about = document.querySelector("#about");
    this.content = document.querySelector("#content");
  }

  initializeEventHandlers() {
    this.home.addEventListener("click", () => {
      console.log("home button pressed");
    });

    this.menu.addEventListener("click", () => {
      console.log("menu button pressed");
    });

    this.about.addEventListener("click", () => {
      console.log("about button pressed");
    });
  }

  clearContent() {
    this.content.textContent = '';
  }
}

const controller = new navController();
controller.initializeEventHandlers();