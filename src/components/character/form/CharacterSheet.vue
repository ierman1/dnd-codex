<script>
import { provide, reactive } from 'vue'
import Character from '@/core/models/Character'
import ClassList from './ClassList.vue'
import CharacterSheetSection from './CharacterSheetSection.vue'
import CharacterAbilityScores from './CharacterAbilityScores.vue'

export default {
  name: 'CharacterSheet',
  components: { ClassList, CharacterSheetSection, CharacterAbilityScores },
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
    <input
      type="number"
      v-model="character.proficencyBonus"
      placeholder="Proficency bonus"
      class="border-1 outline-0 text-lg rounded-sm w-12 text-center"
    />
    <span class="text-lg">Level {{ character.level }}</span>
  </CharacterSheetSection>

  <!-- CHARACTER STATS -->
  <CharacterAbilityScores />

  <!-- CHARACTER CLASSES -->
  <ClassList />
</template>
