<template>
   <v-container>
      <login-form 
         from="login" 
         :image="img" 
         :title="title" 
         :description="description"
         @onSubmit="login"
         @onError="error" />
      <snack-bar :message="errorMessage"/>
   </v-container>
</template>
<script>
import SnackBar from '../components/global/SnackBar.vue'
import LoginForm from '../components/login/LoginForm.vue'
export default {
   components:{SnackBar, LoginForm},
   data(){
      return{
         img: require('../assets/4002248.jpg'),
         title: "Login",
         description: "welcome to the app, this app build with expressjs and vuejs",
         errorMessage: ""
      }
   },
   methods:{
      login(dataLogin){
         console.log(dataLogin)
      },
      error(errorMessage){
         this.errorMessage = errorMessage
      }
   }
};
</script>
