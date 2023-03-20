const base = "http://www.nongsaro.go.kr/";

export async function setPath(data) {
  //파일 경로 : http://www.nongsaro.go.kr/cms_contents/855/98891_MF_BIMG_01.jpg

  let path = [];
  let check;

  for (let i = 0; i < data.length; i++) {
    check = data[i].hasOwnProperty("fdNm");
    if (check && data[i].fdSeCode["#cdata-section"] != "290001") {
      //음식이 아닐때는 패스
      continue;
    }

    if (!check && path.length >= 3) break;

    path.push({
      number: data[i].cntntsNo["#cdata-section"],
      image: findImage(data[i], check),
      title: check
        ? data[i].fdNm["#cdata-section"]
        : data[i].fdmtNm["#cdata-section"],
    });
  }

  // const path = [
  //   {
  //     number: "204630",
  //     image: "../../images/mainPic.png",
  //     title: "테스트1",
  //   },
  //   { number: "204630", image: "../../images/logo.png", title: "테스트2" },
  //   { number: "204630", image: "../../images/test1.jpg", title: "테스트3" },
  //   { number: "204630", image: "../../images/test1.jpg", title: "테스트3" },
  //   { number: "204630", image: "../../images/logo.png", title: "테스트2" },
  // ];

  return new Promise((resolve) => {
    // console.log(path);
    return resolve(path);
  });
}

function findImage(data, check) {
  if (check) {
    let number = splitData(data.rtnImgSeCode);
    let fileCours = splitData(data.rtnFileCours);
    let fileName = splitData(data.rtnStreFileNm);

    for (let i = 0; i < number.length; i++) {
      if (number[i] === "209006") {
        //대표이미지일때
        return `${base}${fileCours[i]}/${fileName[i]}`;
      }
    }
    return `${base}${fileCours[0]}/${fileName[0]}`;
  } else {
    let fileCours = splitData(data.rtnFileCours);
    let fileName = splitData(data.rtnStreFileNm);

    if (fileName.length >= 1) {
      return `${base}${fileCours[0]}/${fileName[0]}`;
    }
    return `${base}${data.rtnFileCours["#cdata-section"]}/${data.rtnStreFileNm["#cdata-section"]}`;
  }
}

export function splitData(data) {
  return data["#cdata-section"].split("|");
}
