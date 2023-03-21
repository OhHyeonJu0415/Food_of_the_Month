import { getData } from "../component/GetData.js";
import FoodContainer from "./FoodContainer.js";

class MainContainer {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    const years = document.getElementsByClassName("years");
    const yearTitle = document.getElementById("yearTitle");

    yearTitle.innerHTML = "2020";

    const months = document.getElementsByClassName("months");
    const monthTitle = document.getElementById("monthTitle");

    monthTitle.innerHTML = "01";

    for (let i = 0; i < 6; i++) {
      years[i].addEventListener("click", () => {
        yearTitle.innerText = years[i].innerText;
      });
    }

    for (let i = 0; i < 12; i++) {
      months[i].addEventListener("click", () => {
        if (months[i].innerText.length == 1) {
          monthTitle.innerText = `0${months[i].innerText}`;
        } else {
          monthTitle.innerText = months[i].innerText;
        }
      });
    }

    const btn = document.getElementById("searchButton");
    btn.addEventListener("click", async () => {
      let url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthFdmtLst?apiKey=202303208FDHAUQ3LYKIWQD40JKNMA&thisYear=${yearTitle.innerText}&thisMonth=${monthTitle.innerText}`;
      try {
        const ret = await getData("GET", url);
        if (ret === undefined || ret === null) {
          //조회 정보 없음
          alert(
            `${yearTitle.innerText}년 ${monthTitle.innerText}월에는 조회 가능한 정보가 존재하지 않습니다. `
          );
        } else {
          //조회 정보 있음
          const foodContainer = new FoodContainer(
            this.$container,
            ret,
            yearTitle.innerText,
            monthTitle.innerText
          );
          foodContainer.render();
        }
      } catch (error) {
        console.log(error);
        alert(
          "예상치 못한 에러가 발생했습니다! 상단 메일 버튼을 통해 개발자에게 제보해주세요 😭"
        );
      }
    });
  }
}

export default MainContainer;
