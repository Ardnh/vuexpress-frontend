<template>
   <v-overlay dark :value="dialog">
      <slot></slot>
   </v-overlay>
</template>
<script>
export default {
   props:['dialog']
}
</script>