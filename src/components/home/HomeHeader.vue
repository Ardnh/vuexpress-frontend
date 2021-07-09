<template>
   <v-card class="mt-10">
      <v-card-title>Mahasiswa Terdaftar</v-card-title>
      <v-card-actions>
         <v-btn @click.stop="showDialog = !showDialog" color="cyan darken-5 text-capitalize">Tambah mahasiswa</v-btn>
         <v-card-text>Total mahasiswa: {{ totalMhs }}</v-card-text>
      </v-card-actions>
      <base-dialog 
         :dialog="showDialog"
         @onClose="showDialog = false"
         title="Tambah Mahasiswa"
         action="tambah"
         someData=""
      ></base-dialog>
   </v-card>
</template>
<script>
import BaseDialog from '../global/BaseOverlay.vue'
export default {
   props:['totalMhs'],
   components:{ BaseDialog },
   data(){
      return{
         showDialog: false,
      }
   },
}
</script>