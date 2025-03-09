<script>
import { computed, inject } from 'vue'
import ScoreModifier from '../ScoreModifier.vue'

export default {
  name: 'CharacterSkill',
  components: { ScoreModifier },
  props: {
    skillName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const character = inject('character')
    const skill = character.findSkill(props.skillName)

    const hasProficency = computed(() => skill.proficency)
    const hasExpertise = computed(() => skill.expertise)

    return {
      character,
      skill,
      hasProficency,
      hasExpertise,
    }
  },
}
</script>
<template>
  <div v-if="skill">
    <input :disabled="hasExpertise" type="checkbox" v-model="skill.proficency" />
    <input :disabled="!hasProficency" type="checkbox" v-model="skill.expertise" />
    <ScoreModifier :number="skill.modifier" />
    <span class="inline-block ml-2">{{ skill.name }}</span>
  </div>
</template>
