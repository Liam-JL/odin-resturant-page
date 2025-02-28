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

        //Event Listeners
        this.sidebarBtn.addEventListener("click", this.onSidebarBtn.bind(this));
        this.sidebarCloseBtn.addEventListener("click", this.onSidebarCloseBtn.bind(this));
    }

    #clearChildren (parent) {
        const children = [...parent.children];
        for (const child of children) {
            parent.removeChild(child);
        }
    }

    renderHome() {
        this.#clearChildren(this.main);
        constructHome(this.main);
    }

    renderMenu() {
        this.#clearChildren(this.main);
        constructMenu(this.main, menu);
    }

    onSidebarBtn() {
        this.sidebar.classList.add("active")
    }

    onSidebarCloseBtn() {
        this.sidebar.classList.remove("active")
    }

}

const controller = new Controller();
window.addEventListener("load", () => {
    controller.renderHome();
});




