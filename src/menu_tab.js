export function constructMenu(parent, menu = {}) {
    
    parent.classList.add("menu-layout")

    for(const course of Object.keys(menu)) {
        console.log(course)
        const courseContainer = document.createElement("div");
        courseContainer.classList.add("course-container");

        const header = document.createElement("h2");
        header.classList.add("course-container__header");
        header.textContent = course.charAt(0).toUpperCase() + course.slice(1); //Uppercase first letter

        const label = document.createElement("label");
        label.setAttribute("for", `${course}Checkbox`);
        label.classList.add("course-container__checkbox");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", `${course}Checkbox`);

        //Construct checkbox
        label.appendChild(checkbox);

        //Construct top of course container
        courseContainer.appendChild(header);
        courseContainer.appendChild(label);

        //Course Items
        const courseItems = document.createElement("div");
        courseItems.classList.add("course-container__items");

       
        for(const item of menu[course]) {  //items are objects stored in an array

            const courseItem = document.createElement("div");
            courseItem.classList.add("course-item");

            const itemName = document.createElement("h3");
            itemName.classList.add("course-item__name");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.classList.add("course-item__price");
            itemPrice.textContent = item.price.toFixed(2);

            const itemCalories = document.createElement("span");
            itemCalories.classList.add("course-item__calories");
            itemCalories.textContent = item.calories + "kcal";

            const itemDiet = document.createElement("span");
            itemDiet.classList.add("course-item__diet");
            itemDiet.textContent = item.diet === "neither" ? "" : item.diet;

            const itemDescription = document.createElement("p");
            itemDescription.classList.add("course-item__description");
            itemDescription.textContent = item.description;

            //Construct course item
            courseItem.appendChild(itemName);
            courseItem.appendChild(itemPrice);
            courseItem.appendChild(itemCalories);
            courseItem.appendChild(itemDiet)
            courseItem.appendChild(itemDescription);

            //Add item to course items block
            courseItems.appendChild(courseItem);
        }

        //Construct bottom of course container
        courseContainer.appendChild(courseItems)



        //Construct course container
        parent.appendChild(courseContainer)
    }

    
}