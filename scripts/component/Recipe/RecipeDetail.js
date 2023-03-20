import { splitData } from "../Food/SetPath.js";
const base = "http://www.nongsaro.go.kr/";

const data = {
  title: "안녕하세유",
  food: `▶ 주재료 : 멥쌀가루 6컵
    ▶ 소: 밤 5개, 콩 1/2컵, 소금 1/5작은술, 깨소금 1/2컵, 미숫가루 2큰술,
    설탕 2큰술
    ▶ 색소: 쑥 20g, 치자물 1작은술, 포도쥬스 30g, 당근즙 30g`,
  make: `  1. 쌀가루 만들기
  ① 쌀을 깨끗이 씻어 일어 5시간 이상 불린 후 물기를 빼고 소금을 넣어
  가루로 곱게 빻아 중간체에 내린다.
  ② 쑥송편을 할 가루는 쌀 빻을 때 데친 쑥을 넣어 함께 빻는다.
  2. 소 만들기
  ① 밤은 껍질을 벗겨 잘게 썬다. ② 풋콩은 약간의 소금 간을 하고 마른콩
  은 불려서 삶아 소금간을 한다. ③ 깨소금에 미숫가루와 설탕을 섞는다.
  3. 송편 빚기
  ① 쌀가루를 5등분하여 각각의 색깔이 나도록 익반죽하여 많이 치댄다.
  ② 반죽을 밤알만한 크기로 떼어 둥글게 빚어 가운데를 파서 소를 넣고
  잘 아물려 모양을 낸다. ③ 빚은 송편에 색색으로 꽃 모양을 만들어
  장식한다.
  4. 안쳐 찌기
  ① 찜통에 솔잎을 깔고 송편이 닿지 않게 놓고 솔잎으로 덮은 후 다시
  송편, 솔잎의 순서로 안친다.
  ② 송편 위로 골고루 김이 오른 후 20분 정도 찐다.
  5. 다 쪄지면 냉수에 급히 씻어서 솔잎을 떼고 소쿠리에 건져 물기를 제거
  하고 참기름을 바른다.`,
  energy: "200.1",
  crb: "200.1",
  ntrfs: "200.1",
  prot: "200.1",
  edblfibr: "200.1",
};

class RecipeDetail {
  constructor($data) {
    this.$data = $data;
  }

  setTitle() {
    const recipeName = document.getElementById("mainTitleRecipe");

    const span = recipeName.firstElementChild;
    span.innerText = `${this.$data.fdNm["#cdata-section"]}`;
    // span.innerText = data.title;
  }

  setFood() {
    const matrlInfo = document.getElementById("matrlInfo");
    matrlInfo.innerText = this.$data.matrlInfo["#cdata-section"];
    // matrlInfo.innerText = data.food;
  }

  setRecipe() {
    const ckngMthInfo = document.getElementById("ckngMthInfo");
    ckngMthInfo.innerText = this.$data.ckngMthInfo["#cdata-section"];
    // ckngMthInfo.innerText = data.make;
  }

  setImage() {
    let cours = splitData(this.$data.rtnFileCours);
    let fileName = splitData(this.$data.rtnStreFileNm);

    const mainPic = document.getElementById("mainRecipePic");
    const subPic = document.getElementById("subRecipePic");

    mainPic.setAttribute("src", `${base}${cours[0]}/${fileName[0]}`);
    mainPic.setAttribute("alt", "레시피 사진");
    while (subPic.firstChild) {
      subPic.removeChild(subPic.firstChild);
    }

    for (let i = 0; i < cours.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", `${base}${cours[i]}/${fileName[i]}`);
      img.setAttribute("alt", "레시피 사진");
      img.addEventListener("click", () => {
        mainPic.setAttribute("src", `${base}${cours[i]}/${fileName[i]}`);
      });
      subPic.appendChild(img);
    }
  }

  setIngredient() {
    const energy = document.getElementById("energy");
    energy.innerText = this.$data.energyQy["#cdata-section"];
    // energy.innerText = data.energy;

    const crb = document.getElementById("crb");
    crb.innerText = this.$data.crbQy["#cdata-section"];
    // crb.innerText = data.crb;

    const ntrfs = document.getElementById("ntrfs");
    ntrfs.innerText = this.$data.ntrfsQy["#cdata-section"];
    // ntrfs.innerText = data.ntrfs;

    const prot = document.getElementById("prot");
    prot.innerText = this.$data.protQy["#cdata-section"];
    // prot.innerText = data.prot;

    const edblfibr = document.getElementById("edblfibr");
    edblfibr.innerText = this.$data.edblfibrQy["#cdata-section"];
    // edblfibr.innerText = data.edblfibr;
  }

  render() {
    this.setTitle();
    this.setFood();
    this.setRecipe();
    this.setImage();
    this.setIngredient();
  }
}

export default RecipeDetail;
