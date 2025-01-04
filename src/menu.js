function menuPage() {
    let content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    content.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Here is our Big Boi menu";
    content.appendChild(paragraph);
}

export {menuPage};