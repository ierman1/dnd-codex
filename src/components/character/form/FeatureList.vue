<script>
import { ref } from 'vue'
import ObjectAutocomplete from './ObjectAutocomplete.vue'

export default {
  name: 'FeatureList',
  emits: ['addingFeature'],
  components: { ObjectAutocomplete },
  props: {
    features: {
      type: Array,
      required: true,
    },
    fetchedFeatures: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup() {
    // Features management
    const addingFeature = ref(false)
    const showFeatureForm = () => (addingFeature.value = true)

    return {
      addingFeature,
      showFeatureForm,
    }
  },
}
</script>
<template>
  <h3 class="text-xl font-bold">Features</h3>

  <!-- FEATURE FORM -->
  <div class="my-3" v-if="addingFeature">
    <ObjectAutocomplete :fetched-items="fetchedFeatures" />
  </div>
  <div class="my-3" v-else>
    <button
      class="self-end inline-block px-3 py-1 ml-2 bg-blue-100 hover:bg-blue-200 cursor-pointer rounded-sm"
      @click="showFeatureForm"
    >
      [+] Add a new feature
    </button>
  </div>
  <!-- END FEATURE FORM -->

  <hr />
</template>
