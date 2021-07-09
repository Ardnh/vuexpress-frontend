<template>
      <v-overlay :value="dialog">
         <v-card class="mx-auto" elevation="0" color="white" width="500" >
            <v-card-title class="black--text" color="white">{{ title }}</v-card-title>
            <v-card-text :class=" action === 'delete'? 'black--text' : ''">
               {{ action === 'delete' ? "Apakah Anda Yakin ?" : '' }}
            </v-card-text>
               <tambah-form v-if="action === 'tambah'"></tambah-form>
               <edit-form v-if=" action === 'edit'"></edit-form>
               <detail-form v-if="action === 'detail'"></detail-form>
            <v-divider></v-divider>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn @click="onClose" text class="font-weight-regular black--text text-capitalize">tutup</v-btn>
               <v-btn 
                  v-if="action != 'detail'" 
                  @click="onActions" 
                  class="font-weight-regular mx-2 text-capitalize"
                  depressed
                  color="cyan darken-4"
               >{{ action === 'delete'? 'Ya' : action }}</v-btn>
            </v-card-actions>
         </v-card>
      </v-overlay>
</template>
<script>
import TambahForm from '../home/TambahForm.vue'
import EditForm from '../home/EditForm.vue'
import DetailForm from '../home/DetailForm.vue'
export default {
   props:['dialog', 'title', 'action', 'someData'],
   components:{ TambahForm, EditForm, DetailForm },
   methods:{
      onClose(){
         this.$emit('onClose')
      },
      onActions(){
         console.log(this.title)
      }
   },
}
</script>