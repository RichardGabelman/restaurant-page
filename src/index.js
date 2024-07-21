import './style.css';
import { populateHome } from './home';

class navController {

  constructor() {
    this.home = document.querySelector("#home");
    this.menu = document.querySelector("#menu");
    this.about = document.querySelector("#about");
    this.content = document.querySelector("#content");
  }

  initializeEventHandlers() {
    this.home.addEventListener("click", () => {
      this.clearContent();
      console.log("home button pressed");
      populateHome();
    });

    this.menu.addEventListener("click", () => {
      this.clearContent();
      console.log("menu button pressed");
    });

    this.about.addEventListener("click", () => {
      this.clearContent();
      console.log("about button pressed");
    });
  }

  clearContent() {
    this.content.textContent = '';
  }
}

const controller = new navController();
controller.initializeEventHandlers();