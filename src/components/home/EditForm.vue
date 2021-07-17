<template>
   <edit-form
      title="Edit data"
      action="Update"
      @onSubmit="updateData"
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
   </edit-form>
</template>
<script>
import EditForm from '../global/TambahEdit.vue'
export default {
   components:{ EditForm },
   data(){
      return{
         dataEdit: {
            nama: 'Ardan Hilal',
            email: 'ardan@email.com',
            jurusan: 'Teknik Informatika'
         }
      }
   },
   methods:{
      updateData(dataUpdate){
         console.log("dari edit form", dataUpdate)
      }
   }
}
</script>