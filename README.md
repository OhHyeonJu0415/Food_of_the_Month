# Food of the Month : 이달의 식재료 알아보기


:link: Notion : https://open-baboon-cd5.notion.site/FM-Food-of-the-Month-99258762a43b4413884750e13e2df487


---


 
 
 



## :triangular_flag_on_post: 프로젝트 설명
* 연도/월을 선택하면 해당 날짜의 대표적인 식재료와 레시피를 볼 수 있습니다.
* 농사로에서 제공하는 공공데이터를 활용하였습니다.
* 프레임워크, 라이브러리 없이 
__HTML, 순수 CSS__
와 
__순수 JS__
만을 이용해 개발하였습니다.
* __독립적인 컴포넌트 설계__
에 초점을 두고 개발을 진행하였습니다.


> 2023.02 ~ 2023.03
---


 

## :books: 기술 스택
### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Development
 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
 
 
---

## :tv: 실행 화면






---
## 아키텍쳐
### 디렉토리 구조
```bash
├── images : 로고, 메인사진, 헤더 아이콘 이미지 폴더
├── scripts
│   ├── component : 컨테이너 안에서 렌더링 될 컴포넌트 폴더
│   │   ├── Food : 식재료/레시피 종류 렌더링 컴포넌트
│   │   │   ├── Foods.js : 식재료 부분 렌더링
│   │   │   ├── Ingredients.js : 식재료별로 사진, 타이틀 렌더링
│   │   │   ├── Pages.js : 레시피 카드 페이지별로 렌더링
│   │   │   ├── Recipes.js : 레시피 부분 렌더링
│   │   │   └── SetPath.js : 이미지 경로, 식재료, 레시피 정보 가공
│   │   ├── Recipe : 레시피 상세보기 렌더링 컴포넌트
│   │   │   └── RecipeDetail.js
│   │   └── GetData.js : Ajax로 데이터 받아오는 파일
│   ├── section : 각 섹션별 렌더링 될 스크린 폴더
│   │   ├── FoodContainer.js
│   │   ├── MainContainer.js
│   │   └── RecipeContainer.js
│   └── App.js : 공공데이터 사용 설정 및 메인페이지 렌더링
│   └── index.js
├── styles
│   ├── bodyStyles.css
│   ├── common.css : 재사용 되는 스타일 설정 파일
│   ├── HeadFootStyles.css
│   └── reset.css : 브라우저마다 동일한 디자인을 보여주기 위한 스타일 리셋 설정 파일
├── index.html
└── ajax_local_callback.jsp : 크로스 도메인 처리를 위한 콜백 페이지
``` 







