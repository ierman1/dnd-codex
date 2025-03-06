<script>
import { provide, reactive } from 'vue'
import Character from '@/core/models/Character'
import ClassList from './ClassList.vue'
import CharacterSheetSection from './CharacterSheetSection.vue'

export default {
  name: 'CharacterSheet',
  components: { ClassList, CharacterSheetSection },
  setup() {
    const character = reactive(new Character())

    provide('character', character)

    return {
      character,
    }
  },
}
</script>
<template>
  <!-- CHARACTER BASIC DATA -->
  <CharacterSheetSection>
    <input
      type="text"
      v-model="character.name"
      placeholder="Character name"
      class="block border-0 border-b-1 mb-3 outline-0 text-3xl w-full"
    />
    <input
      type="text"
      v-model="character.species"
      placeholder="Species"
      class="border-0 border-b-1 outline-0 text-lg"
    />
    <span class="text-lg">Level {{ character.level }}</span>
  </CharacterSheetSection>

  <!-- CHARACTER STATS -->
  <CharacterSheetSection title="Stats"> </CharacterSheetSection>

  <!-- CHARACTER STATS -->
  <CharacterSheetSection title="Skills"> </CharacterSheetSection>

  <!-- CHARACTER CLASSES -->
  <CharacterSheetSection title="Classes">
    <ClassList />
  </CharacterSheetSection>
</template>
