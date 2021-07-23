<template>
   <v-card v-click-outside="onClose" light width="300" >
      <v-card-title>Delete</v-card-title>
      <v-card-text>
         Apakah kamu yakin ?
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn text color="cyan" class="mx-2 text-capitalize">tidak</v-btn>
         <v-btn text color="red" class="mx-2 text-capitalize">ya</v-btn>
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