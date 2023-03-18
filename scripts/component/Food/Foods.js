import Ingredients from "./Ingredients.js";

class Foods {
  constructor($data) {
    this.$data = $data;
    this.path = 0;
  }

  render() {
    const ingredients = new Ingredients();

    //첫번째 음식 사진으로 초기화
    ingredients.render(
      this.$data[this.path].image,
      this.$data[this.path].title
    );

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    //이전 식재료 렌더링
    leftArrow.addEventListener("click", () => {
      if (this.path > 0) this.path = this.path - 1;
      ingredients.render(
        this.$data[this.path].image,
        this.$data[this.path].title
      );
    });

    //다음 식재료 렌더링
    rightArrow.addEventListener("click", () => {
      if (this.path < this.$data.length - 1) this.path = this.path + 1;
      ingredients.render(
        this.$data[this.path].image,
        this.$data[this.path].title
      );
    });
  }
}

export default Foods;
