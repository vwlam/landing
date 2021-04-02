serviceconst lang = {
   data() {
      return {
         latest_news: "随时随地获得RFA最新资讯 ",
         help_installing: "安卓／苹果操作系统安装帮助",
         android_header: "安卓设备专用",
         android_1: "点击以下链接，在浏览器中打开应用程序 ",
         android_2: "当提示您将新的RFA应用程序安装到主屏幕时，点击“添加”。",
         apple_header: "苹果操作系统专用",
         apple_1: "点击 以下链接，在Safari里打开应用程序",
         apple_2: "在屏幕底部，点击共享图标。",
         apple_3: "向下滚动共享菜单，然后选择“添加到主屏幕”。",
         apple_4: "点击右上角的“添加”，将应用添加到主屏幕。",
         go: "前往",
         service: 'mandarin'
      }
   }
}
Vue.createApp(lang).mount('#lang')
