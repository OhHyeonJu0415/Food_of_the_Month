class Ingredients {
  constructor() {}

  render(path, name) {
    const image = document.getElementById("foodIngredients");
    image.setAttribute("alt", "음식사진");
    image.setAttribute("src", path);
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";

    const title = document.getElementById("foodName");
    title.innerText = name;
  }
}

export default Ingredients;
