<script>
import FormAddClass from './FormAddClass.vue'
import { computed, inject } from 'vue'
import ClassItem from './ClassItem.vue'
import CharacterSheetSection from './CharacterSheetSection.vue'

export default {
  name: 'ClassList',
  components: { CharacterSheetSection, FormAddClass, ClassItem },
  setup() {
    const character = inject('character')
    const characterClasses = computed(() => character.classes)

    return {
      characterClasses,
    }
  },
}
</script>
<template>
  <CharacterSheetSection title="Classes">
    <FormAddClass />
    <div class="mt-3">
      <ClassItem
        v-for="characterClass in characterClasses"
        :key="characterClass.name"
        :character-class="characterClass"
      />
    </div>
  </CharacterSheetSection>
</template>
