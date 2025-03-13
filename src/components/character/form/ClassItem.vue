<script>
import { computed, ref } from 'vue'

export default {
  name: 'ClassItem',
  props: {
    characterClass: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const hasSubclass = computed(() => props.characterClass.subclass !== null)
    const buttonDisabled = computed(() => !subclassName.value)

    const subclassName = ref('')

    const setSubclass = () => props.characterClass.setSubclass(subclassName.value)

    return {
      hasSubclass,
      buttonDisabled,
      subclassName,
      setSubclass,
    }
  },
}
</script>
<template>
  <div class="border-1 rounded-sm p-3 first:mt-0 mt-3">
    <!-- CLASS TITLE -->
    <h3>
      <span class="text-2xl font-bold">{{ characterClass.name }}</span>
      <span class="inline-block ml-2 text-xl">Level {{ characterClass.level }}</span>
    </h3>
    <!-- END CLASS TITLE -->

    <!-- SUBCLASS DISPLAY -->
    <div v-if="hasSubclass" class="mt-3">
      <h4 class="text-xl">{{ characterClass.subclass.name }}</h4>
    </div>
    <!-- END SUBCLASS DISPLAY -->

    <!-- SUBCLASS FORM -->
    <div v-else class="mt-3 flex">
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
  </div>
</template>
