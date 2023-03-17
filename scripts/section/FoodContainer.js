import Ingredients from "../component/Food/Ingredients.js";

class FoodContainer {
  constructor($container, $data, $year, $month) {
    this.$container = $container;
    this.$data = $data;
    this.$year = $year;
    this.$month = $month;
    this.path = 0;
  }

  render() {
    const ingredients = new Ingredients();
    const imagePath = [
      "../../images/mainPic.png",
      "../../images/logo.png",
      "../../images/test1.jpg",
    ];
    const title = ["테스트1", "테스트2", "테스트3"];
    const root = document.querySelector("#foodContainer");
    const line = document.getElementsByClassName("boldLine");
    const date = document.getElementById("foodDate");
    root.classList.remove("disPlayNone");
    line[0].classList.remove("disPlayNone");
    window.scrollTo({ left: 0, top: screen.height, behavior: "smooth" });

    //타이틀
    date.innerText = `${this.$year}년 ${this.$month}월`;

    //첫번째 음식 사진으로 초기화
    ingredients.render(imagePath[this.path], title[this.path]);
    // this.setIngredients(imagePath);

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    leftArrow.addEventListener("click", () => {
      if (this.path > 0) this.path = this.path - 1;
      ingredients.render(imagePath[this.path], title[this.path]);
    });

    rightArrow.addEventListener("click", () => {
      if (this.path < imagePath.length - 1) this.path = this.path + 1;
      ingredients.render(imagePath[this.path], title[this.path]);
    });
  }
}

export default FoodContainer;
