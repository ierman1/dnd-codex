<script>
import { computed, ref } from 'vue'
import FeatureList from './FeatureList.vue'

export default {
  name: 'ClassItem',
  components: { FeatureList },
  props: {
    characterClass: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    /**
     * Subclass management
     */
    const hasSubclass = computed(() => props.characterClass.subclass !== null)
    const buttonDisabled = computed(() => !subclassName.value)

    const subclassName = ref('')

    const setSubclass = () => props.characterClass.setSubclass(subclassName.value)

    /**
     * Features management
     */
    const { result } = props.characterClass.fetchFeatures()
    const fetchedFeatures = computed(() => result.value?.features ?? [])

    return {
      hasSubclass,
      buttonDisabled,
      subclassName,
      setSubclass,
      fetchedFeatures,
    }
  },
}
</script>
<template>
  <div class="border-1 rounded-sm p-3 first:mt-0 mt-3">
    <!-- CLASS TITLE -->
    <h2 class="mb-3">
      <span class="text-2xl font-bold">{{ characterClass.name }}</span>
      <span class="inline-block ml-2 text-xl">Level {{ characterClass.level }}</span>
      <span v-if="hasSubclass" class="inline-block ml-2 text-xl">
        - {{ characterClass.subclass.name }}</span
      >
    </h2>
    <!-- END CLASS TITLE -->

    <!-- SUBCLASS FORM -->
    <div v-if="!hasSubclass" class="my-3 flex">
      <div>
        <span class="inline-block font-bold mb-1">Subclass</span>
        <input
          type="text"
          class="block border-1 rounded-sm p-3 outline-0 w-100"
          v-model="subclassName"
        />
      </div>
      <button
        :disabled="buttonDisabled"
        class="self-end inline-block px-5 py-3 ml-2 bg-blue-100 hover:bg-blue-200 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer rounded-sm"
        @click="setSubclass"
      >
        Set subclass
      </button>
    </div>
    <!-- END SUBCLASS FORM -->

    <hr />

    <!-- FEATURE LIST -->
    <div class="mt-3">
      <FeatureList :features="characterClass.features" :fetched-features="fetchedFeatures" />
    </div>
  </div>
</template>
