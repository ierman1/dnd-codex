<script>
import { inject } from 'vue'
import CharacterSkillList from './CharacterSkillList.vue'
import ScoreModifier from '../ScoreModifier.vue'
import CharacterSavingThrow from './CharacterSavingThrow.vue'

export default {
  name: 'CharacterStat',
  components: { CharacterSavingThrow, CharacterSkillList, ScoreModifier },
  props: {
    statSlug: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const character = inject('character')
    const stat = character.statblock[props.statSlug]

    return {
      stat,
    }
  },
}
</script>
<template>
  <div class="p-3 border-1 flex-1 mx-1 first:ml-0 last:mr-0">
    <h2 class="text-3xl font-bold mb-3">{{ stat.name }}</h2>
    <div class="border-b-1 py-3">
      <input
        type="number"
        class="border-1 p-3 w-12 h-12 text-center"
        min="1"
        v-model="stat.score"
      />
      <ScoreModifier :number="stat.modifier" size="lg" />
    </div>
    <CharacterSavingThrow :stat="stat" />
    <CharacterSkillList :stat="stat" />
  </div>
</template>
