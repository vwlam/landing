const lang = {
   data() {
      return {
         latest_news: "Nhận tin tức mới nhất từ RFA từ mọi nơi",
         help_installing: "Cần trợ giúp khi lắp đặt cho Android hoặc iOS?",
         android_header: "Cho các thiết bị Android",
         android_1: "Nhấn vào đường dẫn dưới đây để mở ứng dụng trên trình duyệt của bạn",
         android_2: "Chọn 'Thêm' khi vào lắp đặt ứng dụng mới của RFA trên trang chủ của bạn",
         apple_header: "Cho thiết bị iOS",
         apple_1: "Nhấn vào đường dẫn dưới  để mở ứng dụng trong Safari",
         apple_2: "Ở phần dưới màn hình, chọn biểu tượng Chia sẻ (share)",
         apple_3: "Kéo xuống phần lựa chọn (menu) chia sẻ (share) và chọn 'Thêm vào trang chủ'",
         apple_4: "Chọn 'Thêm' ở góc trên bên phải để thêm ứng dụng vào trang chủ của bạn",
         go: "Chọn",
         service: 'vietnamese',
      }
   }
}

Vue.createApp(lang).mount('#lang')
