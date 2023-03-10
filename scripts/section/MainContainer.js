class MainContainer {
  constructor($container) {
    this.$container = $container;
  }

  render() {
    console.log("main");
    const years = document.getElementsByClassName("years");
    const yearTitle = document.getElementById("yearTitle");
    for (let i = 0; i < 6; i++) {
      years[i].addEventListener("click", () => {
        yearTitle.innerText = years[i].innerText;
      });
    }

    const months = document.getElementsByClassName("months");
    const monthTitle = document.getElementById("monthTitle");
    for (let i = 0; i < 12; i++) {
      months[i].addEventListener("click", () => {
        monthTitle.innerText = months[i].innerText;
      });
    }
  }
}

export default MainContainer;
