const lang = {
   data() {
      return {
         latest_news: "隨時隨地獲得RFA最新資訊",
         help_installing: "需要獲得安裝幫助嗎",
         android_header: "安卓版",
         android_1: "點擊以下鏈接在瀏覽器中開啟應用程式",
         android_2: "收到提示後點擊「添加」，將RFA程式安裝到主屏幕",
         apple_header: "iOS版",
         apple_1: "點擊以下鏈接在Safari中開啟應用程式",
         apple_2: "在屏幕底部點擊共享圖標。",
         apple_3: "向下滾動共享菜單，選擇「添加到主屏幕」。",
         apple_4: "點擊右上角「添加」，將應用程式加至主屏幕。",
         go: "前往",
         service: 'mandarin',
      }
   }
}

Vue.createApp(lang).mount('#lang')
