import "./styles.css";
import { constructHome } from "./home";

class TabController {
    constructor() {
        //Cashe DOM
        this.main = document.getElementById("main");
    }

    clearChildren (parent) {
        const children = [...parent.children];
        for (const child of children) {
            parent.removeChild(child);
        }
    }

    renderHome () {
        this.clearChildren(this.main);
        constructHome(this.main);
    }
}

const tabController = new TabController();
window.addEventListener("load", () => {
    tabController.renderHome();
});

