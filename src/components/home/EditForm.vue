<template>
   <v-card v-click-outside="onClose" light width="400">
      <v-card-title>
         Edit data
         <v-spacer></v-spacer>
         <v-btn @click="onClose" icon color="cyan">
            <v-icon>mdi-close</v-icon>
         </v-btn>
      </v-card-title>
      <v-card-text>
         <v-form ref="form">
            <v-text-field 
               class="mx-2"
               light
               label="Nama"
               :rules="[rules.required]"
               v-model="dataEdit.nama"
            ></v-text-field>
            <v-text-field 
               class="mx-2"
               light
               label="Email"
               :rules="[rules.required, rules.email]"
               v-model="dataEdit.email"
            ></v-text-field>
            <v-text-field 
               class="mx-2"
               light
               label="Jurusan"
               :rules="[rules.required]"
               v-model="dataEdit.jurusan"
            ></v-text-field>
         </v-form>
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn text color="cyan" class="text-capitalize mx-2">update</v-btn>
      </v-card-actions>
   </v-card>
</template>
<script>
export default {
   data(){
      return{
         dataEdit: {
            nama: 'Ardan Hilal',
            email: 'ardan@email.com',
            jurusan: 'Teknik Informatika'
         },
         rules:{
            required: value => !!value || "Harus diisi",
            email: value => {
               const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               return pattern.test(value) || 'Invalid e-mail.'
            }
         }
      }
   },
   methods:{
      onClose(){
         this.$emit('close-modal')
      },
      updateData(dataUpdate){
         console.log("dari edit form", dataUpdate)
      }
   }
}
</script>