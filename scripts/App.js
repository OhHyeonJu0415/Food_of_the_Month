import MainContainer from "./section/MainContainer.js";

class App {
  constructor($container) {
    this.$container = $container;
    // this.key = "202303061MOHKXNQUQY72RTDRDBJGA";
    this.render();
  }

  render() {
    nongsaroOpenApiRequest.apiKey = this.key; //발급 받은 인증키
    nongsaroOpenApiRequest.serviceName = "monthFd";
    nongsaroOpenApiRequest.operationName = "monthFdYearLst";
    nongsaroOpenApiRequest.thisYear = "2020"; //초기값 년도 셋팅
    nongsaroOpenApiRequest.thisMonth = "1"; //초기값 월 셋팅
    nongsaroOpenApiRequest.htmlArea = "nongsaroApiLoadingArea";
    nongsaroOpenApiRequest.callback = "/ajax_local_callback.jsp"; //크로스 도메인 처리를 위한 콜백페이지

    const mainContainer = new MainContainer();
    mainContainer.render(this.$container);
  }
}

export default App;
