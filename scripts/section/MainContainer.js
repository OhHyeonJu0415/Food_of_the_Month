import { getData } from "../component/GetData.js";

class MainContainer {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    const years = document.getElementsByClassName("years");
    const yearTitle = document.getElementById("yearTitle");

    yearTitle.innerHTML = "2020";

    for (let i = 0; i < 6; i++) {
      years[i].addEventListener("click", () => {
        yearTitle.innerText = years[i].innerText;
      });
    }

    const months = document.getElementsByClassName("months");
    const monthTitle = document.getElementById("monthTitle");

    monthTitle.innerHTML = "1";

    for (let i = 0; i < 12; i++) {
      months[i].addEventListener("click", () => {
        monthTitle.innerText = months[i].innerText;
      });
    }

    const btn = document.getElementById("searchButton");
    btn.addEventListener("click", () => {
      let url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthFdmtLst?apiKey=202303061MOHKXNQUQY72RTDRDBJGA&thisYear=${yearTitle.innerText}&thisMonth=${monthTitle.innerText}`;
      const ret = getData("GET", url);
      console.log(ret);
    });
  }
}

export default MainContainer;
