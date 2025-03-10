<script>
import CharacterSkillList from './CharacterSkillList.vue'
import ScoreModifier from '../ScoreModifier.vue'
import CharacterSavingThrow from './CharacterSavingThrow.vue'
import { inject } from 'vue'

export default {
  name: 'CharacterAbilityScores',
  components: { CharacterSavingThrow, CharacterSkillList, ScoreModifier },
  setup() {
    const character = inject('character')

    return {
      character,
    }
  },
}
</script>
<template>
  <div class="flex m-3 mb-0">
    <div
      v-for="abilityScore in character.statblock"
      :key="abilityScore.name"
      class="p-3 border-1 flex-1 mx-1 first:ml-0 last:mr-0"
    >
      <h2 class="text-3xl font-bold mb-3">{{ abilityScore.name }}</h2>
      <div class="border-b-1 py-3">
        <input
          type="number"
          class="border-1 p-3 w-12 h-12 text-center"
          min="1"
          v-model="abilityScore.score"
        />
        <ScoreModifier :number="abilityScore.modifier" size="lg" />
      </div>
      <CharacterSavingThrow :stat="abilityScore" />
      <CharacterSkillList :stat="abilityScore" />
    </div>
  </div>
</template>
