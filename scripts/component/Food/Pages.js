import RecipeContainer from "../../section/RecipeContainer.js";

class Pages {
  constructor() {}

  removeElement = async () => {
    const cards = document.getElementsByClassName("card");
    const size = cards.length;
    for (let i = 0; i < size; i++) {
      cards[0].remove();
    }
  };

  render = async (data) => {
    await this.removeElement();
    const root = document.getElementById("cards");

    const divRoot = document.createElement("div");
    divRoot.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("recipePic");
    img.setAttribute("src", data.image);
    img.setAttribute("alt", "레시피");

    const div = document.createElement("div");
    div.classList.add("recipeTitle");
    div.appendChild(document.createTextNode(data.title));

    divRoot.appendChild(img);
    divRoot.appendChild(div);

    divRoot.addEventListener("click", () => {
      const recipeContainer = new RecipeContainer(data);
      recipeContainer.render();

      window.scrollTo({
        left: 0,
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    });

    root.appendChild(divRoot);
  };
}

export default Pages;
