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

    path.push({
      number: data[i].cntntsNo["#cdata-section"],
      image: findImage(data[i], check),
      title: check
        ? data[i].fdNm["#cdata-section"]
        : data[i].fdmtNm["#cdata-section"],
    });
  }

  return new Promise((resolve) => {
    return resolve(path);
  });
}

function findImage(data, check) {
  if (check) {
    let number = data.rtnImgSeCode["#cdata-section"].split("|");
    let fileCours = data.rtnFileCours["#cdata-section"].split("|");
    let fileName = data.rtnStreFileNm["#cdata-section"].split("|");

    for (let i = 0; i < number.length; i++) {
      if (number[i] === "209006") {
        //대표이미지일때
        return `${base}${fileCours[i]}/${fileName[i]}`;
      }
    }
    return `${base}${fileCours[0]}/${fileName[0]}`;
  } else {
    return `${base}${data.rtnFileCours["#cdata-section"]}/${data.rtnStreFileNm["#cdata-section"]}`;
  }
}
