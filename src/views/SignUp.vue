<template>
   <v-container>
      <login-form 
         from="Sign Up" 
         :image="img" 
         :title="title" 
         :description="description"
         @onSubmit="signUp" 
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
         img: require('../assets/4002263.png'),
         title: "Sign Up",
         description: "welcome to the app, this app build with expressjs and vuejs, i like minimalist design or whatever",
         errorMessage: ""
      }
   },
   methods:{
      signUp(dataSignUp){
         console.log(dataSignUp)
      },
      error(errorMessage){
         this.errorMessage = errorMessage
      }
   }
};
</script>
