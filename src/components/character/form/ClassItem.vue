<script>
export default {
  name: 'ClassItem',
  props: {
    characterClass: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>
<template>
  <div class="border-1 rounded-sm p-3 first:mt-0 mt-3">
    <h3>
      <span class="text-2xl font-bold">{{ characterClass.name }}</span>
      <span class="inline-block ml-2 text-xl">Level {{ characterClass.level }}</span>
    </h3>
    <div class="mt-3">
      <h4 class="text-xl">Feats</h4>
    </div>
  </div>
</template>
