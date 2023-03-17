class FoodContainer {
  constructor($container, $data, $year, $month) {
    this.$container = $container;
    this.$data = $data;
    this.$year = $year;
    this.$month = $month;
  }

  render() {
    const root = document.querySelector("#foodContainer");
    const line = document.getElementsByClassName("boldLine");
    const date = document.getElementById("foodDate");
    root.classList.remove("disPlayNone");
    line[0].classList.remove("disPlayNone");
    window.scrollTo({ left: 0, top: screen.height, behavior: "smooth" });

    date.innerText = `${this.$year}년 ${this.$month}월`;
  }
}

export default FoodContainer;
