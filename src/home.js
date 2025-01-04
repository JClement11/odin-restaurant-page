function homepage() {
    let content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Big Boi Restaurant";
    content.appendChild(heading);

    const picture = document.createElement("img");
    picture.src = "https://images.pexels.com/photos/12485977/pexels-photo-12485977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    content.appendChild(picture);

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is the best restaurant for the biggest big bois!";
    content.appendChild(paragraph);
}

export {homepage};