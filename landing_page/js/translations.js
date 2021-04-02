const lang = {
   data() {
      return {
         latest_news: "Get the latest from RFA, anywhere.",
         help_installing: "Need help installing for",
         android_header: "For Android devices",
         android_1: "Click on the link below to open up the app in your browser",
         android_2: "Tap 'Add' when prompted to install the new RFA app to your home screen.",
         apple_header: "For iOS devices",
         apple_1: "Click on the link below to open the app in Safari.",
         apple_2: "On the bottom of the screen, tap on the Share icon.",
         apple_3: "Scroll down the Share menu and select 'Add to Home Screen'.",
         apple_4: "Tap 'Add' on the top right corner to add the app to your home screen.",
         go: "Go",
         service: 'english'
      }
   }
}

Vue.createApp(lang).mount('#lang')
