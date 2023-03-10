class App {
  constructor($container) {
    this.$container = $container;
    this.render();
  }
  render() {
    console.log("연결 완료!");
    nongsaroOpenApiRequest.apiKey = "202303061MOHKXNQUQY72RTDRDBJGA"; //변경할 부분 1 : 발급 받은 인증키
    nongsaroOpenApiRequest.serviceName = "monthFd";
    nongsaroOpenApiRequest.operationName = "monthFdYearLst";
    var dt = new Date();
    nongsaroOpenApiRequest.thisYear = itoStr(dt.getFullYear()); //초기값 현재년도 셋팅
    nongsaroOpenApiRequest.thisMonth = itoStr(dt.getMonth() + 1); //초기값 현재월 셋팅
    nongsaroOpenApiRequest.htmlArea = "nongsaroApiLoadingArea";
    nongsaroOpenApiRequest.callback = "/ajax_local_callback.jsp"; //크로스 도메인 처리를 위한 콜백페이지

    function itoStr($num) {
      $num < 10 ? ($num = "0" + $num) : $num;
      return $num.toString();
    }

    const params = {
      apiKey: "202303061MOHKXNQUQY72RTDRDBJGA",
    };

    //XMLHttpRequest 객체 생성
    var xhr = new XMLHttpRequest();

    //요청을 보낼 방식, url, 비동기여부 설정
    xhr.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthFdYearLst?apiKey=202303061MOHKXNQUQY72RTDRDBJGA",
      true
    );
    //HTTP 요청 헤더 설정
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //요청 전송
    xhr.send();

    //Callback
    xhr.onload = () => {
      if (xhr.status == 200) {
        //success
        console.log(xhr.response);
      } else {
        //failed
      }
    };
  }
}

export default App;
