import './style.css';
import { populateHome } from './home';
import { populateMenu } from './menu';
import { populateAbout } from './about';

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
      populateHome();
    });

    this.menu.addEventListener("click", () => {
      this.clearContent();
      populateMenu();
    });

    this.about.addEventListener("click", () => {
      this.clearContent();
      populateAbout();
    });
  }

  clearContent() {
    this.content.textContent = '';
  }
}

const controller = new navController();
controller.initializeEventHandlers();
populateHome();