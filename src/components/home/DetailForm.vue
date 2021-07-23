<template>
   <v-card v-click-outside="onClose" light width="400">
      <v-card-title class="mx-3">
         Detail
         <v-spacer></v-spacer>
         <v-btn @click="onClose" icon color="cyan">
            <v-icon>mdi-close</v-icon>
         </v-btn>
      </v-card-title>
      <v-card-text>
         <v-list>
            <v-list-item v-for="item in 3" :key="item">
               <v-list-item-content>
                  <v-list-item-title>Nama</v-list-item-title>
                  <v-list-item-subtitle>Muhammad Ardan Hilal</v-list-item-subtitle>
               </v-list-item-content>
            </v-list-item>
         </v-list>
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn text color="cyan" class="text-capitalize mx-3">close</v-btn>
      </v-card-actions>
   </v-card>
</template>
<script>
export default {
   methods:{
      onClose(){
         this.$emit('close-modal')
      }
   }
}
</script>
<style>
   
</style>