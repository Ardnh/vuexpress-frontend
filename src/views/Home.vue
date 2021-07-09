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
      <overlay-dialog
         @onClose="showDialog = false"
         :dialog="showDialog"
         :title="title"
         :action="action"
         :someData="someData"
      ></overlay-dialog>
   </v-container>
</template>
<script>
import DataIterator from '../components/global/DataIterator.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import OverlayDialog from '../components/global/BaseOverlay.vue'
export default {
   components: { DataIterator, HomeHeader, OverlayDialog },
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
         console.log(id)
      },
      editItem(id){
         this.changeData('Edit Data', 'edit', id)
         console.log(id)
      },
      deleteItem(id){
         this.changeData('Hapus Data', 'delete', id)
         console.log(id)
      }
   }
};
</script>
<style>
</style>