import Ingredients from "../component/Food/Ingredients.js";
import { setPath } from "../component/Food/SetPath.js";
import { getData } from "../component/GetData.js";

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

        //조회 정보 있음
        this.$recipeData = ret;
        const ingredients = new Ingredients();

        //이미지 경로 및 제목 가공
        const path = setPath();
        const root = document.querySelector("#foodContainer");
        const line = document.getElementsByClassName("boldLine");
        const date = document.getElementById("foodDate");

        //푸드페이지쪽으로 이동
        root.classList.remove("disPlayNone");
        line[0].classList.remove("disPlayNone");
        window.scrollTo({ left: 0, top: screen.height, behavior: "smooth" });

        //타이틀
        date.innerText = `${this.$year}년 ${this.$month}월`;

        //첫번째 음식 사진으로 초기화
        ingredients.render(path[this.path].image, path[this.path].title);

        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");

        //이전 식재료 렌더링
        leftArrow.addEventListener("click", () => {
          if (this.path > 0) this.path = this.path - 1;
          ingredients.render(path[this.path].image, path[this.path].title);
        });

        //다음 식재료 렌더링
        rightArrow.addEventListener("click", () => {
          if (this.path < path.length - 1) this.path = this.path + 1;
          ingredients.render(path[this.path].image, path[this.path].title);
        });

        if (ret === undefined || ret === null) {
          //레시피 조회 정보 없음
          const noRecipe = document.getElementById("alertRecipe");
          noRecipe.innerText = `${this.$year}년 ${this.$month}월에는 조회 가능한 레시피가 없습니다.`;
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
