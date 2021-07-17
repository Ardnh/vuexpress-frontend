<template>
   <v-container>
      <v-card elevation="0" class="mx-auto" width="70%">
         <home-header :totalMhs="totalMhs" ></home-header>
         <v-card class="mt-4">
            <data-iterator
               @detailItem="detailItem"   
               @editItem="editItem"   
               @deleteItem="deleteItem"   
            ></data-iterator>
         </v-card>
      </v-card>
      <overlay-dialog :dialog="showDialog">
         <edit-form 
            v-if="action === 'edit'"
            @onClose="showDialog = !showDialog"
         ></edit-form>
         <detail-form 
            v-if="action === 'detail'"
            @onClose="showDialog = !showDialog"
         ></detail-form>
         <delete-form 
            v-if="action === 'delete'"
            @onClose="showDialog = !showDialog"
         ></delete-form>
      </overlay-dialog>
   </v-container>
</template>
<script>
import DataIterator from '../components/global/DataIterator.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import OverlayDialog from '../components/global/BaseOverlay.vue'
import EditForm from '../components/home/EditForm.vue'
import DetailForm from '../components/home/DetailForm.vue'
import DeleteForm from '../components/home/DeleteForm.vue'
export default {
   components: { DataIterator, HomeHeader, OverlayDialog, EditForm, DetailForm, DeleteForm },
   data(){
      return{
         totalMhs: 500,
         showDialog: false,
         title: "",
         action: "",
         someData: []
      }
   },
   methods:{
      changeData(title, action, someData){
         this.showDialog = !this.showDialog
         this.title = title
         this.action = action
         this.someData = someData
      },
      detailItem(id){
         this.changeData('Detail Mahasiswa', 'detail', id)
      },
      editItem(id){
         this.changeData('Edit Data', 'edit', id)
      },
      deleteItem(id){
         this.changeData('Hapus Data', 'delete', id)
      }
   }
};
</script>
<style>
</style>