<template>
   <v-card color="white" width="500">
      <v-card-title class="black--text mx-5">
         {{ title }}
         <v-spacer></v-spacer>
         <v-btn 
            @click.native="$emit('onClose')" 
            fab
            depressed 
            light
            icon
         >
            <v-icon>mdi-close</v-icon>
         </v-btn>
      </v-card-title>
      <v-card-text class="my-4">
         <slot></slot>
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn @click="onSubmit" type="submit" class="mx-5 mb-3 px-4 text-lowercase" light outlined color="cyan darken-1">{{ action }}</v-btn>
      </v-card-actions>
   </v-card>
</template>
<script>
export default {
   props: ['title', 'action', 'dataEdit'],
   data(){
      return{
         rules:{
            required: value => !!value || "Harus diisi !",
            email: value => {
               const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               return pattern.test(value) || "Email tidak valid !"
            }
         },
         namaUser: '',
         emailUser: '',
         jurusanUser: '',
         isEdit: false
      }
   },
   methods:{
      onSubmit(){
         if(this.$refs.form.validate()){
            const dataSubmit = {
               nama: this.dataEdit.nama,
               email: this.dataEdit.email,
               jurusan: this.dataEdit.jurusan
            }
            this.$emit('onSubmit', dataSubmit)
         }

         console.log("tidak valid")
      }
   },
}
</script>