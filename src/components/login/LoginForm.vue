<template>
   <v-card rounded="0" class="d-flex flex-wrap align-center mx-auto mt-10" width="600" height="500">
         <v-card rounded="0" elevation="0" height="100%" width="40%">
            <v-img height="100%" :src="image"></v-img>
         </v-card>
         <v-card class="d-flex align-center" width="60%" rounded="0" elevation="0" height="100%">
            <v-row justify="center">
               <v-col cols="11">
                  <v-card elevation="0" rounded="lg" class=" mx-2">
                     <v-card-title>{{ title }}</v-card-title>
                     <v-card-text>{{ description }}</v-card-text>
                     <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                           v-if="from !== 'login'"
                           v-model="username"
                           :rules="[rules.required]"
                           label="Username"
                           required
                        ></v-text-field>
                        <v-text-field
                           v-model="email"
                           :rules="[rules.email]"
                           label="Email"
                           required
                        ></v-text-field>
                        <v-text-field
                           v-model="password"
                           :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                           :rules="[rules.required]"
                           :type="show ? 'text' : 'password'"
                           name="input-10-1"
                           label="Password"
                           counter
                           @click:append="show = !show"
                        ></v-text-field>
                     </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn @click="onSubmit" tile color="cyan darken-1" class="px-5 white--text text-capitalize mx-auto">{{title}}</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-col>
            </v-row>
         </v-card>
   </v-card>
</template>
<script>
export default {
   props:['title', 'description' ,'from', 'image'],
   data(){
      return{
         username: "",
         email: "",
         password: "",
         show: false,
         valid: true,
         errorMessage: "",
         rules: {
            email: (value) => {
               const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return pattern.test(value) || "Invalid e-mail.";
            },
            required: (value) => !!value || "Required.",
         }
      }
   },
   methods:{
      async validate(){
         this.$refs.form.validate()
      },
      async onSubmit(){
         await this.validate()
         if(this.valid){
            const dataForm = {
               email: this.email,
               password: this.password
            }
            if(this.username){
               dataForm['username'] = this.username
            }
            this.$emit('onSubmit', dataForm)
         }
         if(this.from === 'login'){
            this.errorMessage = "Email dan Password harus diisi"
         } else {
            this.errorMessage = "Username Email dan Password harus diisi"
         }
         this.$emit('onError', this.errorMessage)
      }
   }
}
</script>
<style>
   
</style>