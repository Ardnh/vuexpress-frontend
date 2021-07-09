<template>
   <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
   props:['message'],
   data(){
      return{
         snackbar: false,
         timeout: 3000
      }
   },
   watch:{
      message: function(value){
         if(value){
            this.snackbar = true
         }
      }
   }
}
</script>