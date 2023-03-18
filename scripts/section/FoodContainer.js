import { setPath } from "../component/Food/SetPath.js";
import { getData } from "../component/GetData.js";
import Foods from "../component/Food/Foods.js";
import Recipes from "../component/Food/Recipes.js";

class FoodContainer {
  constructor($container, $foodData, $year, $month) {
    this.$container = $container;
    this.$foodData = $foodData;
    this.$recipeData = "";
    this.$year = $year;
    this.$month = $month;
    this.path = 0;
  }

  render() {
    (async () => {
      let url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthNewFdLst?apiKey=202303061MOHKXNQUQY72RTDRDBJGA&thisYear=${this.$year}&thisMonth=${this.$month}`;
      try {
        const ret = await getData("GET", url);
        this.$recipeData = ret;

        const root = document.querySelector("#foodContainer");
        const line = document.getElementsByClassName("boldLine");
        const date = document.getElementById("foodDate");
        //타이틀
        date.innerText = `${this.$year}년 ${this.$month}월`;

        //푸드페이지쪽으로 이동
        root.classList.remove("disPlayNone");
        line[0].classList.remove("disPlayNone");
        window.scrollTo({ left: 0, top: screen.height, behavior: "smooth" });

        //이미지 경로 및 제목 가공
        const path = await setPath(this.$foodData);
        const pathRecipe = await setPath(this.$recipeData);

        //식재료 부분 렌더링
        const foods = new Foods(path);
        foods.render();

        if (this.$recipeData === undefined || this.$recipeData === null) {
          //레시피 조회 정보 없음
          const noRecipe = document.getElementById("alertRecipe");
          noRecipe.innerText = `${this.$year}년 ${this.$month}월에는 조회 가능한 레시피가 없습니다.`;
        } else {
          //레시피 있음
          //레피시 부분 렌더링
          const recipes = new Recipes(pathRecipe);
          recipes.render();
        }
      } catch (error) {
        console.log(error);
        alert(
          "예상치 못한 에러가 발생했습니다! 상단 메일 버튼을 통해 개발자에게 제보해주세요 😭"
        );
      }
    })();
  }
}

export default FoodContainer;
