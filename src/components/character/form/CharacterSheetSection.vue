<script>
export default {
  name: 'CharacterSheetSection',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
}
</script>
<template>
  <div class="mx-3 mt-3 p-3 border-1">
    <h2 v-if="title" class="text-3xl font-bold mb-3">{{ title }}</h2>
    <slot></slot>
  </div>
</template>
