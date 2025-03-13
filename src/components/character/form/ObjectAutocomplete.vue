<script>
import { ref } from 'vue'
import AutocompleteBox from './AutocompleteBox.vue'

export default {
  name: 'ObjectAutocomplete',
  emits: ['savingObject'],
  components: { AutocompleteBox },
  props: {
    fetchedItems: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const objectName = ref('')

    return {
      objectName,
    }
  },
}
</script>
<template>
  <AutocompleteBox
    label="Name"
    placeholder="Name"
    :items="fetchedItems"
    v-model:name="objectName"
  />
</template>
