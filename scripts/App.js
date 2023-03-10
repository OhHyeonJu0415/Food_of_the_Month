import MainContainer from "./section/MainContainer.js";

class App {
  constructor($container) {
    this.$container = $container;
    this.key = "202303061MOHKXNQUQY72RTDRDBJGA";
    this.render();
  }

  getData(requestType, urlLink, callbackS, callbackF) {
    //XMLHttpRequest 객체 생성
    var xhr = new XMLHttpRequest();

    xhr.open(requestType, urlLink, true);

    //요청 전송
    xhr.send();

    //Callback
    xhr.onload = () => {
      if (xhr.status == 200) {
        //success
        callbackS();
      } else {
        //failed
        callbackF();
      }
    };
  }

  render() {
    nongsaroOpenApiRequest.apiKey = this.key; //발급 받은 인증키
    nongsaroOpenApiRequest.serviceName = "monthFd";
    nongsaroOpenApiRequest.operationName = "monthFdYearLst";
    var dt = new Date();
    nongsaroOpenApiRequest.thisYear = "2020"; //초기값 현재년도 셋팅
    nongsaroOpenApiRequest.thisMonth = "1"; //초기값 현재월 셋팅
    nongsaroOpenApiRequest.htmlArea = "nongsaroApiLoadingArea";
    nongsaroOpenApiRequest.callback = "/ajax_local_callback.jsp"; //크로스 도메인 처리를 위한 콜백페이지

    const mainContainer = new MainContainer();
    mainContainer.render(this.$container);

    // this.getData(
    //   "GET",
    //   "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFd/monthFdYearLst?apiKey=202303061MOHKXNQUQY72RTDRDBJGA",
    //   () => {
    //     console.log("함수 분리!");
    //   }
    // );
  }
}

export default App;
