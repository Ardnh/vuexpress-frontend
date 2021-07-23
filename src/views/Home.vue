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
      <overlay-dialog :dialog="showEditDialog">
         <edit-form
            @close-modal="showEditDialog = !showEditDialog"
         ></edit-form>
      </overlay-dialog>
      <overlay-dialog :dialog="showDetailDialog">
         <detail-form 
            @close-modal="showDetailDialog = !showDetailDialog"
         ></detail-form>
      </overlay-dialog>
      <overlay-dialog :dialog="showDeleteDialog">
         <delete-form 
            @close-modal="showDeleteDialog = !showDeleteDialog"
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
         showDetailDialog: false,
         showEditDialog: false,
         showDeleteDialog: false
      }
   },
   methods:{
      detailItem(id){
         this.showDetailDialog = !this.showDetailDialog
         console.log(id)
      },
      editItem(id){
         this.showEditDialog = !this.showEditDialog
         console.log(id)
      },
      deleteItem(id){
         this.showDeleteDialog = !this.showDeleteDialog
         console.log(id)
      }
   }
};
</script>
<style>
</style>