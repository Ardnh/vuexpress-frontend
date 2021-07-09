<template>
   <v-app-bar app color="cyan darken-1" dark>
      <v-toolbar-title>
         <v-btn @click="backToHome" text class="text-capitalize headline">
            VuExpress-Student
         </v-btn>
         <v-btn 
            v-if="checkRoute" 
            to="/" 
            text 
            class="ml-10 text-capitalize title">
            Home
         </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
         v-if="!checkRoute"
         class="text-capitalize black--text mx-1"
         elevation="0"
         depressed
         dense
         to="/login"
         color="cyan lighten-5"
         >Login</v-btn
      >
      <v-btn
         v-if="!checkRoute"
         class="text-capitalize black--text mx-1"
         elevation="0"
         depressed
         dense
         to="/signup"
         color="cyan lighten-5"
         >Sign Up</v-btn
      >
      <v-btn
         v-if="checkRoute"
         class="text-capitalize black--text mx-1"
         elevation="0"
         to="/login"
         depressed
         dense
         color="cyan lighten-5"
         >Logout</v-btn
      >
   </v-app-bar>
</template>
<script>
export default {
   methods: {
      backToHome() {
         if(this.$route.name === 'Home'){
            return
         }
         this.$router.push("/");
      },
   },
   computed:{
      checkRoute(){
         return this.$route.name === 'Home'? true : false
      }
   }
};
</script>
<style>
</style>