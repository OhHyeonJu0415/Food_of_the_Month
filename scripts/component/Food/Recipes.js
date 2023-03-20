import Pages from "./Pages.js";
import RecipeContainer from "../../section/RecipeContainer.js";

class Recipes {
  constructor($data) {
    this.$data = $data;
    this.page = 0;
  }

  setPages(data) {
    //현재 페이지는 다시 렌더링할 필요없다
    if (data === this.page) return;
    const pages = new Pages();

    this.page = data;
    let start = (this.page - 1) * 3;
    let end = start + 3;
    if (end > this.$data.length) {
      end = this.$data.length;
    }

    //현재 페이지에 맞게 카드 렌더링하기
    for (let i = start; i < end; i++) {
      pages.render(this.$data[i]);
    }
  }

  makePages() {
    const root = document.getElementById("recipePage");
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    let size = this.$data.length / 3;

    if (this.$data.length % 3 != 0) {
      size += 1;
    }

    //레시피 카드 초기화
    this.setPages(1);

    for (let i = 1; i <= size; i++) {
      const pagenum = document.createElement("span");
      pagenum.appendChild(document.createTextNode(i));
      pagenum.classList.add("page");
      pagenum.addEventListener("click", (e) => {
        this.setPages(i);
      });
      root.appendChild(pagenum);
    }
  }

  render() {
    this.makePages();

    //레시피 정보 초기화
    const recipeContainer = new RecipeContainer(this.$data[0]);
    recipeContainer.render();
  }
}

export default Recipes;
