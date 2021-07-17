<template>
   <v-overlay :value="dialog">
      <slot></slot>
   </v-overlay>
</template>
<script>
export default {
   props:['dialog']
}
</script>