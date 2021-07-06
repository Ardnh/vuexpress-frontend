<template>
   <v-app>
      <Navbar />
      <v-main>
         <router-view />
      </v-main>
   </v-app>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
   components: { Navbar },
};
</script>
<style >
* {
   font-family: "Poppins", sans-serif;
}
</style>