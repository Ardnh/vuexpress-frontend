<template>
   <v-card v-click-outside="onClose" light width="400">
      <v-card-title>
         Tambah data
         <v-spacer></v-spacer>
         <v-btn @click="onClose" icon>
            <v-icon color="cyan">mdi-close</v-icon>
         </v-btn>
      </v-card-title>
      <v-card-text>
         <v-form ref="form">
            <v-text-field 
               class="mx-2"
               light
               label="Nama"
               :rules="[rules.required]"
               v-model="nama"
            ></v-text-field>
            <v-text-field 
               class="mx-2"
               light
               label="Email"
               :rules="[rules.required, rules.email]"
               v-model="email"
            ></v-text-field>
            <v-text-field 
               class="mx-2"
               light
               label="Jurusan"
               :rules="[rules.required]"
               v-model="jurusan"
            ></v-text-field>
         </v-form>
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn text color="cyan" class="mx-2 text-capitalize">save</v-btn>
      </v-card-actions>
   </v-card>
</template>
<script>
export default {
   data(){
      return{
         nama:'',
         email:'',
         jurusan:'',
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
      saveData(dataSave){
         console.log("save Data ", dataSave)
      }
   }
}
</script>