import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// router.beforeResolve((to, from, next) => {
//   // cek apakah current route butuh authentikasi
//   if( to.meta.requiresAuth ){
//     // cek apakah tidak terdapat token di vuex
//     console.log("butuh authentication")
//     if(!store.getters.login_user){
//       // cek apakah token sudah ada di localstorage
//       console.log("cek token di localstorage")
//       if(localStorage.getItem('token_user') !== null){
//         console.log("selesai cek token")
//         store.state.token_user = localStorage.getItem('token_user')
//         next()
//       } else {
//         console.log("harus login dulu")
//         next({ name: 'Login' })
//       }
//     } else {
//       console.log("harus login terlebih dahulu")
//       next()
//     }
//   } else {
//     console.log("tidak butuh authentication")
//     next()
//   }
// })

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
