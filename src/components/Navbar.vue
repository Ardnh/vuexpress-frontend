<template>
   <v-app-bar app color="cyan darken-1" dark>
      <v-toolbar-title>
         <v-btn @click="backToHome" text class="text-capitalize headline">
            VuExpress-Student
         </v-btn>
         <v-btn @click="backToHome" text class="ml-10 text-capitalize title">
            Home
         </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
         class="text-capitalize black--text mx-1"
         elevation="0"
         depressed
         to="/login"
         color="cyan lighten-5"
         >Login</v-btn
      >
      <v-btn
         class="text-capitalize black--text mx-1"
         elevation="0"
         depressed
         to="/signup"
         color="cyan lighten-5"
         >Sign Up</v-btn
      >
   </v-app-bar>
</template>
<script>
export default {
   methods: {
      backToHome() {
         this.$router.push("/");
      },
   },
};
</script>
<style>
</style>