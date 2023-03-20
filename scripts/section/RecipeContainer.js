import { getData } from "../component/GetData.js";
import RecipeDetail from "../component/Recipe/RecipeDetail.js";

class RecipeContainer {
  constructor($data) {
    this.$data = $data;
  }

  render() {
    (async () => {
      let url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthNewFdDtl?apiKey=202303061MOHKXNQUQY72RTDRDBJGA&cntntsNo=${this.$data.number}`;
      try {
        const ret = await getData("GET", url, false);
        if (ret === undefined || ret === null) {
          //조회 정보 없음
          alert(
            `${this.$data.title} 레시피 정보를 불러오는데 실패했습니다. 상단 메일 버튼을 통해 개발자에게 제보해주세요 😭`
          );
        } else {
          //조회 정보 있음
          const recipe = document.querySelector("#recipeContainer");
          recipe.classList.remove("disPlayNone");

          console.log(ret);

          //레시피 정보 렌더링 클래스 호출
          const recipeDetail = new RecipeDetail(ret);
          recipeDetail.render();
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

export default RecipeContainer;
