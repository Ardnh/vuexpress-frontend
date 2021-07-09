<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    class="elevation-1"
  >
      <template v-slot:[`item.actions`]="{ item }">
         <v-btn @click="detailItem(item)" small fab outlined color="cyan darken-5" class="mr-2 my-3">
            <v-icon>
               mdi-account
            </v-icon>
         </v-btn>
         <v-btn @click="editItem(item)" small fab outlined color="teal darken-2" class="mr-2">
            <v-icon>
               mdi-pencil
            </v-icon>
         </v-btn>
         <v-btn small fab outlined color="red darken-2" class="mr-2" @click="deleteItem(item)">
            <v-icon>
               mdi-delete
            </v-icon>
         </v-btn>
      </template>
  </v-data-table>
</template>
<script>
export default {
   data(){
      return{
         headers: [
         {
            text: 'Nama',
            align: 'start',
            sortable: false,
            value: 'nama',
          },
          { text: 'Email', value: 'email', align: 'center', sortable: false },
          { text: 'Jurusan', value: 'jurusan', sortable: false, align: 'center' },
          { text: 'Actions', value: 'actions', sortable: false, align:'center'}
        ],
        items:[
           {
              nama: "mhs",
              email: "mhs@email.com",
              jurusan: "jurusan"
           }
        ]
      }
   },
   methods:{
      detailItem(id){
         this.$emit('detailItem', id)
      },
      editItem(id){
         this.$emit('editItem', id)
      },
      deleteItem(id){
         this.$emit('deleteItem', id)
      }
   }
}
</script>
<style>
   
</style>