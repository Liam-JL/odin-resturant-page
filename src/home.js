export function constructHome (parent, handlers = []) {
    const homeHeader = document.createElement("h2");
    homeHeader.classList.add("main__home-header");
    homeHeader.textContent = "We pride ourself on having a nice looking restaurant"
    parent.appendChild(homeHeader)

    
}