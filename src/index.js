import "./styles.css";
import { constructHome } from "./home";
import {menu}  from './restaurant_menu'
import { constructMenu } from "./menu_tab";

class Controller {
    constructor() {
        //Cashe DOM
        this.sidebarBtn = document.getElementById("sidebarBtn");
        this.main = document.getElementById("main");
        this.sidebar = document.getElementById("sidebar");
        this.sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
        this.menuBtn = document.getElementById("menuBtn");

        //Event Listeners
        this.sidebarBtn.addEventListener("click", this.onSidebarBtn.bind(this));
        this.sidebarCloseBtn.addEventListener("click", this.onSidebarCloseBtn.bind(this));
        this.menuBtn.addEventListener("click", this.onMenuBtn.bind(this));
    }

    #clearChildren (parent) {
        const children = [...parent.children];
        for (const child of children) {
            parent.removeChild(child);
        }
    }

    #removeClasses(parent) {
        const parentClasses = [...parent.getAttribute("class").split(" ")];
        const mainIndex = parentClasses.indexOf("main");
        parentClasses.splice(mainIndex, 1); //remove everything except main class
        parent.classList.remove(...parentClasses);
    }

    renderHome() {
        this.#clearChildren(this.main);
        this.#removeClasses(this.main);
        constructHome(this.main);
    }

    renderMenu() {
        this.#clearChildren(this.main);
        this.#removeClasses(this.main);
        constructMenu(this.main, menu);
    }

    onSidebarBtn() {
        this.sidebar.classList.add("active")
    }

    onSidebarCloseBtn() {
        this.sidebar.classList.remove("active")
    }

    onMenuBtn() {
        this.renderMenu();
        this.sidebar.classList.remove("active")
    }

        

}

const controller = new Controller();
window.addEventListener("load", () => {
    controller.renderHome();
});




