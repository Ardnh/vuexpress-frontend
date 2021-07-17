<template>
   <tambah-form
      title="Tambah Data"
      action="save"
      dataEdit=""
      @onSubmit="saveData"
      @onClose="$emit('onClose')"
   >
      <v-form ref="form">
         <v-text-field 
            class="mx-5"
            light
            label="Nama"
            :rules="[rules.required]"
            v-model="dataEdit.nama"
         ></v-text-field>
         <v-text-field 
            class="mx-5"
            light
            label="Email"
            :rules="[rules.required, rules.email]"
            v-model="dataEdit.email"
         ></v-text-field>
         <v-text-field 
            class="mx-5"
            light
            label="Jurusan"
            :rules="[rules.required]"
            v-model="dataEdit.jurusan"
         ></v-text-field>
      </v-form>
   </tambah-form>
</template>
<script>
import TambahForm from '../global/TambahEdit.vue'
export default {
   components: { TambahForm },
   data(){
      return{}
   },
   methods:{
      saveData(dataSave){
         console.log("save Data ", dataSave)
      }
   }
}
</script>