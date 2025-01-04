function aboutPage() {
    let content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Big Boi Restaurant!";
    content.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "We are a restaurant made by big bois, for big bois.";
    content.appendChild(paragraph);
}

export {aboutPage};