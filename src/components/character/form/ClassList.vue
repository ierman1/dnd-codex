<script>
import FormAddClass from './FormAddClass.vue'
import { computed, inject, ref } from 'vue'
import ClassItem from './ClassItem.vue'
import CharacterSheetSection from './CharacterSheetSection.vue'

export default {
  name: 'ClassList',
  components: { CharacterSheetSection, FormAddClass, ClassItem },
  setup() {
    const character = inject('character')
    const characterClasses = computed(() => character.classes)

    const addingNewClass = ref(false)
    const showForm = () => (addingNewClass.value = true)
    const hideForm = () => (addingNewClass.value = false)

    return {
      characterClasses,
      addingNewClass,
      showForm,
      hideForm,
    }
  },
}
</script>
<template>
  <CharacterSheetSection title="Classes">
    <button
      v-if="!addingNewClass"
      class="bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-sm cursor-pointer"
      @click="showForm"
    >
      [+] Add a new class
    </button>
    <FormAddClass v-if="addingNewClass" @adding-class="hideForm" />
    <div class="mt-3">
      <ClassItem
        v-for="characterClass in characterClasses"
        :key="characterClass.name"
        :character-class="characterClass"
      />
    </div>
  </CharacterSheetSection>
</template>
