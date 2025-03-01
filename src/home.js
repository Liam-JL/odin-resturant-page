export function constructHome(parent, handlers = []) {
    parent.classList.add("home-layout");
    parent.classList.add("bg-img");

    const homeHeader = document.createElement("h2");
    homeHeader.classList.add("main__home-header");
    homeHeader.textContent = "We pride ourself on having a nice looking restaurant"
    parent.appendChild(homeHeader)

    const homeSubtext = document.createElement("p");
    homeSubtext.classList.add("main__home-subtext");
    homeSubtext.textContent = "The food is alright too, I guess... Like it aint amazing, but it'll do. Our chef is kind of mid tho so don't expect much.";
    parent.appendChild(homeSubtext);

    const homeAboutBtn = document.createElement("button");
    homeAboutBtn.classList.add("main__home-about-btn");
    homeAboutBtn.textContent = "About";
    homeAboutBtn.addEventListener("click", () => {
        console.log("About btn clicked")
    })
    parent.appendChild(homeAboutBtn);
}