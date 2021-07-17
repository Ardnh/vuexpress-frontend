<template>
   <v-card class="mt-10">
      <v-card-title>Mahasiswa Terdaftar</v-card-title>
      <v-card-actions>
         <v-btn @click.stop="showDialog = !showDialog" color="cyan darken-5 text-capitalize">Tambah mahasiswa</v-btn>
         <v-card-text>Total mahasiswa: {{ totalMhs }}</v-card-text>
      </v-card-actions>
      <base-dialog :dialog="showDialog">
         <tambah-form @onClose="showDialog = !showDialog"></tambah-form>
      </base-dialog>
   </v-card>
</template>
<script>
import BaseDialog from '../global/BaseOverlay.vue'
import TambahForm from './TambahForm.vue'
export default {
   props:['totalMhs'],
   components:{ BaseDialog, TambahForm },
   data(){
      return{
         showDialog: false,
      }
   },
}
</script>