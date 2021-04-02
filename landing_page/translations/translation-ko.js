const lang = {
   data() {
      return {
         latest_news: "앱으로 자유아시아방송의 최신 뉴스를 받아보세요.",
         help_installing: "앱 설치에 도움이 필요하세요?",
         android_header: "안드로이드 기기",
         android_1: "아래 링크를 누르면 다운로드 페이지가 열립니다.",
         android_2: "추가 버튼을 누르면 자유아시아방송 앱이 홈 화면에 설치됩니다.",
         apple_header: "애플 기기",
         apple_1: "아래 링크를 누르면 다운로드 페이지가 열립니다.",
         apple_2: "화면 밑의 공유 아이콘을 누르세요",
         apple_3: "공유 메뉴를 아래로 스크롤해서 '홈 스크린에 추가'를 선택합니다.",
         apple_4: "추가 버튼을 누르면 자유아시아방송 앱이 홈 화면에 설치됩니다.",
         go: "다음",
         service: 'korean',
      }
   }
}

Vue.createApp(lang).mount('#lang')
